
export async function fetchGeneratePath(){
    let response  = await fetch('https://ahsanali-backend.onrender.com/api/admin/generate_path')
    let responseJSON = await response.json()
    return responseJSON.path;
}