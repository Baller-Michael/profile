import { useEffect } from 'react';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import CusomerHeader from '../CustomerHeader.jsx';
import CustomerList from '../CustomerList.jsx';
// import AccordionSection from '../../../components/accordion/AccordionSection.jsx';
// import WisconsinFooter from './WisconsinFooter.jsx';
import WisconsinStakeholderTopSection from './WisconsinStakeholderTopSection.jsx';
import WisconsinFooter2 from './WisconsinFooter2.jsx';
import {
	stakeholdersPagesContent,
	stakeholdersPages,
	faqs,
	keyFeatures,
} from './wisconsin-content';
// import JoinNowButton from '../../../components/join-now-button/JoinNowButton.jsx';

export default function WisconsinStakeholderPages() {
	const location = useLocation();
	const { activePage } = useParams();
	const activePageContent = stakeholdersPagesContent[activePage];

	useEffect(() => {
		document.title = `${activePageContent.title}`;
		window.scrollTo(0, 0)
	}, [activePage]);

	if (!activePageContent) {
		return <Navigate to="/uwmadison-cals" replace />;
	}

	const entityToJoin = {
		title: 'UW-Madison, CALS',
		_id: 'oSAHt3WbgvTcD6Z86',
		entityType: 'page',
	};

	const logoSrc = 'src/wisconsin/wisconsin-logo.png';
	const mobileLogoSrc = 'src/wisconsin/mobile-wisconsin-logo.png';
	const winsconsinBtnClass = 'wisconsin-feature-red';
	const stakeholderTitleClass = 'stakeholder-title';
	const mainLink = '/uwmadison-cals';

	const {
		title,
		topSectionDescription,
		howWeSupport,
		howWeSupportTitle,
		quickFacts,
		quickFactsTitle,
		offer,
	} = activePageContent;

	const userId = null;
	const staticSrcPrefix = null;

	const joinWisconsin = null;

	const joinWisconsinCommunity = null;
	const baseURL = import.meta.env.BASE_URL;

	return (
		<div className="wisconsin-page">
			{/* <CusomerHeader
				logoSrc={logoSrc}
				btnClass={winsconsinBtnClass}
				mainLink={mainLink}
				entityToJoin={entityToJoin}
				mobileLogoSrc={mobileLogoSrc}
			/> */}
			<img
				className={`landing-banner ${userId ? '' : '-not-logged-in'}`}
				src={`${baseURL}/wisconsin/stakeholders/banners/${activePage}-banner.jpg`}
				alt={activePage}
			/>
			<WisconsinStakeholderTopSection
				title={title}
				topSectionDescription={topSectionDescription}
				quickFacts={quickFacts}
				joinButton={joinWisconsinCommunity}
				offer={offer}
				quickFactsTitle={quickFactsTitle}
			/>
			<CustomerList
				content={{
					title: `How we support ${howWeSupportTitle}`,
					list: howWeSupport,
				}}
				joinButton={joinWisconsin}
			/>

			{/* <section className="communities customer-key-features">
				<h2 className="customer-title">Key features</h2>
				<AccordionSection
					content={keyFeatures}
					activePage={activePage}
					location={location}
				/>
				<div className="text-center">{joinWisconsin}</div>
			</section> */}
			{/* <section className="communities customer-faqs ">
				<div className="page-container">
					<h2 className="title">FAQs</h2>
					<AccordionSection content={faqs} />
				</div>
			</section> */}
			<CustomerList
				content={stakeholdersPages}
				activePage={`/uwmadison-cals/${activePage}`}
				stakeholderTitleClass={stakeholderTitleClass}
			/>
			{/* <WisconsinFooter /> */}
			<WisconsinFooter2 />
		</div>
	);
}
