import ReactDOM from 'react-dom';
import { Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import styles from './Markers.module.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiSolidChevronDown } from 'react-icons/bi';
import { MdDirections } from 'react-icons/md'
import { SlLocationPin } from 'react-icons/sl';
import { GiSandsOfTime } from 'react-icons/gi'
import { IoMdTime } from 'react-icons/io';
import { TfiMoney } from 'react-icons/tfi'
import { FaWalking } from 'react-icons/fa'

export default function Markers({ tour, setTourLocation }) {
	const [ showModal, setShowModal ] = useState(false);
	const map = useMap();

	const customIcon = new L.Icon({
		iconUrl: `http://127.0.0.1:8000/${tour.coverImg}`,
		iconSize: [48, 48], // increase the size
		iconAnchor: [24, 48], // position it to the right
		popupAnchor: [0, -48], // adjust the popup position relative to the marker
	  });

	  const handleMarkerClick = () => {
		setShowModal(prevState => !prevState)
	  }

	  // Disable map dragging when the modal is open
	  useEffect(() => {
		if (showModal) {
		  map.dragging.disable();
		  map.doubleClickZoom.disable();
		  map.scrollWheelZoom.disable();
		} else {
		  map.dragging.enable();
		  map.doubleClickZoom.enable();
		  map.scrollWheelZoom.enable();
		}
	  }, [showModal, map]);

	return (
    <>
		<Marker id={styles.marker} eventHandlers={{ click: () => handleMarkerClick() }} position={[tour.location.coordinates[0], tour.location.coordinates[1]]} icon={customIcon}></Marker>
		{showModal && (
			ReactDOM.createPortal(
				<div className={styles.customModal}>
					<div className={styles.mainSection}>
						<span className={styles.closeModal} onClick={() => setShowModal(false)}><BiSolidChevronDown /></span>
						<div className={styles.content}>
							<h3>{tour.name}</h3>
						</div>
						<div className={styles.btns}>
							<button onClick={() => {
								// Hide modal
								setShowModal(false)
								// Set coordinates
								setTourLocation(tour.location.coordinates)
							}}><MdDirections />Directions</button>
							<Link to={`/app/tour/${tour._id}`}>See more</Link>
						</div>
						<img src={`http://127.0.0.1:8000/${tour.coverImg}`} className={styles.img} alt="" />
						<div className={styles.navigation}>
							<ul>
								<li>Overview</li>
							</ul>
						</div>
					</div>
					<div className={styles.navContent}>
							<ul>
								<li><SlLocationPin />Location</li>
								<li><IoMdTime /> Event time</li>
								<li><GiSandsOfTime />Event duration</li>
								<li><FaWalking />Time you need</li>
								<li><TfiMoney />{tour.price} KM</li>
							</ul>
						</div>
				</div>,
				document.body
			)
		)}
	</>
  );
}