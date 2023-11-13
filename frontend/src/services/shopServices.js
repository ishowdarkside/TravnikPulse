const BASE_URL = "http://127.0.0.1:8000/";

export async function getAllShops() {
  try {
    const res = await fetch(`${BASE_URL}api/shops`);
    const data = await res.json();

    return data.shops;
  } catch (error) {
    console.log(error);
  }
}

export async function createShop(formData) {
  const token = localStorage.getItem("jwt");
  try {
    const res = await fetch(`${BASE_URL}api/shops`, {
      method: "POST",
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

export async function getRadiusShop() {
  const userPositon = JSON.parse(localStorage.getItem('position'))
  try {
    const res = await fetch(`${BASE_URL}api/shops/shops-within/distance/80/center/${userPositon.lng}, ${userPositon.lat}`);
    const data = await res.json();
    return data.shops;
  } catch (error) {
    console.log(error)
  }
}