import React from 'react';
import { useFormik } from 'formik';
import useFirebase from '../../hooks/use-firebase';
import { registerSchema } from '../../utils/validation-schema';
import ErrorMsg from './error-msg';
import Link from 'next/link';
import { useState } from 'react';
import { getAuth,updateProfile } from 'firebase/auth';
import { useRouter } from 'next/router';
import {auth} from '../../firebase/firebase';


const RegisterForm = () => {
    const router = useRouter();
    
    const [showPass, setShowPass] = useState(false);
    // register With Email Password
    const { registerWithEmailPassword } = useFirebase();
    // use formik
    const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
        initialValues: { name: '', email: '', password: '',age:'',terms: true },
        validationSchema: registerSchema,
        onSubmit: (values, { resetForm }) => {
            registerWithEmailPassword(values.email, values.password,values.name,values.age)
            updateProfile(auth.currentUser, {
                displayName: values.name
              }).then(() => {
                // Profile updated!
                // ...
              })
              .catch((error) => {
                // An error occurred
                // ...
              });
            resetForm()
        }
    })

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="reg-name">Tên của bạn*</label>
                <input value={values.name} onChange={handleChange} onBlur={handleBlur} type="text" name="name" id="reg-name" placeholder="Full name" />
                {touched.name && <ErrorMsg error={errors.name} />}
            </div>

            <div className="form-group">
                <label htmlFor="log-age">Độ tuổi của bạn*</label>
                <input value={values.age} onChange={handleChange} onBlur={handleBlur} type="text" name="age" id="log-age" placeholder="Tuổi của bạn" />
                {touched.age && <ErrorMsg error={errors.age} />}
            </div>

            <div className="form-group">
                <label htmlFor="log-email">Email*</label>
                <input value={values.email} onChange={handleChange} onBlur={handleBlur} type="email" name="email" id="log-email" placeholder="Email" />
                {touched.email && <ErrorMsg error={errors.email} />}
            </div>

            <div className="form-group">
                <label htmlFor="log-password">Mật khẩu*</label>
                <input value={values.password} onChange={handleChange} onBlur={handleBlur} type={showPass ? "text" : "password"} name="password" id="log-password" placeholder="Password" />
                <span onClick={() => setShowPass(!showPass)} className="password-show"><i className="icon-76"></i></span>
            </div>
            {touched.password && <ErrorMsg error={errors.password} />}

            
            
            <div className="form-group">
                
                    <button onClick={() => router.push('/')} type="submit" className="edu-btn btn-medium">Tạo Tài Khoản<i className="icon-4"></i></button>
                
            </div>
        </form>
    );
}

export default RegisterForm;