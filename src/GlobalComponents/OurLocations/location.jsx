import React, { useState } from "react";
import "./style.css";
import MainHeading from "../Utils/mainHeading";

export default function OurLocations() {
    const [selectedLocationId, setSelectedLocationId] = useState(null);

    const locations = [
        { id: 1, name: "Kuwait" ,address:"555 Madison Avenue, 17th Floor, New York, NY 10022" },
        { id: 2, name: "Paris" ,address:"555 Madison Avenue, 17th Floor, New York, NY 10022" },
        { id: 3, name: "Amsterdam" ,address:"555 Madison Avenue, 17th Floor, New York, NY 10022" },
        { id: 4, name: "Istanbul" ,address:"555 Madison Avenue, 17th Floor, New York, NY 10022"},
        { id: 5, name: "Washington" ,address:"555 Madison Avenue, 17th Floor, New York, NY 10022" },
        { id: 6, name: "London" ,address:"555 Madison Avenue, 17th Floor, New York, NY 10022" },
    ];

    const handleLocationClick = (id) => {
        setSelectedLocationId(id === selectedLocationId ? null : id); // Toggle the selected location
    };

    return (
        <div className="our_locations">
            <MainHeading content1={"Our"} content2={"Locations"} />
            <div className="map_parent_section">
                <div className="map">
                    {/* Map section */}
                </div>
                <div className="locations_descriptions">
                    {locations.map((location) => (
                        <div
                            key={location.id}
                            className={`location_detail ${selectedLocationId === location.id ? "active" : ""}`}
                            onClick={() => handleLocationClick(location.id)}
                        >
                            <h1>{location.name}</h1>
                            {selectedLocationId === location.id && <p>{location.address}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
