import React, { useState } from "react";

const MapSelector = ({ onLocationSelect, onTestCenterSelect, nearestCentres = [] }) => {
    const [manualLocation, setManualLocation] = useState("");
    const [selectedTestCenter, setSelectedTestCenter] = useState("");
    const [error, setError] = useState("");

    const handleUseMyLocation = () => {
        if (!navigator.geolocation) {
            setError("Geolocation not supported.");
            return;
        }
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const { latitude, longitude } = pos.coords;
                onLocationSelect({ lat: latitude, lng: longitude });
                setError("");
            },
            () => {
                setError("Unable to fetch your location.");
            }
        );
    };

    const handleManualSubmit = async () => {
        if (!manualLocation) return;
        try {
            const res = await fetch(
                `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
                    manualLocation
                )}&format=json`
            );
            const data = await res.json();
            if (data.length) {
                onLocationSelect({
                    lat: parseFloat(data[0].lat),
                    lng: parseFloat(data[0].lon),
                });
                setError("");
            } else {
                setError("Location not found. Try something else.");
            }
        } catch (e) {
            setError("Geocoding error. Try again later.");
        }
    };

    const handleTestCenterChange = (e) => {
        const value = e.target.value;
        setSelectedTestCenter(value);
        onTestCenterSelect(value); // Call parent to update formData.testCenter
    };

    return (
        <div className="mb-4">
            <label className="block text-md font-medium mb-2">
                Enter Your Location or Use Current Location
            </label>
            <input
                type="text"
                placeholder="Enter postcode, or area name"
                value={manualLocation}
                onChange={(e) => setManualLocation(e.target.value)}
                className="w-full border border-gray-500 py-3 px-3 mb-2"
            />

            <div className="flex gap-2 mb-4">
                <button
                    type="button"
                    onClick={handleManualSubmit}
                    className="bg-green-600 text-white px-4 py-2 rounded"
                >
                    🔍 Search
                </button>
                <button
                    type="button"
                    onClick={handleUseMyLocation}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    📍 Use My Location
                </button>
            </div>

            {/* Conditionally show selected test center input */}
            {nearestCentres.length > 0 && (
                <>
                    <label className="block text-md font-medium mb-2">
                        Selected Test Centre
                    </label>
                    <input
                        type="text"
                        id="test-center-input"
                        placeholder="Click on a center below to autofill"
                        readOnly
                        className="w-full border border-gray-500 py-3 px-3 bg-gray-100 cursor-not-allowed"
                    />
                </>
            )}

            {error && <p className="text-red-600 mt-2">{error}</p>}
        </div>
    );

};

export default MapSelector;

