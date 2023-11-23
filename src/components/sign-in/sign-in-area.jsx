import React from 'react';
import LoginForm from '../forms/login-form';
import RegisterForm from '../forms/register-form';
import { useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth();

const SignInArea = () => {
    const [user,setUser] = useState(null);
    const [isSignIn,setIsSignIn] = useState(false);
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          // ...
          console.log('da dang nhap');
        } else {
          // User is signed out
          // ...
        }
      });

  return (
        <section className="account-page-area section-gap-equal">
            <div className="container position-relative">
                <div className="row g-5 justify-content-center">
                    <div className="col-lg-5">
                        <div className="login-form-box">
                            <h3 className="title">Đăng nhập</h3>
                            <p>Chưa có tài khoản? <a href="#">Đăng kí</a></p>
                            <LoginForm user={setUser}/>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="login-form-box registration-form">
                            <h3 className="title">Đăng ký</h3>
                            <p>Đã có tài khoản? <a href="#">Đăng nhập</a></p>
                            <RegisterForm user={setUser}/>
                        </div>
                    </div>
                </div>

                <ul className="shape-group">
                    <li className="shape-1 scene">
                        <img src="/assets/images/about/shape-07.png" alt="Shape" />
                    </li>
                    <li className="shape-2 scene">
                        <img src="/assets/images/about/shape-13.png" alt="Shape" />
                    </li>
                    <li className="shape-3 scene">
                        <img src="/assets/images/counterup/shape-02.png" alt="Shape" />
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default SignInArea;