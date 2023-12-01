import {
  getAuth, createUserWithEmailAndPassword, updateProfile,
  signInWithEmailAndPassword, sendPasswordResetEmail,signOut
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { add_user, sign_out, user_info } from "../redux/features/auth-slice";
import { doc, setDoc, collection} from "firebase/firestore"; 
import {db,auth} from '../firebase/firebase';
// initialize firebase app


// declare auth

const useFirebase = () => {
    // dispatch
    const dispatch = useDispatch()
    // register With Email Password
    const registerWithEmailPassword = (email, password, name,age) => {
        createUserWithEmailAndPassword(auth, email, password) 
        .then(async (userCredential) =>{
            const user = userCredential.user;
            console.log(user.uid);
            console.log(age);
            const ref = doc(collection(db, 'user'), user.uid);
            await setDoc(ref, {age,name, email}, { merge: true });
            try {
                await updateProfile(auth.currentUser, {
                    displayName: name,
                });
        
                dispatch(add_user({
                    name: name,
                    email: user.email, // Use destructured email
                    uid: user.uid, // Use destructured uid
                }));
        
                toast.success(`${name} registered successfully`, {
                    position: 'top-left',
                });
            } catch (error) {
                console.error('Error updating profile:', error);
                // Handle error as needed
            }
        })

        // .then((user) => {
        //     updateProfile(auth.currentUser, {
        //         displayName: name,
        //     }).then(() => {
        //     }).catch((error) => {
        //     });
        //     dispatch(add_user({
        //         name: name,
        //         email: user.user.email,
        //         uid: user.user.uid,
        //     }))
        //     toast.success(`${name} register successfully`, {
        //         position: 'top-left'
        //     })
        // })
        
        .catch((error) => {
            const errorMessage = error?.message;
            console.log(errorMessage);
            toast.error(`${errorMessage}`, {
                position: 'top-left'
            })
        });

    }

    // login with email and password
    const loginWithEmailPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
            const { displayName: name, email, uid } = user.user;
            dispatch(user_info({
                name: name,
                email: email,
                uid: uid
            }))
                toast.success(`${name} login successfully`, {
                position: 'top-left'
            })
        })
        .catch((error) => {
            const errorMessage = error.message;
            toast.error(`${errorMessage}`, {
                position: 'top-left'
            })
        });

    }

    // password reset email sent
    const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
        .then(() => {
            toast.success(`Password reset email sent!`, {
                position: 'top-left'
            })
        })
        .catch((error) => {
            const errorMessage = error?.message;
            toast.error(`${errorMessage}`, {
                position: 'top-left'
            })
        });

    }

    // logout
    const logout = () => {
        signOut(auth).then(() => {
        dispatch(sign_out())
        toast.success(`Sign-out successful.`, {
            position: 'top-left'
        })
        }).catch((error) => {
            // An error happened.
        });
    }

    return {
        registerWithEmailPassword,
        loginWithEmailPassword,
        resetPassword,
        logout
    }
}

export default useFirebase;