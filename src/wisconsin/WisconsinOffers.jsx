import React from 'react'

export default function WisconsinOffers({ offer: { title, description } }) {
    return (
        <div className="wisconsin-offers">
            <h3 className="offers-title">{title}</h3>
            <ul className="offers-list">
                {description.map(text => (
                    <li key={text} className="offers">{text}</li>
                ))}
            </ul>
        </div>
    )
}
