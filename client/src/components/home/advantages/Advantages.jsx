
import styles from './Advantages.module.css';
export default function Advantages() {

    return (
        <div className={styles.container}>
            <h1>Reasons to choose us</h1>
            <div className="best-class-club">
                <div className="row best-class-sections-detail">
                    <div className="col-lg-12 best-class-club-desc">
                        <div className="row">
                            <div className="col-lg-6">
                                <img src="/img/the-best-class-yoga.jpg" alt="" />
                            </div>
                            <div className={`${styles.explain} col-lg-6 detail-col-club`}>
                                <h2 className="club-section-title">
                                    Embark on your wellness journey!
                                </h2>
                                <p>
                                Join our rejuvenating yoga classes and embark on a journey to better health, relaxation, and inner peace! Whether you're a beginner or an experienced yogi, our sessions are designed to improve flexibility, strength, and mindfulness in a welcoming and supportive environment.
                                </p>
                                <ul>
                                    <li><span>Expert Instructors</span> – Our highly trained and certified instructors provide personalized guidance to ensure safe and effective practice for all levels.</li>
                                    <li><span>Variety of Classes</span> – We offer diverse styles, including Hatha, Vinyasa, Ashtanga, Yin, and even specialized classes like prenatal and therapeutic yoga</li>
                                    <li><span>We provide affordable pricing plans</span>, drop-in classes, and flexible memberships to fit every schedule and budget</li>
                                </ul>
                                <p>
                               Whether you're looking to deepen your practice, learn new techniques, or simply unwind, our expert instructors are here to guide you in a welcoming and supportive space. Join us and explore the perfect yoga experience tailored just for you!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 best-class-club-img"></div>
                </div>
            </div>
        </div>
    );
}