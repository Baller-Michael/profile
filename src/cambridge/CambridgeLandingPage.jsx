import React, { Component } from 'react';
import CusomerHeader from '../CustomerHeader.jsx';
import CustomerWhatWeDo from '../CustomerWhatWeDo.jsx';
import CustomerList from '../CustomerList.jsx';
import CustomerCommunities from '../CustomerCommunities.jsx';
import CambridgeFooter from './CambridgeFooter.jsx';

import {
	ourCommunityTo,
	topSection,
	whatWeDo,
	stakeholdersPages,
	infoText,
} from './cambridge-content';

export default class CambridgeLandingPage extends Component {
	constructor(props) {
		super(props);
		document.title = 'Cambridge';
		window.scrollTo(0, 0);
	}

	render() {
		const baseURL = import.meta.env.BASE_URL;
		const userId = null;
		const staticSrcPrefix = null;

		const logoSrc = '/cambridge/cambridge-logo.jpg';
		const mobileLogoSrc = '/cambridge/mobile-cambridge-logo.png';
		const cambridgeBtnClass = 'cambridge-feature-red';
		const mainLink = '/cam/enterprise-zone';
		const entityToJoin = {
			title: 'Cambridge',
			_id: 'qL9BjwCsvjFQQbWXk',
			entityType: 'page',
		};

		const { title, subTitle, titleDescription } = topSection;

		const joinCambridge = null;

		return (
			<div className="cambridge-page wisconsin-page">
				{/* <CusomerHeader
					logoSrc={logoSrc}
					btnClass={cambridgeBtnClass}
					mainLink={mainLink}
					entityToJoin={entityToJoin}
					mobileLogoSrc={mobileLogoSrc}
				/> */}
				<section
					className="top-section"
					style={{
						background: `url(${baseURL}/cambridge/landing/cambridge-banner.jpg) center no-repeat`,
						backgroundSize: 'cover',
					}}
				>
					<div className="page-container text-center">
						<h1 className="top-title">{title}</h1>
						<h2 className="top-subtitle">{subTitle}</h2>
						<p className="top-description">{titleDescription}</p>
						{joinCambridge}
					</div>
				</section>
				<CustomerWhatWeDo whatWeDo={whatWeDo} joinButton={joinCambridge} />
				<section className="partners page-container">
					<h2 className="customer-title text-center">Partners &amp; Supporters</h2>
					<div className="affiliations-section">
						<img
							src={`${baseURL}/cambridge/logos/cambridge-research.png`}
							alt="Cambridge research"
						/>
						<img src={`${baseURL}/cambridge/logos/milner.png`} alt="Milner" />
						<img src={`${baseURL}/cambridge/logos/maxwell.png`} alt="Maxwell" />
						<img src={`${baseURL}/cambridge/logos/cyhp.png`} alt="Cyhp" />
						<img src={`${baseURL}/cambridge/logos/ukri.png`} alt="Ukri" />
						<img
							src={`${baseURL}/cambridge/logos/cambridge-academy.png`}
							alt="Cambridge academy"
						/>
					</div>
				</section>
				<CustomerList content={ourCommunityTo} joinButton={joinCambridge} />
				<CustomerCommunities communities={stakeholdersPages.list} />
				<CustomerWhatWeDo whatWeDo={infoText} joinButton={joinCambridge} background />
				<section className="text-section">
					<div className="page-container">
						<p>
							As a member of the UEZ online community, you can connect and engage with
							other communities on the platform, many of which are working
							to promote innovation and are actively seeking collaborators.
						</p>
						{joinCambridge}
					</div>
				</section>
				<CambridgeFooter />
			</div>
		);
	}
}
