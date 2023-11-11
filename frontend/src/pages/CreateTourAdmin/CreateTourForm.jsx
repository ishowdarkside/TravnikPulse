/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./CreateTourAdmin.module.scss";
import EditTourPreferences from "../EditTourAdmin/EditTourPreferences/EditTourPreferences";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import EditTourMap from "../EditTourAdmin/EditTourMap/EditTourMap";
import { useForm } from "react-hook-form";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useCreateTour } from "../../hooks/useTours";
import { useAdminContext } from "../../context/AdminContext";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function CreateTourForm() {
  const [selectedPreferences, setSelectedPreferences] = useState([]);

  const [time, setTime] = useState(null);
  const [price, setPrice] = useState("");
  const [isFree, setIsFree] = useState(false);
  const [position, setPosition] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutate, isLoading } = useCreateTour();
  const { activeDate } = useAdminContext();

  if (!activeDate) return <Navigate to="/app/admin" />;

  async function submitFnc(data) {
    if (!time) return toast.error("Assign event time!");
    if (!isFree && !price)
      return toast.error("Assign price of event or mark it as FREE!");
    if (position.length === 0)
      return toast.error("Assign event location on map");

    if (selectedPreferences.length === 0)
      return toast.error("Select categories of your event");

    const formData = new FormData();
    formData.append("time", time);
    formData.append("price", isFree ? "FREE" : price);
    formData.append("location", JSON.stringify({ coordinates: position }));
    formData.append("categories", selectedPreferences);
    formData.append("coverImg", data.coverImg[0]);
    formData.append("date", activeDate);
    delete data.coverImg;

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
      <h1>Create event</h1>
      <div className={styles.inputWrapper}>
        <label htmlFor="name">Title</label>
        <input
          type="text"
          name="name"
          placeholder="Title goes here"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span className={styles.errorMsg}>
            Provide title of your activity
          </span>
        )}
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
        <label htmlFor="duration">Duration (in minutes)</label>
        <input
          type="number"
          placeholder="120 Minutes"
          name="duration"
          {...register("duration", { required: true })}
        />
        {errors.duration && (
          <span className={styles.errorMsg}>
            Provide duration of your activity
          </span>
        )}
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
          {...register("description", { required: true })}
        ></textarea>
        {errors.description && (
          <span className={styles.errorMsg}>
            Provide description of activity
          </span>
        )}
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
          {...register("coverImg", { required: true })}
          accept="image/*"
          className={styles.inputImg}
        />
        {errors.coverImg && (
          <span className={styles.errorMsg}>
            Provide cover image of activity
          </span>
        )}
      </div>

      <div>
        <span>Choose location of activity</span>
        <EditTourMap position={position} setPosition={setPosition} />
      </div>
      <button type="submit" className={styles.submitBtn}>
        Save changes
      </button>
    </form>
  );
}
