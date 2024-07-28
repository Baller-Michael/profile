import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function SpeakersSection({ speakers, bgColor, title }) {
	const [speakersModalKey, setSpeakersModalKey] = useState(null);
	const baseURL = import.meta.env.BASE_URL;

	const renderSpeakersModal = () => {
		const speaker = speakers[speakersModalKey];

		return (
			<Modal
				backdrop="static"
				show
				bsSize="small"
				bsClass="speakers-modal gew-speakers modal"
				className="modal-center"
				keyboard
				onHide={() => setSpeakersModalKey(null)}
			>
				<Modal.Body>
					<Button
						type="button"
						className="modal-close-btn-body"
						aria-label="Close"
						onClick={() => setSpeakersModalKey(null)}
					/>
					<div className="left-column">
						<img src={`${baseURL}/${speaker.imgSrc}`} alt={speaker.fullName} />
					</div>
					<div className="right-column">
						<div className="modal-speaker-name">{speaker.fullName}</div>
						<div className="modal-speaker-job-title">{speaker.jobTitle}</div>
						<p className="modal-speaker-description">{speaker.description}</p>
					</div>
				</Modal.Body>
			</Modal>
		);
	};

	return (
		<div className="speakers-section gew-speakers">
			{title && <h2 className="customer-title">{title}</h2>}
			<ul className="speakers-list">
				{speakers.map((speaker, key) => {
					return (
						<li className="speakers-item" key={speaker.fullName}>
							<figure className="speakers-figure">
								<div className="speakers-img-wrap">
									<img
										src={`${baseURL}/${speaker.imgSrc}`}
										alt={speaker.fullName}
										className="speakers-img"
									/>
									<div
										className="speakers-img-hover-description"
										onClick={() => setSpeakersModalKey(key)}
										style={{
											background: `linear-gradient(184deg, rgba(${bgColor}, 0) 0%, rgba(${bgColor}, 1) 100%)`,
										}}
									>
										<div className="text-wrap">
											<div className="speakers-name">{speaker.fullName}</div>
											<p className="speakers-description">
												{speaker.shortDescription}...
											</p>
										</div>
									</div>
								</div>
								<figcaption className="speakers-figcaption">
									<h3 className="speakers-name">{speaker.fullName}</h3>
									<p className="speakers-job-title">{speaker.jobTitle}</p>
								</figcaption>
							</figure>
						</li>
					);
				})}
			</ul>
			{Number.isInteger(speakersModalKey) && renderSpeakersModal()}
		</div>
	);
}

SpeakersSection.propTypes = {
	speakers: PropTypes.array.isRequired,
	bgColor: PropTypes.string,
	title: PropTypes.string,
};
SpeakersSection.defaultProps = {
	bgColor: '108,8,73',
	title: '',
};
