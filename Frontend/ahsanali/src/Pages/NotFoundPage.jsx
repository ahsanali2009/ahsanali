import styles from './NotFoundPage.module.css'

export default function NotFound(){
    return(

        <>
        <h2 className={styles.NotFoundPageh2}>(404) Something's Wrong Here!</h2>
        <p className={styles.NotFoundPageP}>We Can't Find The Page You Are Looking For.</p>
        <button className={styles.homeButton}><a href="/">Go Back To Home Page</a></button>

        </>

    )
}