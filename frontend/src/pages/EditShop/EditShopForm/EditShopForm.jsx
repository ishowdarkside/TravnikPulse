/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./EditTourForm.module.scss";

import EditTourMap from "../EditShopMap/EditShopMap";
import { useForm } from "react-hook-form";
import { useEditShop } from "../../../hooks/useShops";
import { AiOutlineCloudUpload } from "react-icons/ai";

export default function EditShopForm({ shop }) {
  //staviti state iz toura kad prebacim na string

  const [category, setCategory] = useState(shop.category);
  const [position, setPosition] = useState(shop.location.coordinates);

  const { register, handleSubmit } = useForm();
  const { mutate, isLoading } = useEditShop();

  async function submitFnc(data) {
    if (data.coverImg.length === 0) delete data.coverImg;
    const formData = new FormData();

    formData.append("location", JSON.stringify({ coordinates: position }));
    formData.append("category", category);
    if (data.coverImg && data.coverImg.length > 0) {
      formData.append("coverImg", data.coverImg[0]);
      delete data.coverImg;
    }
    Object.entries(data).forEach((entry) => {
      formData.append(entry[0], entry[1]);
    });

    await mutate(formData);
  }

  if (isLoading) return <h1>SAVING...</h1>;
  return (
    <form
      onSubmit={handleSubmit((data) => submitFnc(data))}
      className={styles.form}
    >
      <h1>Edit Shop</h1>
      <div className={styles.inputWrapper}>
        <label htmlFor="name">Title</label>
        <input
          type="text"
          name="shopName"
          defaultValue={shop.shopName}
          {...register("shopName", { required: true })}
        />
      </div>{" "}
      <div className={styles.inputWrapper}>
        <label htmlFor="category">Add shop category</label>
        <input
          type="text"
          name="category"
          id="category"
          onChange={(e) => setCategory(e.target.value.toLowerCase())}
          placeholder="ex. food, restaurant"
          defaultValue={shop.category}
        />
      </div>
      <div className={styles.inputWrapper}>
        <span>Cover Image</span>
        <label htmlFor="coverImg" className={styles.labelImg}>
          Choose cover image <AiOutlineCloudUpload />
        </label>
        <input
          type="file"
          name="coverImg"
          id="coverImg"
          {...register("coverImg")}
          accept="image/*"
          className={styles.inputImg}
        />
      </div>
      <div>
        <span>Choose location of shop</span>
        <EditTourMap
          shop={shop}
          position={position}
          setPosition={setPosition}
        />
      </div>
      <button type="submit" className={styles.submitBtn}>
        Save changes
      </button>
    </form>
  );
}
