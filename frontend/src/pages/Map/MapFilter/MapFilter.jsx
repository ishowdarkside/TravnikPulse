import { useState } from 'react';
import { useMapContext } from '../../../context/MapContext';
import { FaTimes } from 'react-icons/fa'
import styles from './MapFilter.module.scss';
import { useQueryClient } from '@tanstack/react-query';

export default function MapFilter() {
    const [ radiusModal, setRadiusModal ] = useState(false);
    const { setActiveFilter, activeFilter, tourLocation, setRadius, radius } = useMapContext();
    const queryClient = useQueryClient();
    return tourLocation === null && (
        <>
            <section className={styles.mapFilter}>
                <div className={activeFilter === 'all' ? `${styles.filter} : ${styles.active}` : styles.filter} onClick={() => setActiveFilter('all')}>All</div>
                <div className={activeFilter === 'radius' ? `${styles.filter} : ${styles.active}` : styles.filter} onClick={() => {
                    setActiveFilter('radius')
                    setRadiusModal(true)
                }}>Radius</div>
                <div className={activeFilter === 'tours' ? `${styles.filter} : ${styles.active}` : styles.filter} onClick={() => setActiveFilter('tours')}>Events</div>
                <div className={activeFilter === 'hotels' ? `${styles.filter} : ${styles.active}` : styles.filter} onClick={() => setActiveFilter('hotels')}>Hotels</div>
                <div className={activeFilter === 'shops' ? `${styles.filter} : ${styles.active}` : styles.filter} onClick={() => setActiveFilter('shops')}>Shops</div>
            </section>
            {radiusModal && (
                <div className={styles.radiusModal}>
                    <input type="number" onChange={(e) => setRadius(e.target.value)} value={radius} placeholder='Enter radius in km' />
                    <FaTimes onClick={() => {
                        setActiveFilter('all')
                        setRadiusModal(false)
                    }} />
                    <button onClick={() => {
                        setRadiusModal(false)
                        // Set radius in localstorage 
                        localStorage.setItem('radius', JSON.parse(radius))
                        queryClient.invalidateQueries(['RadiusTours','RadiusShops']);
                    }}>Set</button>
                </div>
            )}
        </>
    )
}