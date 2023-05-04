
export async function request (url) {

    const response = await fetch(url);
    const responseJSON = await response.json();

    return responseJSON;
}
