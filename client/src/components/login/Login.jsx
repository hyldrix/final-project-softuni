import { Link } from 'react-router-dom';
import styles from './Login.module.css';
Link;

export default function Login() {
    return (
        <div className={styles.container}>
            <div className={styles['login-container']}>
                <h1 className={styles['title']}>LOGIN</h1>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
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