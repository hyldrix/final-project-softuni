

import styles from './OurClasses.module.css';
export default function Component() {
    return (
        <div className={styles.container}>
            <h1>Our Classes</h1>
            <div className={styles["adv-container"]}>

                <div className="col-md-4">
                    <img src="/img/flower.png" alt="" />
                    <h2>Flower Yoga</h2>
                    <p>Flower yoga is a form of yoga that emphasizes the connection between the body and the flowers, creating a sense of harmony and balance.</p>
                </div>
                <div className="col-md-4">
                    <img src="/img/flower.png" alt="" />
                    <h2>Water Yoga</h2>
                    <p>Water yoga is a form of yoga that focuses on the breath, using water as the primary form of energy. It is a high-intensity, focused practice that requires a lot of focus and concentration.</p>
                </div>
                <div className="col-md-4">
                    <img src="/img/flower.png" alt="" />
                    <h2>Sunrise Yoga</h2>
                    <p>Sunrise yoga is a form of yoga that focuses on the flow of light and energy from the sunrise through the body. It is a low-impact, relaxing practice that requires a lot of patience and flexibility.</p>
                </div>
                <div className="col-md-4">
                    <img src="/img/flower.png" alt="" />
                    <h2>Meditation</h2>
                    <p>Meditation is a practice that helps people to develop a sense of calm, relaxation, and inner peace. It involves focusing on the breath, mind, and body, and allowing the energy to flow freely.</p>
                </div>



            </div>
        </div>
    );
}