import styles from './ManageClasses.module.css';
import SingleClassPanel from './single-class-panel/SingleClassPanel.jsx';
import usePersistedState from '../../hooks/usePersistedState.js';
import { useGetAllClasses } from '../../hooks/useMyClasses.js';
import Spinner from 'react-bootstrap/Spinner';
import { useState } from 'react';


export default function ManageClasses() {

    const [authData] = usePersistedState('');

    const [searchInput, setSearchInput] = useState('');

    const searchInputHandler = () => {
        let lowercaseinput = document.getElementById('search-field').value.toLowerCase();
        setSearchInput(lowercaseinput);
    };


    const [classes, dispatch, isLoading] = useGetAllClasses(authData._id);

    return (
        <>
            <div className={styles["myclass-wrapper"]}>
                <div className={styles["myclass-title"]}><h1>ADMIN PANEL</h1></div>
                <div className={styles['searchBar']}>
                    <label htmlFor="searchInput">Search:</label>

                    <input type="text" id="search-field" placeholder="Search by name, email or class type..." />
                    <button onClick={searchInputHandler} className={styles['search-button']}>Search</button>

                </div>

                <div className={`${styles["myclass-list-container"]} overflow-auto`}>

                    {
                        isLoading && (<><Spinner animation="grow" size="l" /><Spinner animation="grow" size="l" /><Spinner animation="grow" size="l" /></>)

                    }

                    {
                        !isLoading && classes
                            .filter(c => {
                                if (searchInput === '') {
                                    return true;  // Return true to include all items in the filtered array.
                                }


                                return c.classType.toLowerCase().includes(searchInput) || c.name.toLowerCase().includes(searchInput) || c.email.toLowerCase().includes(searchInput);
                            })
                            .map(c => (<SingleClassPanel dispatch={dispatch} key={c._id} classData={c} />))
                    }

                    {
                        (!isLoading && classes.length <= 0) && (
                            <div className={styles["myclass-empty"]}>No classes to manage here :)</div>
                        )
                    }




                </div>
            </div>
        </>
    );
}