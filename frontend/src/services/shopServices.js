const BASE_URL = "http://127.0.0.1:8000/";

export async function getAllShops() {
    try {
        const res = await fetch(`${BASE_URL}api/shops`);
        const data = await res.json();
        console.log(data);
        return data.shops;
    } catch (error) {
        console.log(error)
    }
}