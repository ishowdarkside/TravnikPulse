import { BiSolidDrink, BiTrip, BiSlideshow } from "react-icons/bi";
import {
  MdOutlineFastfood,
  MdOutlineSportsSoccer,
  MdOutlineMuseum,
  MdOutlineMusicNote,
  MdOutlinePark,
  MdOutlineScience,
  MdOutlineEventAvailable,
  MdOutlineShoppingCart,
  MdOutlineHiking,
  MdForest,
  MdOutlinePets,
} from "react-icons/md";
import { TbMovie } from "react-icons/tb";
import { BsBrush, BsMoonStars } from "react-icons/bs";
import { RiFilePaper2Line } from "react-icons/ri";
import { LuConciergeBell } from "react-icons/lu";
import { TbBuildingCircus } from "react-icons/tb";
import { PiChalkboardTeacher, PiCoffeeBold, PiPlant } from "react-icons/pi";
import { GiRiver, GiCampingTent, GiProcessor } from "react-icons/gi";
import { LiaToolsSolid } from "react-icons/lia";
import { FaPersonBiking } from "react-icons/fa6";

export const allPreferences = [
  {
    value: "Nightlife",
    preference: "nightlife",
    icon: <BiSolidDrink />,
  },
  {
    value: "Food",
    preference: "food",
    icon: <MdOutlineFastfood />,
  },
  {
    value: "Art",
    preference: "art",
    icon: <BsBrush />,
  },
  {
    value: "History",
    preference: "history",
    icon: <RiFilePaper2Line />,
  },
  {
    value: "Amenities",
    preference: "amenities",
    icon: <LuConciergeBell />,
  },
  {
    value: "Museums",
    preference: "museums",
    icon: <MdOutlineMuseum />,
  },
  {
    value: "Movies",
    preference: "movies",
    icon: <TbMovie />,
  },
  {
    value: "Music",
    preference: "music",
    icon: <MdOutlineMusicNote />,
  },
  {
    value: "Culture",
    preference: "culture",
    icon: <BsMoonStars />,
  },
  {
    value: "Day Trips",
    preference: "dayTrip",
    icon: <BiTrip />,
  },
  {
    value: "Parks",
    preference: "parks",
    icon: <MdOutlinePark />,
  },
  {
    value: "Science",
    preference: "science",
    icon: <MdOutlineScience />,
  },
  {
    value: "Sport",
    preference: "sport",
    icon: <MdOutlineSportsSoccer />,
  },
  {
    value: "Show",
    preference: "show",
    icon: <BiSlideshow />,
  },
  {
    value: "Circus",
    preference: "circus",
    icon: <TbBuildingCircus />,
  },
  {
    value: "Events",
    preference: "events",
    icon: <MdOutlineEventAvailable />,
  },
  {
    value: "Seminars",
    preference: "seminars",
    icon: <PiChalkboardTeacher />,
  },
  {
    value: "River",
    preference: "river",
    icon: <GiRiver />,
  },
  {
    value: "Workshops",
    preference: "workshop",
    icon: <LiaToolsSolid />,
  },
  {
    value: "Shopping",
    preference: "shopping",
    icon: <MdOutlineShoppingCart />,
  },
  {
    value: "Hiking",
    preference: "hiking",
    icon: <MdOutlineHiking />,
  },
  {
    value: "Camping",
    preference: "camping",
    icon: <GiCampingTent />,
  },
  {
    value: "Outdoor",
    preference: "outdoor",
    icon: <MdForest />,
  },
  {
    value: "Technology",
    preference: "technology",
    icon: <GiProcessor />,
  },
  {
    value: "Coffee Shops",
    preference: "coffeeShop",
    icon: <PiCoffeeBold />,
  },
  {
    value: "Biking Routes",
    preference: "bikingRoutes",
    icon: <FaPersonBiking />,
  },
  {
    value: "Vegetarian",
    preference: "vegeterian",
    icon: <PiPlant />,
  },
  {
    value: "Pet-Friendly Places",
    preference: "petFriendlyPlaces",
    icon: <MdOutlinePets />,
  },
];
