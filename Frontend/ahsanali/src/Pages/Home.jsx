import Header from '/src/components/Header/Header.jsx'
import styles from '/src/Pages/Home.module.css'
import BlogLayout from '../components/BlogLayout/BlogLayout'

export default function Home(){


    return(
        <>
        
            <Header/>
        <br />
            <div className={styles.searchBlogDiv}>
                <input type="text" placeholder=' Search...'/>
            </div>

            <div className={styles.blogsContainer}>

            <BlogLayout/>

            </div>

        </>
    )
}