const BASE_URL = `http://127.0.1:8000/`;
export async function getAllTours() {
  try {
    const res = await fetch(`${BASE_URL}api/tours`);
    const data = await res.json();
    return data.tours;
  } catch (err) {
    console.log(err);
  }
}
