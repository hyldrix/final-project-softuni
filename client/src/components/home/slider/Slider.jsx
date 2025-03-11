import Carousel from 'react-bootstrap/Carousel';
import styles from './slider.module.css';
export default function Slider() {
    return (
        <>
            <div className={styles.container}>
                <Carousel>
                    <Carousel.Item>
                        <img className={styles['slider-image']} src='https://www.goodfreephotos.com/albums/people/woman-doing-yoga-at-sunset.jpg' />
                        <Carousel.Caption className={styles['carousel-caption']}>
                            <h3 className={styles['slider-header']}>JOIN THE WORLD OF YOGA</h3>
                            <p>Unwind. Recharge. Transform.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className={styles['slider-image']} src='https://c.pxhere.com/photos/42/6d/active_aerobics_beautiful_beauty_beautyrobic_body_concentration_exercise-1556311.jpg!d' />
                        <Carousel.Caption className={styles['carousel-caption']}>
                            <h3 className={styles['slider-header']}>EXPERIENCE OUR UNIQUE CLASSES</h3>
                            <p>Embrace your wellness from within</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className={styles['slider-image']} src='https://images.pexels.com/photos/8436715/pexels-photo-8436715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' />
                        <Carousel.Caption className={styles['carousel-caption']}>
                            <h3 className={styles['slider-header']}>SIGN UP NOW TO GET 20% DISCOUNT</h3>
                            <p>
                                Discover Strength, Serenity, and Self-Love
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>

    );
}