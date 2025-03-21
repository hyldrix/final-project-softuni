
import { converttoHumanDate, minutesToTime } from '../../../utils/timeUtils.js';
import { Link } from 'react-router-dom';
import styles from './SingleClassPanel.module.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { cancelClass } from '../../../api/classes-api.js';

export default function SingleClassPanel({ classData, dispatch }) {


    const [showDeleteModal, setshowDeleteModal] = useState(false);
    const handleClose = () => setshowDeleteModal(false);
    const handleShow = () => setshowDeleteModal(true);

    const handleDelete = async () => {

        cancelClass(classData._id);

        dispatch({ type: 'DELETE_CLASS', payload: { id: classData.classId } });


    };

    return (
        <div className={styles["myclass-list-record"]}>
            <div className={styles["myclass-list-record-title"]}>{classData.classType}</div>
            <div className={styles["myclass-list-record-name"]}>{classData.name}</div>
            <div className={styles["myclass-list-record-email"]}>{classData.email}</div>
            <div className={styles["myclass-list-record-date"]}>{converttoHumanDate(classData.date)}</div>
            <div className={styles["myclass-list-record-time"]}>{minutesToTime(classData.timestart)} - {minutesToTime(classData.timeend)}</div>
            <div className={styles["myclass-list-record-price"]}>{classData.price} BGN</div>

            <div className={styles["myclass-list-record-actions"]}>
                <Link to={`/classes/${classData.classId}`} ><button className={styles["button-details"]}>
                    Details
                </button>
                </Link>
                <button onClick={handleShow} className={styles["button-delete"]}>
                    Cancel
                </button>

            </div>
            {showDeleteModal && <Modal
                show={handleShow}
                onHide={handleClose}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Confirm you want cancel this class</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    This operation is irreversible, please confirm that you want to cancel this class!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>Cancel this class</Button>
                </Modal.Footer>
            </Modal>}
        </div>
    );
}