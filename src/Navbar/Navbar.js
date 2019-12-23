import React from 'react';
import logo from '../Assets/logo.png';
import styles from './Navbar.module.css';
import { SearchBar } from '../SearchBar/SearchBar';

export function Navbar() {
    return (
        <div className={styles.navbar}>
            <img src={logo} alt="belb logo" className={styles.logo} />
            <SearchBar small/>
            <button className={`button ${styles['nav-button']}`}>Sign In</button>
            <button className={`button ${styles['nav-button']}`}>Register</button>
        </div>
    );
}
