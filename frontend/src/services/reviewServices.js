const BASE_URL = "http://127.0.0.1:8000/";

export async function getUnapprovedReviews() {
  const token = localStorage.getItem("jwt");
  try {
    const res = await fetch(`${BASE_URL}api/reviews/unapproved-reviews`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    if (data.status === "success") return data.reviews;
    return "error";
  } catch (err) {
    console.log(err);
  }
}

export async function getSingleUnapprovedReview(reviewID) {
  const token = localStorage.getItem("jwt");
  try {
    const res = await fetch(
      `${BASE_URL}api/reviews/unapproved-reviews/${reviewID}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const data = await res.json();

    if (data.status === "success") return data.review;
    return "not-found";
  } catch (err) {
    console.log(err);
  }
}
