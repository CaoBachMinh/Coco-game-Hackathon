import {
  createUserWithEmailAndPassword, updateProfile,
  signInWithEmailAndPassword, sendPasswordResetEmail,signOut, signInWithPopup, GoogleAuthProvider
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { add_user, sign_out, user_info } from "../redux/features/auth-slice";
import { doc, setDoc, collection,getDoc, updateDoc} from "firebase/firestore"; 
import {db,auth, provider} from '../firebase/firebase';


const useFirebase = () => {
    // dispatch
    const dispatch = useDispatch()
    // register With Email Password
    const registerWithEmailPassword = (email, password, name,age) => {
        createUserWithEmailAndPassword(auth, email, password) 
        .then(async (userCredential) =>{
            const user = userCredential.user;
            const ref = doc(collection(db, 'user'), user.uid);
            await setDoc(ref, {age,name, email,password}, { merge: true });
            try {
                await updateProfile(auth.currentUser, {
                    displayName: name,
                });
        
                dispatch(add_user({
                    name: name,
                    email: user.email, // Use destructured email
                    uid: user.uid, // Use destructured uid
                }));
        
                toast.success(`Chúc mừng bạn đã đăng kí thành công`, {
                    position: 'top-left',
                });
            } catch (error) {
                console.error('Error updating profile:', error);
                // Handle error as needed
            }
        })
        
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
        toast.success(`Đăng suất thành công.`, {
            position: 'top-left'
        })
        }).catch((error) => {
            // An error happened.
        });
    }

    //Add data to specific user (UID)
    const addDataUser = async (uid,field_name,field_data) => {
        const ref = doc(collection(db, 'user'), uid);
        try {
            const existenceData = (await getDoc(ref)).data();
            const userData = {
                ...existenceData,
                [field_name] : field_data
            }; 
            await setDoc(ref, userData, { merge: true });
            toast.success(`Cập nhật thông tin thành công.`, {
                position: 'top-left'
            });
        } catch (error) {
            const errorMessage = error?.message;
            toast.error(`${errorMessage}`, {
                position: 'top-left'
            });
        }
    };

    //Update user data
    const updateData = async (uid,data) => {
        const ref = doc(collection(db, 'user'),uid);
        try{
            await updateDoc(ref, data);
            toast.success(`Cập nhật thông tin thành công.`, {
                position: 'top-left'
            });

        } catch (error){
            const errorMessage = error?.message;
            toast.error(`${errorMessage}`, {
                position: 'top-left'
            });
        }
    }
    //Get User'Data
    const getDataUser = async (uid,dataget) =>{
        const userDocRef = doc(db, 'user', uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
            const userData = userDoc.data();
            if (userData && Object.prototype.hasOwnProperty.call(userData, dataget)) {
                return userData[dataget];
            } else {
                // Return an error or a default value when dataget doesn't exist
                console.log(`Property "${dataget}" not found in user data.`);
                // Alternatively, you can return a default value, e.g., return null;
            }
        } else {
            // Handle the case where the user document doesn't exist
            console.log(`User document with UID ${uid} does not exist.`);
            // Alternatively, you can return a default value or handle the case as needed
        }
    }

    //Login using Gmail
    const loginWithGmail = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }
    return {
        registerWithEmailPassword,
        loginWithEmailPassword,
        resetPassword,
        logout,
        addDataUser,
        getDataUser,
        updateData,
        loginWithGmail
    }
}

export default useFirebase;