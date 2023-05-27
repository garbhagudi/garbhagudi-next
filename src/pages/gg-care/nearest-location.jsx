import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  MarkerF,
  LoadScriptNext,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";

const SearchComponent = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [nearestLocation, setNearestLocation] = useState(null);
  const [directions, setDirections] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }, []);

  const businessLocations = [
    { lat: 12.9416, lng: 77.5564 },

    { lat: 13.0245, lng: 77.644 },

    { lat: 12.9376, lng: 77.5796 },

    { lat: 12.8522, lng: 77.6678 },

    { lat: 12.967, lng: 77.7024 },

    { lat: 12.961, lng: 77.511 },

    { lat: 13.0277, lng: 77.5718 },
  ];

  const calculateDirections = (origin, destination) => {
    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin: new window.google.maps.LatLng(origin.lat, origin.lng),
        destination: new window.google.maps.LatLng(
          destination.lat,
          destination.lng
        ),
        travelMode: google.maps.DirectionsTravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK") {
          setDirections(result);
        } else {
          console.error("Directions request failed due to " + status);
        }
      }
    );
  };

  useEffect(() => {
    if (currentLocation) {
      const nearest = findNearestLocation();
      setNearestLocation(nearest);
      calculateDirections(currentLocation, nearest);
    }
  }, [currentLocation]);

  const getDistance = (start, end) => {
    const earthRadius = 6371; // in kilometers
    const latDiff = toRad(end.lat - start.lat);
    const lngDiff = toRad(end.lng - start.lng);
    const a =
      Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
      Math.cos(toRad(start.lat)) *
        Math.cos(toRad(end.lat)) *
        Math.sin(lngDiff / 2) *
        Math.sin(lngDiff / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadius * c;
    return distance;
  };

  const toRad = (value) => (value * Math.PI) / 180;

  // Find the nearest location based on the current location
  const findNearestLocation = () => {
    let nearestLocation = null;
    let minDistance = Infinity;
    for (const location of businessLocations) {
      const distance = getDistance(currentLocation, location);
      if (distance < minDistance) {
        minDistance = distance;
        nearestLocation = location;
      }
    }
    return nearestLocation;
  };

  return (
    <div>
      <h1 className="text-center pt-8 font-heading text-2xl lg:text-4xl font-bold">
        Nearest Branch
      </h1>
      <p className="text-center font-content pt-4 font-semibold">
        This map below shows you the route to the GarbhaGudi Branch nearest to
        your current location.
      </p>
      <LoadScriptNext
        googleMapsApiKey={"AIzaSyBjllqZbv4PnsNV-cCm-8jU3vActp0QEZw"}
        onLoad={() => "Loading"}
        loadingElement={"Loading"}
      >
        <GoogleMap
          mapContainerStyle={{ width: "95vw", height: "95vh" }}
          zoom={12}
          clickableIcons={true}
          mapContainerClassName="rounded-lg mt-8 px-3 mx-auto border-2 border-brandPurpleDark"
          center={currentLocation}
        >
          {businessLocations.map((location, index) => (
            <MarkerF
              key={index}
              position={{ lat: location.lat, lng: location.lng }}
            />
          ))}
          {nearestLocation && (
            <>
              <MarkerF
                position={{
                  lat: nearestLocation.lat,
                  lng: nearestLocation.lng,
                }}
                icon={{
                  url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                }}
              />
              {directions && <DirectionsRenderer directions={directions} />}
            </>
          )}
          {currentLocation && nearestLocation && (
            <DirectionsService
              options={{
                destination: new window.google.maps.LatLng(
                  nearestLocation.lat,
                  nearestLocation.lng
                ),
                origin: new window.google.maps.LatLng(
                  currentLocation.lat,
                  currentLocation.lng
                ),
                travelMode: "DRIVING",
              }}
              callback={(result, status) => {
                if (status === "OK") {
                  setDirections(result);
                }
              }}
            />
          )}
        </GoogleMap>
      </LoadScriptNext>
    </div>
  );
};

export default SearchComponent;