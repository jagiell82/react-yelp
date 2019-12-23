import React from 'react';
import { TopNav } from '../TopNav/TopNav';
import logo from '../Assets/logo.png'
import styles from './LandingPage.module.css';
import { SearchBar } from '../SearchBar/SearchBar';

export function LandingPage() {
    return (
        <div>
            <TopNav />
            <img src={logo} alt="belb logo" className={styles.logo}/>
            <SearchBar />
        </div>
    );
}