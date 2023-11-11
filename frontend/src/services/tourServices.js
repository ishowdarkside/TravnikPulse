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
  console.log(data);
}
