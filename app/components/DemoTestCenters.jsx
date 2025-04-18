import React, { useState } from "react";
import axios from "axios";

function DemoTestCenters({ centers }) {
  const [userPostcode, setUserPostcode] = useState("");
  const [nearestCenters, setNearestCenters] = useState([]);

  const handleSearch = async () => {
    try {
      const res = await axios.get(`https://api.postcodes.io/postcodes/${userPostcode}`);
      const { latitude: userLat, longitude: userLng } = res.data.result;

      const sorted = [...centers].map(center => {
        const distance = getDistanceFromLatLonInKm(userLat, userLng, center.lat, center.lng);
        return { ...center, distance };
      }).sort((a, b) => a.distance - b.distance);

      setNearestCenters(sorted.slice(0, 5)); // top 5 nearest
    } catch (error) {
      alert("Invalid postcode");
    }
  };

  const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const deg2rad = (deg) => deg * (Math.PI / 180);

  return (
    <div>
      <input
        type="text"
        value={userPostcode}
        onChange={(e) => setUserPostcode(e.target.value)}
        placeholder="Enter your postcode"
      />
      <button onClick={handleSearch}>Find Nearest Test Center</button>

      <ul>
        {nearestCenters.map(center => (
          <li key={center.id}>
            <h3>{center.title}</h3>
            <p>{center.address}</p>
            <small>Distance: {center.distance.toFixed(2)} km</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DemoTestCenters;
