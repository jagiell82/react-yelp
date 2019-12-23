import React from 'react';
import { TopNav } from '../TopNav/TopNav';
import logo from '../Assets/logo.png'
import styles from './LandingPage.module.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchSuggestions } from './SearchSuggestions/SearchSuggestions';

export function LandingPage() {
    return (
        <div className={styles.landing}>
            <div className={styles['search-area']}>
                <TopNav />
                <img src={logo} alt="belb logo" className={styles.logo}/>
                <SearchBar />
                <SearchSuggestions />
            </div>
        </div>
    );
}