import React from "react";
import styles from './Header.module.css'

export default function Header(){
    return(
        <>
        
        <div className={styles.headerBox}>
            <div className={styles.navigationBox}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">@me</a></li>
                </ul>
            </div>
            <div className={styles.headerBoxDetails}>
                <div className={styles.headerBoxDetailsII}>
                    <h1>ahsan.</h1>
                    <h3>Figuring Things Out.</h3>
                </div>
            </div>
        </div>

        </>
    )
}