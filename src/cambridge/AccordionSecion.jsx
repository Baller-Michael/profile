import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Button, Collapse, DropdownButton, Dropdown } from 'react-bootstrap';
import AutoplayVideo from '../video/AutoplayVideo.jsx';

export default class AccordionSection extends Component {
	constructor() {
		super();
		this.state = {
			openSectionKey: 0,
			isMobileView: window.innerWidth <= 800,
		};
		this.renderMobileDropdownButton = this.renderMobileDropdownButton.bind(this);
		this.handleResize = this.handleResize.bind(this);
	}

	componentDidMount() {
		window.addEventListener('resize', this.handleResize);
	}

	componentWillUpdate(nextProps) {
		const { content, location } = this.props;
		const { openSectionKey } = this.state;
		if (
			(!_.isEqual(content, nextProps.content) && openSectionKey !== 0) ||
			_.get(location, 'pathname', '') !== _.get(nextProps.location, 'pathname', '')
		) {
			this.setState({ openSectionKey: 0 });
		}
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize);
	}

	handleResize() {
		const { isMobileView } = this.state;
		if (window.innerWidth <= 800 && !isMobileView) {
			this.setState({ isMobileView: true });
		} else if (window.innerWidth > 800 && isMobileView) {
			this.setState({ isMobileView: false });
		}
	}

	renderMobileDropdownButton() {
		const { openSectionKey } = this.state;
		const { content } = this.props;
		const activeItem = content[openSectionKey];
		return (
			<DropdownButton
				variant="default btn-transparent accordion-btn"
				title={
					<React.Fragment>
						<div className="text-one-row accordion-btn-title">
							{activeItem.title}
							{activeItem.isComingSoon && (
								<span className="grey-addon"> (Coming soon)</span>
							)}
						</div>
						<span className="caret" />
					</React.Fragment>
				}
				align="start"
				id="dropdown-no-caret"
			>
				{content.map(({ title, isComingSoon }, key) => {
					if (openSectionKey === key) return null;
					return (
						<li key={title}>
							<Dropdown.Item eventKey={key + 1}>
								<Button onClick={() => this.setState({ openSectionKey: key })}>
									{title}
									{isComingSoon && (
										<span className="grey-addon"> (Coming soon)</span>
									)}
								</Button>
							</Dropdown.Item>
						</li>
					);
				})}
			</DropdownButton>
		);
	}

	renderAccordion() {
		const { openSectionKey } = this.state;
		const { content, contentTitle } = this.props;

		return (
			<div className="accordion-column accordion-column--content">
				{contentTitle && contentTitle}
				{content.map(
					({ title, description, isComingSoon, isBespoke, mainDescription }, key) => {
						const isActive = openSectionKey === key;
						return (
							<div
								className={`accordion-wrap ${isActive ? '-active' : ''}`}
								key={title}
							>
								<div className="accordion-btn-wrap">
									<Button
										onClick={() => this.setState({ openSectionKey: key })}
										className="btn-transparent accordion-btn"
									>
										<div className="text-one-row accordion-btn-title">
											{title}{' '}
											{isComingSoon && (
												<span className="grey-addon"> (Coming soon)</span>
											)}
											{isBespoke && (
												<span className="grey-addon"> (Bespoke)</span>
											)}
										</div>{' '}
										<span
											className="caret"
											style={
												isActive
													? { transform: 'rotate(0)' }
													: { transform: 'rotate(-90deg)' }
											}
										/>
									</Button>
								</div>
								<Collapse in={isActive}>
									<div className="accordion-content">
										{mainDescription && (
											<h5 className="main-description">{mainDescription}</h5>
										)}
										{description}
									</div>
								</Collapse>
							</div>
						);
					}
				)}
			</div>
		);
	}

	render() {
		const { openSectionKey, isMobileView } = this.state;
		const { content, contentTitle } = this.props;
		const activeItem = content[openSectionKey];
		const staticSrcPrefix = `${Meteor.settings.public.staticSrcPrefix}`;
		if (!activeItem) return null;
		return (
			<div className="accordion-row">
				{!!contentTitle && isMobileView && contentTitle}
				{isMobileView ? this.renderMobileDropdownButton() : this.renderAccordion()}
				<div className="accordion-column">
					{activeItem.imgSrc ? (
						<img
							src={activeItem.imgSrc}
							alt={activeItem.title}
							className="accordion-img"
						/>
					) : (
						<AutoplayVideo videoSrc={activeItem.videoSrc} prefix={staticSrcPrefix} />
					)}
					{isMobileView && (
						<div className="accordion-content">
							{activeItem.mainDescription && (
								<h5 className="main-description">{activeItem.mainDescription}</h5>
							)}
							{activeItem.description}
						</div>
					)}
				</div>
			</div>
		);
	}
}
AccordionSection.propTypes = {
	content: PropTypes.array.isRequired,
	contentTitle: PropTypes.node,
};
AccordionSection.defaultProps = {
	contentTitle: null,
};
