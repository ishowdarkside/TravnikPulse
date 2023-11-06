// Components
import Activity from './Activity/Activity';
// SCSS
import styles from './Activities.module.scss';

export default function Activities() {
    return (
        <section className={styles.activities}>
            <Activity />
            <Activity />
            <Activity />
        </section>
    )
}