import styles from './Activity.module.scss';

export default function Activity() {
    return (
        <div className={styles.activity}>
            <div className={styles.activityOverlay}></div>
            <div className={styles.content}>
                <h2>Aleksandra Prijovic - Tuzla 23/12</h2>
                <h2>@Dvorana Mejdan</h2>
            </div>
        </div>
    )
}