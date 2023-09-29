import axios from "axios";

const URL = "https://hotels-api-4ltr.onrender.com/api/hotels";

const getHotels = () => axios.get(URL);

export { getHotels };
