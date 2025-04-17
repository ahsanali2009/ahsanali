import Header from '/src/components/Header/Header.jsx'
import styles from './About.module.css'

export default function About(){
    return(
        <>
        
        <Header/>
        
        <div className={styles.aboutPageContainer}>

        <div className={styles.aboutPageContainerContent}>
            <pre>
            I'm currently learning programming with a focus on <b>machine learning, artificial intelligence, computer science, and mathematics.</b><br />I'm working on a few personal projects while developing my skills in the MERN stack. 
            My primary languages are JavaScript and Python, and I'm continuously exploring <br />how to apply them to build thoughtful, well-structured solutions. <br />
            If you're interested in collaborating or hiring me for a project, feel free to reach out at <a href="mailto:ahsanali19112009@gmail.com"> ahsanali19112009@gmail.com</a>.
            </pre>
        </div>

        </div>

        </>
    )

}