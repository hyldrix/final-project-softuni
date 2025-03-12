import styles from './CallToAction.module.css';
import { Link } from 'react-router-dom';
export default function CTA() {
    return (
        <div className={styles.container}>
            <div className="row">
                <div className="col-lg-12">
                    <div className={styles.cta}>
                        <h2>Join Our Community Today</h2>
                        <p>Discover the world of yoga with us. Experience the magic of connection and transformation.</p>
                        <Link to={'register'}>
                            <button className="button-styling">SIGN-UP NOW</button>
                        </Link>
                        <p>or call: +359 123-456-798</p>
                    </div>
                </div>
            </div>
        </div>
    );
}