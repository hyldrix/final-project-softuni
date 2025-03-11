
import styles from './Footer.module.css';
export default function Footer() {
    return (

        <footer className={`${styles.ccc} d-flex flex-wrap justify-content-center align-items-center  `}>
            <div className="col-md-4 d-flex justify-content-center align-items-center">
                <a href="/" className="mb-3 me-2 mb-md-0 text-decoration-none lh-1">
                    <img src="/YogaOm.png" width="130" height="50" />
                </a>
                <span className="mb-3 mb-md-0 justify-content-center">© SoftUni Exam 2025</span>
            </div>

            <div className="col-md-4 d-flex justify-content-center align-items-center">
                <span className="pb-3 mb-3 mb-md-0">128 Tsarigradsko Shose, 1220 Sofia </span>
            </div>

            <ul className="nav col-md-4 justify-content-center list-unstyled d-flex">
                <li className="p-2"><a className="" href="#"><i className="fa-brands fa-facebook"></i></a></li>
                <li className="p-2"><a className="" href="#"><i className="fa-brands fa-instagram"></i></a></li>
                <li className="p-2"><a className="" href="#"><i className="fa-brands fa-x"></i></a></li>
            </ul>
        </footer>

    );
}