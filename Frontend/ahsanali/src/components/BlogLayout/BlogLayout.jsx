import styles from './BlogLayout.module.css'

export default function BlogLayout(props){

        let blogData = props['object']
        console.log(blogData)

    return(
        <>
        <div className={styles.blogLayoutDiv}>
            <div className={styles.blogLayoutDivTitle}>
                <h3>{}</h3>
            </div>
            <div className={styles.blogLayoutDivContent}>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aut repudiandae nesciunt fugit quam magni, qui unde et, iusto, facere ab commodi? Tempore, beatae sunt sint eum quibusdam sequi culpa? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, illo! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt similique, unde, ea sequi est commodi mollitia.</p>
            </div>
        </div>
        </>
    )
}