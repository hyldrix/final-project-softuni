
import styles from './EditClasses.module.css';
import { Link, useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

import { useForm } from 'react-hook-form';
import { convertDatetoUnix, convertUnixToDate, minutesToTime, timeToMinutes } from '../../utils/timeUtils.js';
import { useEditClass } from '../../hooks/useCreateClass.js';
import { useNavigate } from 'react-router-dom';
import { useGetClasssById } from '../../hooks/useGetClass.js';


export default function EditClasses() {
    const { classId } = useParams();
    const [classData, isLoading] = useGetClasssById(classId);

    const editClass = useEditClass();;
    const navigate = useNavigate();


    const { register, handleSubmit } = useForm(

        {
            values: {
                ...classData,
                date: convertUnixToDate(classData.date),
                timestart: minutesToTime(classData.timestart),
                timeend: minutesToTime(classData.timeend),

            }
        }, classData
    );

    const onSubmit = (data) => {
        const data2 = { ...data };
        console.log(data);
        data2.date = convertDatetoUnix(data.date);
        data2.timestart = timeToMinutes(data.timestart);
        data2.timeend = timeToMinutes(data.timeend);
        editClass(classId, data2);
        navigate('/classes');
    };


    return (
        <>
            (<div className={styles["create-container"]}>
                <div className={styles["create-wrapper"]}>
                    <h1 className={styles["create-title"]} >Edit Class</h1>
                    <div className="create-form-container">
                        {isLoading ? (
                            <><Spinner animation="grow" size="l" /><Spinner animation="grow" size="l" /><Spinner animation="grow" size="l" /></>
                        ) : (<form onSubmit={handleSubmit(onSubmit)}>

                            <div className="input-group mb-3">
                                <span className="input-group-text mb-3">Class Type</span>
                                <select {...register("classType", { required: true })} className="form-select mb-3">

                                    <option value="Flower Yoga">Flower Yoga</option>
                                    <option value="Water Yoga">Water Yoga</option>
                                    <option value="Sunrise Yoga">Sunrise Yoga</option>
                                    <option value="Meditation">Meditation</option>
                                </select>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Instructor&apos;s name</span>
                                    <input {...register("instructor", { required: true })} type="text" className="form-control" placeholder=" " />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">BGN</span>
                                    <input {...register("price", { required: true })} type="number" className="form-control" placeholder={'Price in lev'} />
                                    <span className="input-group-text">.00</span>
                                </div>

                                <div className="input-group mb-3">
                                    <div className="input-group">
                                        <span className="input-group-text">Image URL</span>
                                        <input {...register("imageUrl", { required: true })} type="text" className="form-control" />
                                    </div>
                                </div>

                                <div className="input-group mb-3">
                                    <span className="input-group-text" ><i className="fa-solid fa-calendar-days"></i></span>
                                    <input {...register("date", { required: true })} type="date" className="form-control" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text" >Time Start</span>
                                    <input {...register("timestart", { required: true })} type="time" className="form-control" />
                                    <span className="input-group-text" >Time Finish</span>
                                    <input {...register("timeend", { required: true })} type="time" className="form-control" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Address</span>
                                    <input {...register("address", { required: true })} type="text" className="form-control" placeholder=" " aria-label="address" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Class description</span>
                                    <div className="form-floating">
                                        <textarea {...register("description", { required: true })} className="form-control"></textarea>
                                        <label htmlFor="floatingTextarea">Add class descriptiopn</label>
                                    </div>
                                </div>
                                <div className={styles["button-container"]}>
                                    <button type="submit" className={styles["btn-create"]}>Submit</button>
                                    <Link to={'/classes'}><button className={styles["btn-cancel"]}>Cancel</button></Link>
                                </div>
                            </div>
                        </form >)}

                    </div>

                </div>

            </div >)
           
        </>
    );
}