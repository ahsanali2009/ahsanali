import Header from '/src/components/Header/Header.jsx'
import styles from '/src/Pages/Home.module.css'
import BlogLayout from '../components/BlogLayout/BlogLayout'
import { getBlogsApiFunc } from '../api/getBlogs'
import { useState, useEffect } from 'react'
import LoadingComponent from '../components/mini-components/loadingComponent'

export default function Home(){

    let [blogData, blogDataState] = useState([])
    getBlogsApiFunc().then((res) => {blogDataState(res)})

        let tempBlogStore = []

        if(blogData.length !== 0){
            // console.log(blogData['fetchAllBlogs'])
            for(let i = 0 ; i < blogData['fetchAllBlogs'].length ; i++){
                // console.log(blogData['fetchAllBlogs'][i])
                tempBlogStore.push(<BlogLayout key={i} object= {blogData['fetchAllBlogs'][i]}/>)
            }
        }

        // console.log(tempBlogStore)


    return(
        <>
        
            <Header/>
            <br />

            <div className={styles.searchBlogDiv}>
                <input type="text" placeholder=' Search...'/>
            </div>

            <div className={styles.blogsContainer}>


         {blogData.length !== 0 ? tempBlogStore : <LoadingComponent/>}


            </div>


        </>
    )
}