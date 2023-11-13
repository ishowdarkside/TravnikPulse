import { useState } from "react";
import EditTourMap from "../../EditTourAdmin/EditTourMap/EditTourMap";
import styles from "./CreateShopForm.module.scss";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useCreateShop } from "../../../hooks/useShops";
import toast from "react-hot-toast";
export default function CreateShopFrom() {
  const [position, setPosition] = useState([]);
  const [shopName, setShopName] = useState("");
  const [category, setCategory] = useState("");
  const [coverImg, setCoverImg] = useState(null);

  const { mutate, isLoading } = useCreateShop();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(coverImg);
    if (position.length == 0 || !shopName || !category || !coverImg)
      return toast.error("Fill out all required fields!");

    const formData = new FormData();
    formData.append("shopName", shopName);
    formData.append("category", category);
    formData.append("location", JSON.stringify({ coordinates: position }));
    formData.append("coverImg", coverImg);
    mutate(formData);
  }

  if (isLoading) return <h1>LOADING...</h1>;
  return (
    <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
      <div className={styles.inputWrapper}>
        <label htmlFor="shopName">Add shop name</label>
        <input
          type="text"
          name="shopName"
          id="shopName"
          placeholder="ex. Pekara Kabil"
          value={shopName}
          onChange={(e) => setShopName(e.target.value)}
        />
      </div>

      <div className={styles.inputWrapper}>
        <label htmlFor="category">Add shop category</label>
        <input
          type="text"
          name="category"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value.toLowerCase())}
          placeholder="ex. food, restaurant"
        />
      </div>
      <div className={styles.inputWrapper}>
        <span>Cover image</span>
        <label htmlFor="coverImg" className={styles.labelImg}>
          {" "}
          Attach image <AiOutlineCloudUpload />
        </label>
        <input
          type="file"
          name="coverImg"
          id="coverImg"
          className={styles.inputImg}
          onChange={(e) => setCoverImg(e.target.files[0])}
        />
      </div>
      <div className={styles.inputWrapper}>
        <span>Add shop location</span>
        <EditTourMap position={position} setPosition={setPosition} />
      </div>
      <button className={styles.submitBtn}>Create shop</button>
    </form>
  );
}
