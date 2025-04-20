import Header from '/src/components/Header/Header.jsx'
import { useEffect } from 'react'

export default function Home(){

    useEffect(() => {
        async function fetchBlogData(){
            console.log("Working api")
            let data = await fetch("http://localhost:8000/")
            console.log(data)
        }
        fetchBlogData()
    })


    return(
        <>
        
        <Header/>
        
        </>
    )
}