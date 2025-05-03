import axios from "axios";
import { fetchGeneratePath } from "./fetchGeneratePath";
import { useParams } from "react-router-dom";

export default function AuthPage(){

        var password ;
            async function fetchAdminDataAndAuthenticate(event){
                event.preventDefault()
                let response = await fetch('http://localhost:8000/api/admin')
                let responseJSON = await response.json()
                var password = document.getElementById("login-form-password").value


                if(password == responseJSON['password']){

                    
                    window.location = `http://localhost:5173/admin/${await fetchGeneratePath()}`

                } else { null; }

            }


    return(

        <>
                <form action="/admin">
                    <input type='text' id="login-form-password" placeholder='Password'/>
                    <button onClick={fetchAdminDataAndAuthenticate}> Login </button>
                </form>

        </>

    )

}