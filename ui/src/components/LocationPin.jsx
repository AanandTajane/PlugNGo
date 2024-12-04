import React from 'react'
import { Icon } from '@iconify/react';
const LocationPin = ({ text }) => {
    return (
        <div className="pin">
            <Icon icon="fluent:location-24-regular" className="pin-icon" />
            <p className="pin-text">{text}</p>
        </div>
    )
}

export default LocationPin;

