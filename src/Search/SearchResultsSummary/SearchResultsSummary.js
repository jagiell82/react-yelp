import React from 'react';
import styles from './SearchResultsSummary.module.css';

export function SearchResultsSummary() {
    return (
        <div className={styles.container}>
            <div className={styles['seach-summary']}>
                <h1 className="subtitle"><strong>Burgers</strong> Berlin</h1>
                <p>Showind 1-20 out of 543 results</p>
            </div>
        </div>
    )
}
