import React from 'react';
import { useFormik, Formik } from 'formik';
import useFirebase from '../../hooks/use-firebase';
import { useState, useRef, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
const auth = getAuth();

const ProfileForm = ({ setUpdateProfile }) => {
    // register With Email Password
    const { updateData, deleteProfile } = useFirebase();
    const [deleteProfileArea, setDeleteProfileArea] = useState(false);
    const user = auth.currentUser;
    const router = useRouter();
    const handleChangeUpdateProfile = () => {
        const timer = setTimeout(() => {
            router.reload();
        }, 1000);

        return () => clearTimeout(timer);
    };

    const handleDeleteUser = () => {
        deleteProfile();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                router.push('/');
            }
        })
    };

    const cancleUpdate = () => {
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
            updateData(user.uid, formValues);
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
                    <button className="edu-btn btn-small btn-secondary1" style={{ marginRight: '4px' }} onClick={() => handleChangeUpdateProfile()} type="submit">
                        Lưu
                    </button>
                    <button className="edu-btn btn-small btn-secondary1" style={{ backgroundColor: '#2e2d2e', justifyContent: 'right ' }} onClick={() => cancleUpdate()}>
                        Hủy
                    </button>
                </div>
            </form>

        </div>

    );
}
export default ProfileForm;