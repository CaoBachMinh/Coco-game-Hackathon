import React from 'react';
import { useFormik, Formik } from 'formik';
import useFirebase from '../../hooks/use-firebase';
import { useState, useRef, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import { Divider, Button, Typography, Modal, Box, Container, createTheme, ThemeProvider, Grid, IconButton, Backdrop, Fade } from '@mui/material';
import { DeleteForeverRounded, CloseRounded, WarningAmberRounded } from '@mui/icons-material';

const auth = getAuth();


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: '#1c242f',
    border: '2px solid #e5e5e5',
    boxShadow: 24,
    p: 2.5,
    pt: 1.5,
    borderRadius: 3,
};



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

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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

            <Divider variant='middle' sx={{ mt: 2, bgcolor: '#e5e5e5', ml: 0 }} />
            <Button startIcon={<DeleteForeverRounded />} variant='outlined' color='error' size='large' sx={{ mt: 2, alignItems: 'center' }} onClick={handleOpen}>
                <Typography variant='h5' sx={{ fontWeight: 600 }} > Xóa tài khoản</Typography>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    }
                }
                }
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="stretch"
                        >
                            <Container disableGutters={true} sx={{ alignItems: 'center', mb: 1 }}>
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                >
                                    <Typography id="modal-modal-title" variant="h4" sx={{ fontWeight: 600 }} >
                                        Bạn có muốn xóa tài khoản?
                                    </Typography>
                                    <IconButton color='warning' onClick={handleClose}> <CloseRounded sx={{ fontSize: 25 }} />
                                    </IconButton>
                                </Grid>

                            </Container>
                            <Divider variant='middle' sx={{ bgcolor: '#e5e5e5', mt: 0.5, ml: 0 }} />
                            <Container disableGutters={true} sx={{ alignItems: 'center', mt: 2 }}>
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="center"
                                >
                                    <WarningAmberRounded color='warning' sx={{ fontSize: 25, mr: 2 }} />
                                    <Typography variant="h5">Hãy đọc thật kĩ</Typography>
                                </Grid>
                            </Container>
                        </Grid>


                    </Box>
                </Fade>
            </Modal>

        </div >

    );
}
export default ProfileForm;