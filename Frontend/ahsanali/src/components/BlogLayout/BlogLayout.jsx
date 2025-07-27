import { useEffect } from 'react'
import styles from './BlogLayout.module.css'
import { getPathOfBlogClicked } from '../../utils/getPath_BlogClicked'

export default function BlogLayout(props){


    return(
        <>

        <div className={styles.blogLayoutDiv}>
        <a href={`/blog/${getPathOfBlogClicked(props['object']['path'])}`} className={styles.blogLayoutDivTitleahref}>
            <div className={styles.blogLayoutDivTitle}>
                <h3>{props['object']['title']}</h3>
            </div>
        </a>
            <div className={styles.blogLayoutDivContent}>
                <p>{props['object']['blog_content']}</p>
            </div>
        </div>
        </>
    )
}