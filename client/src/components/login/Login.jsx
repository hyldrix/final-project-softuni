import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useLogin } from '../../hooks/useAuth.js';


import styles from './Login.module.css';
import { useState } from 'react';
import { useAuthContext } from '../../contexts/AuthContext.jsx';
import usePersistedState from '../../hooks/usePersistedState.js';
Link;

const formFields = {
    email: '',
    password: '',
};


export default function Login() {

    let [errorMsg, setError] = useState('');

    const login = useLogin();
    const navigate = useNavigate();
    const { changeAuthState } = useAuthContext();

    const { register, handleSubmit } = useForm(
        {
            defaultValues: {
                ...formFields
            }
        });

    const onSubmit = async (data) => {

        try {

            const result = await login(data.email, data.password);
            let data2 = { ...result, isAuthenticated: true };
            changeAuthState(data2);
            navigate('/');
        }
        catch (error) {
            setError(error.message);

        }


    };


    return (
        <div className={styles.container}>
            <div className={styles['login-container']}>
                <h1 className={styles['title']}>LOGIN</h1>
                {errorMsg &&
                    <div className={styles.error}>
                        <span >{errorMsg}</span>
                    </div>}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input {...register("email")} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input {...register("password")} name="password" type="password" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <button type="submit" className={styles["btn-primary"]}>Submit</button>
                    <div className='no-account'>
                        <Link to={'/register'}>Don't have an account? Sign up here!
                        </Link>
                    </div>
                </form>
            </div>

        </div>
    );
}