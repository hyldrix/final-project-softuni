import styles from './404.module.css';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className={styles.container}>
           <div className={styles['error-container']}>
            <img className={styles['image']} src='/zen-brush-symbol.svg'/>
            <div className={styles["error-title"]}>404</div>
            <div className={styles["error-message"]}>Oops! The page you're looking for doesn't exist.</div>
            <Link to={"/"}>
                <a href="/" className={styles['btn-primary']}>Go Back to Home</a>
            </Link>
        </div>

        </div>
       
    );
}