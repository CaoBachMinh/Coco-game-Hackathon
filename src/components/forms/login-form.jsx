import React from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import useFirebase from '../../hooks/use-firebase';
import { loginSchema } from '../../utils/validation-schema';
import ErrorMsg from './error-msg';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword,onAuthStateChanged  } from 'firebase/auth';
import { useRouter } from 'next/router';


const LoginForm = () => {
    const router = useRouter();
    const auth = getAuth(); 
    const [showPass,setShowPass] = useState(false);
    // use firebase 
    const { loginWithEmailPassword, resetPassword, loginWithGmail } = useFirebase();
    // use formik
    const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
        initialValues: { email: '', password: '' },
        validationSchema: loginSchema,
        onSubmit: (values, { resetForm }) => {
            /*loginWithEmailPassword(values.email, values.password)*/
            signInWithEmailAndPassword(auth,values.email,values.password)
            .then((userCredential) => {
                user(userCredential.user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })

            resetForm()
        }
    })


    // handleResetPass
    const handleResetPass = (email) => {
        resetPassword(email);
    }

    const reset_website = () => {
        router.push('/');
    }

    //hadbleLoginWithGmail
    const handleLoginEmail = async () => {
        loginWithGmail();
        onAuthStateChanged(auth, (user) => {
            if (user){
                reset_website();
            }
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="current-log-email">Email*</label>
                <input 
                    value={values.email} 
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    type="email" 
                    name="email"
                    placeholder="Email" 
                />
                {touched.email && <ErrorMsg error={errors.email} />}
            </div>
            
            <div className="form-group">
                <label htmlFor="current-log-password">Mật khẩu*</label>
                <input 
                    value={values.password} 
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    type={showPass?"text":"password"} 
                    name="password"
                    placeholder="Password" 
                />
                <span onClick={()=> setShowPass(!showPass)} className="password-show">
                    <i className="icon-76"></i>
                </span>
            </div>
            {touched.password && <ErrorMsg error={errors.password} />}

            <div className="form-group chekbox-area" style={{marginBottom: '15px'}} >
                
                <a href="#" onClick={()=> handleResetPass(values.email)} 
                className="password-reset">Quên mật khẩu?</a>
            </div>

            <div className='form-group'>
                <img className='logo-dark' style={{cursor : 'pointer'}} onClick={() => handleLoginEmail()} src="/assets/images/login_logo/web_light_rd_na@1x.png">
                </img>
            </div>

            <div className="form-group">
                
                    <button onClick={() => reset_website()} type="submit" className="edu-btn btn-medium">Đăng nhập<i className="icon-4"></i></button>
                
            </div>
        </form>
    )
}

export default LoginForm;