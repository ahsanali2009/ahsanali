import { useEffect } from 'react'
import styles from './BlogLayout.module.css'

export default function BlogLayout(props){

    // useEffect(() => {
    //     console.log(props)

    // }, [])


    // props['object']['title']

    return(
        <>
        <div className={styles.blogLayoutDiv}>
            <div className={styles.blogLayoutDivTitle}>
                <h3>{props['object']['title']}</h3>
            </div>
            <div className={styles.blogLayoutDivContent}>
                <p>{props['object']['blog_content']}</p>
            </div>
        </div>
        </>
    )
}