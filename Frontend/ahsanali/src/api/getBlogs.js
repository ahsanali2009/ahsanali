export async function getBlogsApiFunc(){
    const response = await fetch('http://localhost:8000/api/get/blogs', {
        method : "GET",
    })
    
    return await response.json() ;
}