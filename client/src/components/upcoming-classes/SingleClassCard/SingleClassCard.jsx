
import { Link } from 'react-router-dom';
import styles from './SingleClassCard.module.css';
import { converttoHumanDate, minutesToTime } from '../../../utils/timeUtils.js';
export default function SingleClassCard({ classData }) {
    return (
        <div className={styles["upcoming-card"]}>
            <img src={classData.imageUrl} alt="" />
            <div className={styles["upcoming-card-title"]}><span><i className="fa-solid fa-tag"></i> {classData.classType}</span></div>
            <div className={styles['upcoming-details']}>
                <div className={styles["upcoming-card-date"]}><i className="fa-solid fa-calendar-days"></i><span>{converttoHumanDate(classData.date)}</span></div>
                <div className={styles["upcoming-card-time"]}><i className="fa-solid fa-clock"></i><span>{minutesToTime(classData.timestart)} - {minutesToTime(classData.timeend)}</span></div>
                <div className={styles["upcoming-card-location"]}><i className="fa-solid fa-map-pin"></i><span>{classData.address}</span></div>
                <div className={styles["upcoming-card-instructor"]}><i className="fa-solid fa-person-walking-dashed-line-arrow-right"></i><span>Instructor - {classData.instructor}</span></div>
                <div className={styles["upcoming-card-price"]}><div className={styles['upcoming-cost']}>{classData.price} BGN</div></div>

            </div>
            <div className={styles["upcoming-card-register"]}><Link to={`/classes/${classData._id}`}><button>Details</button></Link></div>
        </div>
    );
}