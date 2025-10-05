import styles from './BlogDisplay.module.css'
import { getBlogsApiFunc } from '../../api/getBlogs'
import { data, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import parse from "html-react-parser"

export default  function BlogDisplay(){

     let [blogData, blogDataState] = useState([])
    useEffect(() => {
        getBlogsApiFunc().then((res) => {blogDataState(res)})

    }, [])

    let blogTitle ;
    let blogContent ; 


    if(blogData.length !== 0){
        blogData['fetchAllBlogs'].forEach(data => {
            if(useParams().path == data['path']){
                blogTitle = data.title;
                blogContent = data.blog_content
            }
        });
    }

    return(
        <>

        <div className={styles.BlogContainer}>
            <div className={styles.BlogContainerTitle}>
                <a href="/">&#x2190;</a>
                <p>{blogTitle}</p>
            </div>
            <div className={styles.BlogContainerBlogContent}>
                <p>{parse(`${blogContent}`)}</p>
            </div>
        </div>


        </>
    )

    }