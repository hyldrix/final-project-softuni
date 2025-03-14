import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useRegister } from '../../hooks/useAuth.js';


import styles from './Register.module.css';
import { useState } from 'react';
import { useAuthContext } from '../../contexts/AuthContext.jsx';
Link;

const formFields = {
    username: '',
    email: '',
    password: '',
    repass: '',
};

export default function Login() {

    let [errorMsg, setError] = useState('');

    const registerUser = useRegister();
    const navigate = useNavigate();
    const { changeAuthState } = useAuthContext();

    const { register, handleSubmit } = useForm(
        {
            defaultValues: {
                ...formFields
            }
        });

    const onSubmit = async (data) => {

        if (data.password !== data.repass) {
            setError('Passwords do not match');
            return;
        }


        if (data.password === '' || data.repass === '') {
            setError("Don't leave password blank");
            return;
        }

        try {
            let result = await registerUser(data.email, data.password, data.username);
            let data2 = {...result, isAuthenticated: true, password: null}
            changeAuthState(data2);
            navigate('/');
        }
        catch (error) {
            setError(error.message);

        }


    };


    return (
        <div className={styles.container}>
            <div className={styles['register-container']}>
                <h1 className={styles['title']}>REGISTER</h1>
                {errorMsg &&
                    <div className={styles.error}>
                        <span >{errorMsg}</span>
                    </div>}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Your name</label>
                        <input {...register("username")} name="username" type="text" className="form-control" id="username" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input {...register("email")} name="email" type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input {...register("password")} name="password" type="password" className="form-control" id="password" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="repass" className="form-label">Retype your password</label>
                        <input {...register("repass")} name="repass" type="password" className="form-control" id="repass" />
                    </div>

                    <button type="submit" className={styles["btn-primary"]}>Submit</button>
                    <div className='no-account'>
                        <Link to={'/login'}>Already have an account? Login here!
                        </Link>
                    </div>
                </form>
            </div>

        </div>
    );
}