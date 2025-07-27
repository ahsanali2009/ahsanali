import axios from 'axios'
import styles from './AdminPanel.module.css'
import { fetchGeneratePath } from '../AuthPage/fetchGeneratePath'

export default function AdminPanel(){


async function saveBlogDB(event){
    event.preventDefault()

    let blog_title = document.getElementById("form_blog_title").value
    let blog_content = document.getElementById("form_blog_content").value

    let form = document.getElementById('form')
    let payload = new FormData(form)

    let spreadPayload = [...payload]

    fetch('http://localhost:8000/api/admin/upload', {
        method : "POST",
        body : JSON.stringify(
            {
                title : payload.get('title'),
                blog_content : payload.get('blog_content')
            }
        ),
        
    })
    
    
}

    return(
        <>

        <div className={styles.createBlogContainer}>

            <form id='form' action='http://localhost:8000/api/admin/upload' method='post' encType='application/x-www-form-urlencoded'>

            <input id='form_blog_title' placeholder='Title' type="text" className={styles.createBlogContainerTitle} name='title' /><br /><br />
            <textarea id='form_blog_content' placeholder='Content' className={styles.createBlogContainerTextarea} name='blog_content'></textarea>
            <button onClick={saveBlogDB} className={styles.createBlogContainerButton}>POST</button>

            </form>

        </div>
        
        </>
    )
}