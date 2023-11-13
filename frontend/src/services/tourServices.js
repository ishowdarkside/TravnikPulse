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
  try {
    const res = await fetch(`${BASE_URL}api/tours/${tourId}`);
    const data = await res.json();
    if (data.status === "success") return data.tour;
    return "not-found";
  } catch (err) {
    console.log(err);
  }
}

export async function deleteTour(tourId) {
  try {
    const token = localStorage.getItem("jwt");
    await fetch(`${BASE_URL}api/tours/${tourId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (err) {
    console.log(err);
  }
}

export async function editTour(formData, tourID) {
  const token = localStorage.getItem("jwt");
  try {
    const res = await fetch(`${BASE_URL}api/tours/${tourID}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function createTour(formData) {
  const token = localStorage.getItem("jwt");
  console.log("JA POKRENUT");
  const res = await fetch(`${BASE_URL}api/tours`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  });
  const data = await res.json();
  return data;
}

export async function rateTour(tourID, rating) {
  const token = localStorage.getItem('jwt');
  try {
    const res = await fetch(`${BASE_URL}api/tours/rate-tour/${tourID}`, {
      method: 'PATCH',
      headers: { 
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({rating}),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error)
  }
}

export async function getRadiusTour() {
  const userPositon = JSON.parse(localStorage.getItem('userPosition'))
  try {
    const res = await fetch(`${BASE_URL}api/tours/tours-within/distance/80/center/${userPositon[1]}, ${userPositon[0]}`);
    const data = await res.json();
    console.log(data.tours)
    return data.tours;
  } catch (error) {
    console.log(error)
  }
}