import Header from '/src/components/Header/Header.jsx'
import styles from './About.module.css'

export default function About(){
    return(
        <>
        <Header/>
        
    <div className={styles.aboutPageContainer}>
        <div className={styles.aboutPageContainerContent}>
            <p>

            </p>
            <a href="https://github.com/ahsanali2009" target='_blank'>Github</a>
        </div>
    </div>

        </>
    )

}
