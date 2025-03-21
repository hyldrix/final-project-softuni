import styles from './MyClasses.module.css';
import SingleClassPanel from './single-class-panel/SingleClassPanel.jsx';
import usePersistedState from '../../hooks/usePersistedState.js';
import { useGetMyClasses } from '../../hooks/useMyClasses.js';
import Spinner from 'react-bootstrap/Spinner';

export default function MyClasses() {

    const [authData] = usePersistedState('');




    const [classes, dispatch, isLoading] = useGetMyClasses(authData._id);

    return (
        <>
            <div className={styles["myclass-wrapper"]}>
                <div className={styles["myclass-title"]}><h1>My upcoming classes</h1></div>
                <div className={`${styles["myclass-list-container"]} overflow-auto`}>

                    {
                        isLoading && (<><Spinner animation="grow" size="l" /><Spinner animation="grow" size="l" /><Spinner animation="grow" size="l" /></>)
    
                    }

                    {
                        !isLoading && classes.map(c => (<SingleClassPanel dispatch={dispatch} key={c._id} classData={c} />))
                    }

                    {
                        (!isLoading && classes.length <= 0) && (
                            <div className={styles["myclass-empty"]}>You don't have any upcoming classes</div>
                        )
                    }




                </div>
            </div>
        </>
    );
}