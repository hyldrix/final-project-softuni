
import { Link } from 'react-router-dom';
import styles from './SingleClassCard.module.css'
export default function SingleClass() {
    return (
        <div className={styles["upcoming-card"]}>
            <img src="https://media.istockphoto.com/id/182149444/photo/body-mind-and-soul.jpg?s=612x612&w=0&k=20&c=b899tAY_IvxWRSczeJ4dAFipXgVzEBcr6b491HVWsrU=" alt="" />
            <div className={styles["upcoming-card-title"]}><span><i className="fa-solid fa-tag"></i> Flower Yoga</span></div>
            <div className={styles['upcoming-details']}>
                <div className={styles["upcoming-card-date"]}><i className="fa-solid fa-calendar-days"></i><span>August 15th, 2022</span></div>
                <div className={styles["upcoming-card-time"]}><i className="fa-solid fa-clock"></i><span>9:00 AM - 11:00 AM</span></div>
                <div className={styles["upcoming-card-location"]}><i className="fa-solid fa-map-pin"></i><span>128 Tsarigradsko Shose</span></div>
                <div className={styles["upcoming-card-price"]}><div className={styles['upcoming-cost']}>200 BGN</div></div>

            </div>
            <div className={styles["upcoming-card-register"]}><Link to={'/'}><button>Register Now</button></Link></div>
        </div>
    );
}