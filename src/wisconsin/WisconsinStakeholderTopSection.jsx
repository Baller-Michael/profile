import React from 'react';
import WisconsinOffers from './WisconsinOffers.jsx'

export default function WisconsinStakeholderTopSection({ title, topSectionDescription, quickFacts, quickFactsTitle, joinButton, offer, learnMore }) {
    return (
        <section className="wisconsin-sub-page--about">
            <div className="page-container wisconsin-about-container">
                <div className="wisconsin-sub-page--about-figure">
                    <h2 className="title">{title}</h2>
                    {topSectionDescription.map(description => (
                        <p
                            className="wisconsin-sub-page--about-description"
                            key={description}
                        >
                            {description}
                        </p>
                    ))}
                    <div className="btn-container">{joinButton}{learnMore && learnMore}</div>
                </div>
                {quickFacts && <div className={`quick-facts quick-facts-${quickFacts.length}`}>
                    {quickFactsTitle ? <p className="facts-date-title text-center">{quickFactsTitle}</p>
                        : <h2 className="facts-title text-center">QUICK FACTS</h2>}
                    <ul className={`facts-list facts-list-${quickFacts.length}`}>
                        {quickFacts.map(fact => (
                            <li className="fact" key={fact.description}><strong>{fact.point}</strong>{fact.description}</li>
                        )
                        )}
                    </ul>
                </div>
                }
                {offer && <WisconsinOffers offer={offer} />}
            </div>
        </section>
    )
}