const baseUrl = "https://jsonplaceholder.typicode.com"

export const HitApi = async (endpoint, method, data = null) => {
    console.log(endpoint, method, data, 'reveived')
    const headers = {
        "Content-Type": "application/json",

    };
    const options = {
        method: method,
        headers,
        body: data ? JSON.stringify(data) : null
    };
    const response = await fetch(`${baseUrl}/${endpoint}`, options);
    if (response.ok) {
        return response.json();
    } else {
        return { code: response.status, message: response.statusText };
    }
}