import styles from './UpcomingClasses.module.css';
import SingleClassCard from './SingleClassCard/SingleClassCard.jsx';
import { Link } from 'react-router-dom';
export default function UpcomingClasses() {
    return (
        <div className={styles["upcoming-container"]}>
            <div className={styles["upcoming-wrapper"]}>
                <div className={styles["upcoming-title"]}><h1>Upcoming classes</h1></div>
                <div className={styles["upcoming-classcontainer"]}>
                    <SingleClassCard />
                    <SingleClassCard />
                    <SingleClassCard />
                    <SingleClassCard />
                    <SingleClassCard />
                    <SingleClassCard />
                    <SingleClassCard />
                </div>
                <div className={styles["upcoming-subdescription"]}><h5>
                    We believe in the power of yoga to not only strengthen your body but also calm your mind and uplift your spirit. Whether you're a beginner or a seasoned yogi, our classes cater to all levels and provide a nurturing environment for growth, mindfulness, and healing.</h5>
                    Ready to begin your journey? Sign up today and start your practice with us. Embrace the positive changes that come with a regular yoga routine – better posture, improved flexibility, and a calmer mind. We can’t wait to welcome you to our yoga community!</div>
            </div>
        </div>


    );
}