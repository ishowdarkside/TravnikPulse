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

export async function getSingleTour(tourId) {
  console.log(tourId);
  try {
    const res = await fetch(`${BASE_URL}api/tours/${tourId}`);
    const data = await res.json();

    console.log(data);
    return data.tour;
  } catch (err) {
    console.log(err);
  }
}
