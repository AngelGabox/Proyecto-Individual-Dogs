import React from 'react'
import SearchBar from './SearchBar'
import styles from '../css/Nav.module.css'

const Nav = () => {
    return (
        <div className={styles.navContainer}>
            {/* <div>
            <h2>Order</h2>
            </div> */}
            <a className={styles.el} href={'/main?name=&from=0'} ><h2 className={styles.h2}>Home</h2> </a>
            <a className={styles.el} href='/main/create_race'> <h2 className={styles.h2}>CreateRace</h2> </a>
            <div>
                <SearchBar/>
            </div>
        </div>
    )
}

export default Nav
