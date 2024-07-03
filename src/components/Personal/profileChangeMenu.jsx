import React from 'react';
import { useFormik, Formik } from 'formik';
import useFirebase from '../../hooks/use-firebase';
import { useState, useRef, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import {Modal, Button, Typography } from "antd";
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

    //Model
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const { Title, Text } = Typography;
    const modalStyles = {
        header: {
            borderLeft: `0px solid #FF003`,
            borderRadius: 0,
            paddingInlineStart: 5,
        },
        body: {
            borderRadius: 5,
        },
        mask: {
            backdropFilter: 'blur(3px)',
        },
        footer: {
            marginTop: '10px',
        },
        content: {
            // boxShadow: '0 0 30px #999',
            outline : '1px solid red',
        },
    };
    const showLoading = () => {
        setOpen(true);
        setLoading(true);
        // Simple loading mock. You should add cleanup logic in real world.
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    };

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
            <div className='personal-btn' style={{ marginTop: '20px' }}>
                <Button type="primary" danger onClick={showLoading} >
                    Xóa tài khoản
                </Button>
                <Modal
                    title={<Title type='danger'>Xóa tài khoản</Title>}
                    footer={(_, { CancelBtn }) => (
                        <>
                            <CancelBtn />
                            <Button type="primary" danger onClick={handleDeleteUser}>
                                Xóa
                            </Button>
                        </>
                    )}
                    centered
                    loading={loading}
                    open={open}
                    onCancel={() => setOpen(false)}
                    styles={modalStyles}
                >
                    <Text strong>Tài khoản của bạn sẽ bị xóa ngay lập tức, toàn bộ dữ liệu không thể khôi phục, vui lòng kiểm tra kĩ trước khi thực hiện</Text>
                </Modal>
            </div>

        </div>

    );
}
export default ProfileForm;