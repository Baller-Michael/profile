import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function CustomerCommunities({ activeCommunity, communities }) {
	const staticSrcPrefix = null;
	return (
		<section className="customer-communities">
				<div className="page-container">
					<h2 className="customer-title">
						Discover our community
					</h2>
					<ul className="customer-communities--list">
						{communities.map(community => {
							if (activeCommunity && activeCommunity === community.title) return null;
							return (
								<li
									className="customer-communities--item"
									key={community.title}
								>
									<figure className="customer-communities--figure">
										<img
											src={`src/${community.imgSrc}`}
											alt={community.title}
										/>
										<figcaption className="customer-communities--figcaption">
											<h3>{community.title}</h3>
											<Link to={community.linkTo}>
												<Button className="btn-purple">View</Button>
											</Link>
										</figcaption>
									</figure>
								</li>
							);
						})}
					</ul>
				</div>
		</section>
	);
}