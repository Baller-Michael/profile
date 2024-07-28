import React, { Component } from 'react';
import CustomerCommunities from '../CustomerCommunities.jsx';
import CustomerList from '../CustomerList.jsx';
import CustomerWhatWeDo from '../CustomerWhatWeDo.jsx';
import WisconsinFooter2 from './WisconsinFooter2.jsx';

import {
	description,
	ourCommunityTo,
	stakeholdersPages,
	topSection,
	whatWeDo,
} from './wisconsin-content';

export default class WisconsinLandingPage extends Component {
	constructor(props) {
		super(props);
		document.title = 'Wisconsin';
	}

	render() {

		const { title, titleDescription } = topSection;
		const baseURL = import.meta.env.BASE_URL;

		const joinWisconsin = null;

		return (
			<div className="wisconsin-page">
				{/* <CusomerHeader
					logoSrc={logoSrc}
					btnClass={winsconsinBtnClass}
					mainLink={mainLink}
					entityToJoin={entityToJoin}
					mobileLogoSrc={mobileLogoSrc}
				/> */}
				<section
					className="top-section"
					style={{
						background: `url(${baseURL}/wisconsin/wisconsin-banner.jpg) center no-repeat`,
						backgroundSize: 'cover',
					}}
				>
					<div className="page-container">
						<h1 className="top-title">{title}</h1>
						<p className="top-description">{titleDescription}</p>
					</div>
				</section>
				<section className="text-section">
					<div className="page-container">
						{description.map(text => (
							<p>{text}</p>
						))}
					</div>
				</section>
				<CustomerWhatWeDo whatWeDo={whatWeDo} joinButton={joinWisconsin} />
				<CustomerList content={ourCommunityTo} joinButton={joinWisconsin} />
				<CustomerCommunities communities={stakeholdersPages.list} />
				<WisconsinFooter2 />
			</div>
		);
	}
}
