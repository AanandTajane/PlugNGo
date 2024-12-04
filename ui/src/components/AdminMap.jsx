// import React from 'react'
import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet"
import MarkerClusterGroup from "react-leaflet-cluster";
import "./userdashboard.css"
import { Icon, divIcon, point } from "leaflet";
import { useState } from 'react';
import { useEffect } from 'react';
import { request } from '../axios_helper';
// import axios from "axios";
const Map = () => {
    const [stations, setStations] = useState([]);


    useEffect(() => {
        request(
            "GET",
            "/stations/findAll"
        ).then(
            (response) => {
                // setAuthHeader(response.data.token);
                setStations(response.data)
                console.log(response.data);

            }).catch(
            (error) => {
                alert("Cannot save data : " + error);
            }
        );
    }, []);


    const chargingStns = stations.map((station) => ({
        id: station.id,
        stationName: station.stationName,
        geocode: [parseFloat(station.latitude), parseFloat(station.longitude)],
        slotsAvailable: station.slotsAvailable,
        // Map other properties to columns as needed
    }));

    const customIcon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",

        iconSize: [38, 38] // size of the icon
    });

    const createClusterCustomIcon = function (cluster) {
        return new divIcon({
            html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
            className: "custom-marker-cluster",
            iconSize: point(44, 44, true)
        });
    };



    return (
        <div>
            <MapContainer on center={[19.153823, 72.875179]} zoom={13}>

                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

                />
                <MarkerClusterGroup

                    chunkedLoading
                    iconCreateFunction={createClusterCustomIcon}
                >
                    {/* Mapping through the markers */}
                    {chargingStns.map((chargingStn) => (

                        <Marker key={chargingStn.id} position={chargingStn.geocode} icon={customIcon}>
                            <Popup>
                                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                    Station : {chargingStn.stationName}<br/>
                                    Slots Available : {chargingStn.slotsAvailable}<br/>
                                </div>
                            </Popup>
                        </Marker>
                    ))}

                </MarkerClusterGroup>
            </MapContainer>
        </div>
    )
}

export default Map