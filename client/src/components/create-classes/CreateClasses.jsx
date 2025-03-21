
import styles from './CreateClasses.module.css';
import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { convertDatetoUnix, timeToMinutes } from '../../utils/timeUtils.js';
import { useCreateClass } from '../../hooks/useCreateClass.js';
import { useNavigate } from 'react-router-dom';


export default function CreateClasses() {

    const createClass = useCreateClass();
    const navigate = useNavigate();

    const formFields = {
        classType: '',
        instructor: '',
        price: '',
        imageUrl: '',
        date: '',
        timestart: '',
        timeend: '',
        address: '',
        description: '',
    };


    const { register, handleSubmit } = useForm(
        {
            defaultValues: {
                ...formFields
            }
        });

    const onSubmit = (data) => {
        const data2 = { ...data };
        data2.date = convertDatetoUnix(data.date);
        data2.starttime = timeToMinutes(data.time)
        data2.endtime = timeToMinutes(data.timeend)
        createClass(data2);
        navigate('/classes');
    };


    return (
        <>
            <div className={styles["create-container"]}>
                <div className={styles["create-wrapper"]}>
                    <h1 className={styles["create-title"]} >Create a new class</h1>
                    <div className="create-form-container">
                        <form onSubmit={handleSubmit(onSubmit)}>

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
                        </form >
                    </div>

                </div>

            </div >
        </>
    );
}