import styles from './auth.module.css'

export default function AuthPage(){
    
    return(

        <>
        
        <div className={styles.authContainer}>

            <div className={styles.authcontainerLogin}>
                <h1>Login</h1>
                <form action="">
                    <input type='text' placeholder='Username'/>
                    <input type='password' placeholder='Password'/>
                    <button>Login</button>
                </form>
            </div>

        </div>
        
        </>

    )

}