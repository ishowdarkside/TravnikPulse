import { useNavigate } from "react-router-dom";
import { useGetSingleTour } from "../../../hooks/useTours";
import styles from "./EditTourAdmin.module.scss";
import NotFound from "../../NotFound/NotFound";
import EditTourForm from "../EditTourForm/EditTourForm";
import Spinner from "../../../components/Spinner/Spinner";

export default function EditTourAdmin() {
  const navigate = useNavigate();
  const { data, isLoading } = useGetSingleTour();

  if (isLoading) return <Spinner />;
  if (data === "not-found") return <NotFound />;
  return (
    <section className={styles.editTourSection}>
      <button onClick={() => navigate(-1)} className={styles.returnBtn}>
        &larr;
      </button>
      <EditTourForm tour={data} />
    </section>
  );
}
