import React from 'react'

export default function CustomerWhatWeDo({ whatWeDo: { title, description, imgSrc }, joinButton, background }) {
    const staticSrcPrefix = null
    return (
        <section className={`customer-about ${background ? 'container-color' : ''}`}>
            <div className="page-container">
                <figure className="customer-about-figure">
                    <figcaption className="customer-about-figcaption">
                        {title && (<h2 className="title">{title}</h2>)}
                        {description.map(text => (
                            <p
                                className="customer-about-description"
                                key={text}
                            >
                                {text}
                            </p>
                        ))}
                        <div className="btn-container">{joinButton}</div>
                    </figcaption>
                    <div className="customer-about-img-wrap">
                        <img
                            src={`src/${imgSrc}`}
                            alt={title}
                        />
                    </div>
                </figure>
            </div>
        </section>
    )
}