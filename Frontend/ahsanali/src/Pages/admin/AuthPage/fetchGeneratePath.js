
export async function fetchGeneratePath(){
    let response  = await fetch('http://localhost:8000/api/admin/generate_path')
    let responseJSON = await response.json()
    return responseJSON.path;
}