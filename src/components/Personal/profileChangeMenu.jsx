import React from 'react';
import { useFormik, Formik } from 'formik';
import ErrorMsg from '../forms/error-msg';
import useFirebase from '../../hooks/use-firebase';
import { registerSchema } from '../../utils/validation-schema';
import { useState, useRef,useEffect } from 'react';
import { updateProfile, getAuth } from 'firebase/auth';
import { useRouter } from 'next/router';
const auth = getAuth();

const ProfileForm = ({ setUpdateProfile }) => {
    // register With Email Password
    const { addDataUser } = useFirebase();
    const user = auth.currentUser;
    const router = useRouter();
    const handleChangeUpdateProfile = () => {
        const timer = setTimeout(() => {
            router.reload();
        }, 1000);

        return () => clearTimeout(timer);
    };
    const cancleUpdate =() =>{
        setUpdateProfile(false);
    }
    // use formik
    const Data = [
        { field: 'name', placeholder: 'Tên của bạn', title: 'Tên của bạn' },
        { field: 'age', placeholder: 'Tuổi của bạn', title: 'Tuổi' },
    ]
    const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
        initialValues: {},
        onSubmit: (formValues, formikBag) => {
            const { resetForm } = formikBag;
            console.log(formValues);
            Object.keys(formValues).forEach((field) => {
                if (formValues[field] != null) {
                    const value = formValues[field];
                    addDataUser(user.uid, field, value);
                    console.log(value);
                    console.log(field);
                }
            });
            resetForm();
        }
    })
    return (
        <div className='login-form-box registration-form'>
            <form onSubmit={handleSubmit}>
                {Data.map((data, index) => (
                    <div className="form-group" key={index}>
                        <label htmlFor={`reg-${data.field}`}>{data.title}</label>
                        <input
                            value={values[data.field]}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text"
                            name={data.field}
                            id={`reg-${data.field}`}
                            placeholder={data.placeholder}
                        />
                    </div>
                ))}
                <div className="personal-btn" data-sal-delay="400" data-sal="slide-up" data-sal-duration="1000">
                    <button className="edu-btn btn-small btn-secondary1" style={{marginRight:'4px'}} onClick={() => handleChangeUpdateProfile()} type="submit">
                        Lưu
                    </button>
                    <button className="edu-btn btn-small btn-secondary1" style={{backgroundColor:'#2e2d2e'}} onClick={() => cancleUpdate()}>
                        Hủy
                    </button>
                </div>
            </form>
        </div>

    );
}
export default ProfileForm;