// React icons
import { MdOutlineDone } from 'react-icons/md';
// SCSS
import styles from './ReviewTour.module.scss';

export default function ReviewTour() {
    return (
        <div className={styles.reviewTour}>
            <h2>Your review is incredibly helpful, thank you</h2>
            <form className={styles.form}>
                <div className={styles.inputContainer}>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id='name' placeholder='John Doe' />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="message">Message</label>
                    <textarea rows='5' id='message' placeholder='Your message'></textarea>
                </div>
                <div className={styles.stars}>

                </div>
                <button><MdOutlineDone />Submit review</button>
            </form>
        </div>
    )
}