import React from 'react';
import styles from './SearchResultsSummary.module.css';

export function SearchResultsSummary() {
    return (
        <div className={styles.container}>
            <div className={styles['seach-summary']}>
                <h1 className="subtitle"><strong>Burgers</strong> Berlin</h1>
                <p>Showind 1-20 out of 543 results</p>
            </div>
            <div className={styles.filters}>
                <button className="button">
                    <span className="icon">
                        <i className="fas fa-sliders-h"></i>
                    </span>
                    <span>All Fillters</span>
                </button>
                <div className="buttons has-addons">
                    <button className="button">$</button>
                    <button className="button">$$</button>
                    <button className="button">$$$</button>
                    <button className="button">$$$$</button>
                </div>
                <button className="button">
                    <span className="icon">
                        <i className="fas fa-clock"></i>
                    </span>
                    <span>Open Now</span>
                </button>
                <button className="button">
                    <span className="icon">
                        <i className="fas fa-dollar-sign"></i>
                    </span>
                    <span>Cashback</span>
                </button>
            </div>
        </div>
    )
}
