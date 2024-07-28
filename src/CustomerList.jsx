import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function CustomerList({
	content: { title, list },
	joinButton,
	stakeholderTitleClass,
	activePage,
	btnName,
}) {
	const staticSrcPrefix = null;
	const baseURL = import.meta.env.BASE_URL;
	return (
		<section className="communities">
				<div className="page-container">
					<h2 className="customer-title">{title}</h2>
					<div
						className={`communities-list${
							activePage ? ' -small-items' : ''
						} communities-${list.length}`}
					>
						{list.map(community => {
							if (activePage && community.linkTo && activePage === community.linkTo) {
								return null;
							}
							return (
								<div className="circle-columns" key={community.title}>
									<div className="circle-column">
										<div className="circle-wrap">
											<div className="circle">
												<img
													src={`${baseURL}/${community.imgSrc}`}
													alt={community.title}
												/>
											</div>
										</div>
									</div>
									<h3 className={`${stakeholderTitleClass || 'community-title'}`}>
										{community.title}
									</h3>
									{community.description && (
										<p className={`descr images-descr-${list.length}`}>
											{community.description}
										</p>
									)}
									{community.linkTo && (
										<Link to={community.linkTo}>
											<Button className="view-button">
												{btnName || 'View'}
											</Button>
										</Link>
									)}
								</div>
							);
						})}
					</div>
					{joinButton && <div className="link-to-join">{joinButton}</div>}
				</div>
		</section>
	);
}
CustomerList.propTypes = {
	activePage: PropTypes.string,
};
CustomerList.defaultProps = {
	activePage: '',
};
