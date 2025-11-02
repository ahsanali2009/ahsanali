export async function getBlogsApiFunc(){
    const response = await fetch('https://ahsanali-backend.onrender.com/api/get/blogs', {
        method : "GET",
    })
    
    return await response.json() ;
}