import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function CustomerHeader({
	logoSrc,
	btnClass,
	mainLink,
	entityToJoin,
	mobileLogoSrc,
	communityLink,
}) {
	const [headerWithBoxShadow, setHeaderWithBoxShadow] = useState(false);
	const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 550);

	const handleResize = () => {
		if (window.innerWidth <= 550 && !isMobileView) {
			setIsMobileView(true);
		} else if (window.innerWidth > 550 && isMobileView) {
			setIsMobileView(false);
		}
	};

	const styleHeaderOnScroll = () => {
		const userId = null;
		if (userId) return;
		const showBoxShadow = window.pageYOffset > 0;
		if (showBoxShadow !== headerWithBoxShadow) {
			setHeaderWithBoxShadow(showBoxShadow);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', styleHeaderOnScroll);
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('scroll', styleHeaderOnScroll);
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const showLogin = tab => {return null
	};

	const userId = null;
	const staticSrcPrefix = null;

	return (
		<header
			className={`gen-header${userId ? '' : ' -logged-out'} ${
				headerWithBoxShadow ? 'header-shadow' : ''
			}`}
		>
			<div className="page-container">
				<Link to={mainLink}>
					<img
						src={`src/${
							mobileLogoSrc && isMobileView ? mobileLogoSrc : logoSrc
						}`}
						alt=""
						className="header-logo"
					/>
				</Link>
			</div>
		</header>
	);
}
