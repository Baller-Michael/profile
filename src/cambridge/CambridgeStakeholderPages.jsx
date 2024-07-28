import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import CustomerList from '../CustomerList.jsx';
// import AccordionSection from '../AccordionSection.jsx';
import WisconsinStakeholderTopSection from '../wisconsin/WisconsinStakeholderTopSection.jsx';
import CambridgeFooter from './CambridgeFooter.jsx';
import { stakeholdersPages, stakeholdersPagesContent } from './cambridge-content';

export default function CambridgeStakeholderPages() {
	const { activePage } = useParams();
	const activePageContent = stakeholdersPagesContent[activePage];

	useEffect(() => {
		document.title = `${activePageContent.title}`;
		window.scrollTo(0, 0);
	}, [activePage]);

	const userId = null;
	const stakeholderTitleClass = 'stakeholder-title';

	const {
		title,
		topSectionDescription,
		howWeSupport,
		howWeSupportTitle,
		quickFacts,
		quickFactsTitle,
		offer,
	} = activePageContent;

	if (!activePageContent) return null;
	const joinCambridge = (
		null
	);

	const cambridgeLearnMore = (
		<Link to='/' className="learn-more-btn">
			<Button className="btn-red-border" variant="default">
				Learn more
			</Button>
		</Link>
	);

	const baseURL = import.meta.env.BASE_URL;
	return (
		<div className="cambridge-stakeholder-page cambridge-page wisconsin-page ">
			{/* <CusomerHeader
				logoSrc={logoSrc}
				btnClass={cambridgeBtnClass}
				mainLink={mainLink}
				entityToJoin={entityToJoin}
				mobileLogoSrc={mobileLogoSrc}
			/> */}
			<img
				className={`landing-banner ${userId ? '' : '-not-logged-in'}`}
				src={`${baseURL}/cambridge/stakeholders/${activePage}/${activePage}-header.jpg`}
				alt={activePage}
			/>
			<WisconsinStakeholderTopSection
				title={title}
				topSectionDescription={topSectionDescription}
				quickFacts={quickFacts}
				joinButton={joinCambridge}
				offer={offer}
				quickFactsTitle={quickFactsTitle}
				learnMore={cambridgeLearnMore}
			/>
			<CustomerList
				content={{
					title: howWeSupportTitle,
					list: howWeSupport,
				}}
				joinButton={joinCambridge}
			/>
			{/* <section className="communities customer-key-features">
				<div className="page-container">
					<h2 className="title">Key features</h2>
					<AccordionSection content={keyFeatures} />
				</div>
			</section> */}
			<section className="text-section">
				<div className="page-container">
					<p>
						As a member of the UEZ online community, you can connect and engage with
						other communities on the platform, many of which are working to
						promote innovation and are actively seeking collaborators.
					</p>
					{joinCambridge}
				</div>
			</section>
			<CustomerList
				content={stakeholdersPages}
				activePage={`/cam/${activePage}`}
				stakeholderTitleClass={stakeholderTitleClass}
			/>
			<CambridgeFooter />
		</div>
	);
}
