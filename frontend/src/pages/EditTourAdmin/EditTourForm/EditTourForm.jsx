/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./EditTourForm.module.scss";
import EditTourPreferences from "../EditTourPreferences/EditTourPreferences";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import EditTourMap from "../EditTourMap/EditTourMap";
import { useForm } from "react-hook-form";
import { useEditTour } from "../../../hooks/useTours";
import { AiOutlineCloudUpload } from "react-icons/ai";

export default function EditTourForm({ tour }) {
  const [selectedPreferences, setSelectedPreferences] = useState(
    tour.categories
  );

  //staviti state iz toura kad prebacim na string
  const [time, setTime] = useState(tour.time);
  const [price, setPrice] = useState(tour.price);
  const [isFree, setIsFree] = useState(() =>
    tour.price === "FREE" ? true : false
  );
  const [position, setPosition] = useState(tour.location.coordinates);

  const { register, handleSubmit } = useForm();
  const { mutate, isLoading } = useEditTour();

  async function submitFnc(data) {
    if (data.coverImg.length === 0) delete data.coverImg;
    const formData = new FormData();
    formData.append("time", time);
    formData.append("price", isFree ? "FREE" : price);
    formData.append("location", JSON.stringify({ coordinates: position }));
    if (selectedPreferences.length > 0)
      formData.append("categories", selectedPreferences);

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
      <h1>Edit event</h1>
      <div className={styles.inputWrapper}>
        <label htmlFor="name">Title</label>
        <input
          type="text"
          name="name"
          defaultValue={tour.name}
          {...register("name", { required: true })}
        />
      </div>
      <div className={styles.inputWrapper}>
        <span>Categories</span>
        <EditTourPreferences
          selectedPreferences={selectedPreferences}
          setSelectedPreferences={setSelectedPreferences}
        />
      </div>
      <div className={styles.inputWrapper}>
        <span>Select time</span>
        <TimePicker
          showTimeSelect
          timeFormat="p"
          dateFormat=""
          value={time}
          onChange={setTime}
          disableClock={true}
        />
      </div>
      <div className={styles.inputWrapper}>
        <label htmlFor="duration">Duration</label>
        <input
          type="number"
          placeholder="120 Minutes"
          name="duration"
          defaultValue={tour.duration}
          {...register("duration", { required: true })}
        />
      </div>
      <div className={styles.inputWrapper}>
        <span>Price</span>
        <div className={styles.pricingWrapper}>
          <span
            className={isFree ? styles.isFree : styles.freeBtn}
            onClick={() => setIsFree((curr) => !curr)}
          >
            FREE
          </span>
          <input
            type="number"
            placeholder="25KM"
            disabled={isFree}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.inputWrapper}>
        <span>Description</span>
        <textarea
          placeholder="Description"
          defaultValue={tour.description}
          {...register("description", { required: true })}
        ></textarea>
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
        <span>Choose location of activity</span>
        <EditTourMap
          tour={tour}
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
