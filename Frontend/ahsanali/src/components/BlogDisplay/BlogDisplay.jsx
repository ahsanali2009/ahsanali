import styles from './BlogDisplay.module.css'
import { getBlogsApiFunc } from '../../api/getBlogs'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default  function BlogDisplay(){



    return(
        <>


        <div className={styles.BlogContainer}>
            <div className={styles.BlogContainerTitle}>
                <a href="/">&#x2190;</a>
                <p>hello</p>
            </div>
            <div className={styles.BlogContainerBlogContent}>
                <p>hello</p>
            </div>
        </div>


        </>
    )

    }