import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './ClassDetailsCard.module.css';
import { Link } from 'react-router-dom';
import { converttoHumanDate, minutesToTime } from '../../../utils/timeUtils.js';
import { useAuthContext } from '../../../contexts/AuthContext.jsx';
import { useGetClasssById } from '../../../hooks/useGetClass.js';
import usePersistedState from './../../../hooks/usePersistedState.js';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { del, isSignedForClass, registerToClass } from '../../../api/classes-api.js';
export default function ClassDetailsCard() {


    const { classId } = useParams();
    const { isAuthenticated } = useAuthContext();
    const [isRegisteredForClass, setIsRegisteredForClass] = useState(false);

    const [showDeleteModal, setshowDeleteModal] = useState(false);
    const navigate = useNavigate();

    const handleClose = () => setshowDeleteModal(false);
    const handleShow = () => setshowDeleteModal(true);

    const handleDelete = async () => {
        try {
            del(classId);
            navigate('/classes');
        } catch (err) {
            console.error(err);
        }
    };


    const [authData] = usePersistedState();


    const [classData] = useGetClasssById(classId);

    let isOwner = false;
    if (isAuthenticated) {
        isOwner = classData._ownerId === authData._id;
    }


    useEffect(() => {
        if (isAuthenticated) {
            isSignedForClass(authData._id, classId).then((res) => {
                setIsRegisteredForClass(res);
            });
        }
    }
        , []);


    const handleJoinClass = async () => {

        const data = {
            classId: classId,
            classType: classData.classType,
            name: authData.username,
            email: authData.email,
            location: classData.location,
            date: classData.date,
            timestart: classData.timestart,
            timeend: classData.timeend,
            price: classData.price,
        };

        await registerToClass(authData._id, data);
        navigate('/myclasses');



    };
    return (

        <>
            {!showDeleteModal ? (<div className={styles["detail-container"]}>
                {isOwner && <div className={styles["admin-bar"]}>
                    <div className={styles["admin-bar-title"]}>
                        <Link to={'/classes'}>Owner Panel &#8594; {classId}</Link>
                    </div>
                    <div className={styles["admin-bar-buttons"]}>
                        <Link className={styles['edit-button']} to={`/classes/edit/${classId}`}>Edit Class</Link>
                        <Link className={styles['delete-button']} onClick={handleShow}>Delete Class</Link>
                    </div>
                </div>}


                <div className={styles["page-header-container"]}>
                    <h1>Class Details</h1>
                </div>

                <div className={styles["class-details-container"]}>
                    <div className={styles["event-card"]}>
                        <div className={styles["img-container"]}>
                            <img src={classData.imageUrl} alt="" />
                            <div className={styles["event-card-title"]}>
                                <span className={styles["added-padding"]}><i className="fa-solid fa-tag"></i>{classData.classType}</span>

                            </div>
                            <div className={styles["event-card-date"]}>
                                <i className="fa-solid fa-calendar-days"></i>
                                <span className={styles["added-padding"]}>{converttoHumanDate(classData.date)}
                                </span>
                            </div>
                            <div className={styles["event-card-time"]}>
                                <i className="fa-solid fa-clock"></i>
                                <span className={styles["added-padding"]}>{minutesToTime(classData.timestart)} - {minutesToTime(classData.timeend)}</span>
                            </div>
                            <div className={styles["event-card-location"]}>
                                <i className="fa-solid fa-map-pin"></i>
                                <span className={styles["added-padding"]}>{classData.address}</span>
                            </div>
                            <div className={styles["event-card-instructor"]}>
                                <i className="fa-solid fa-person-walking-dashed-line-arrow-right">
                                </i>
                                <span className={styles["added-padding"]}>Instructor - {classData.instructor}</span></div></div>
                        <div className="rest-container">

                            <div className={styles['event-details']}>
                                <div className={styles["event-card-description"]}>{classData.description}</div>

                                <div className={styles["event-card-price"]}><div className={styles['event-cost']}>Cost of class: {classData.price} BGN</div></div>

                            </div>
                            <div className={styles["event-card-register"]}>
                                {(isAuthenticated && !isRegisteredForClass) ? (<><Link onClick={handleJoinClass}><button className={styles['button-decorated']}>Join the class</button>
                                </Link>
                                </>
                                ) : (<></>)}

                                {(isAuthenticated && isRegisteredForClass) ? (<Link to={`/myclasses`}><button className={styles["button-alreadyregistered"]}>Already registered - Go To My Classes</button>
                                </Link>) : (<></>)}

                                {!isAuthenticated && (<Link to={`/login`}><button className={styles["button-alreadyregistered"]} >Login first to join the class</button>
                                </Link>)}

                            </div>
                        </div>
                    </div>
                </div>


            </div>) : (<Modal
                show={handleShow}
                onHide={handleClose}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Do you really want to delete it?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    This operation is irreversible, please confirm that you want to delete this record!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>Delete</Button>
                </Modal.Footer>
            </Modal>)}
        </>
    );
};