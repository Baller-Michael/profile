import React, { Component, Fragment } from 'react';

export default class WisconsinFooter2 extends Component {
	static createSocialButton(icon) {
		const { title, iconClassName, href } = icon;
		return (
			<li className="footer__social-item" key={title}>
				<a href={href} target="_blank" title={title} rel="nofollow noopener noreferrer">
					<i className={`fa fa-fw ${iconClassName}`} />
				</a>
			</li>
		);
	}

	static createLinksColumn(link) {
		const { title, href } = link;

		return (
			<li className="footer__links-item" key={title}>
				<a href={href} target="_blank" title={title} rel="nofollow noopener noreferrer">
					{title}
				</a>
			</li>
		);
	}

	render() {
		this.socialIcons = [
			{
				title: 'Twitter',
				iconClassName: 'fa-twitter',
				href: 'https://twitter.com/UMarkUW',
			},
			{
				title: 'Facebook',
				iconClassName: 'fa-facebook',
				href: 'https://www.facebook.com/UWMadison/',
			},
			{
				title: 'Flickr',
				iconClassName: 'fa-flickr',
				href: 'https://www.flickr.com/photos/uwmadisoncals/albums',
			},
			{
				title: 'Instagram',
				iconClassName: 'fa-instagram',
				href: 'https://www.instagram.com/uwmadison/',
			},
			{
				title: 'LinkedIn',
				iconClassName: 'fa-linkedin',
				href: 'https://www.linkedin.com/groups/5062996/profile',
			},
			{
				title: 'Youtube',
				iconClassName: 'fa-youtube-play',
				href: 'https://youtube.com/uwmadison',
			},
		];

		this.quickLinks = [
			{
				title: 'Diversity & Inclusion',
				href: 'https://cals.wisc.edu/about-cals/initiatives/inclusivecommunity/',
			},
			{
				title: 'Jobs at CALS',
				href:
					'http://jobs.hr.wisc.edu/cw/en-us/search/?job-mail-subscribe-privacy=agree&search-keyword=cals',
			},
			{
				title: 'Academic Policies & Forms',
				href:
					'https://cals.wisc.edu/academics/undergraduate-students/academic-policies-forms/',
			},
			{
				title: 'Contact Us',
				href: 'https://cals.wisc.edu/contact-us/',
			},
		];

		this.contact = [
			'1450 Linden Drive',
			'Madison, WI 53706',
			'Phone: 608.262.1251',
			<Fragment>
				Email:{' '}
				<a
					href="mailto:info@cals.wisc.edu"
					target="_blank"
					rel="nofollow noopener noreferrer"
				>
					info@cals.wisc.edu
				</a>
			</Fragment>,
			<Fragment>
				<a
					href="https://cals.wisc.edu/about-cals/visit-cals/"
					target="_blank"
					rel="nofollow noopener noreferrer"
				>
					Plan a Visit
				</a>
			</Fragment>,
		];

		return (
			<div className="wisconsin-footer2">
				<div className="footer__social">
					<a
						href="http://www.wisconsin.edu/"
						target="_blank"
						rel="nofollow noopener noreferrer"
						className="copyright"
					>
						&copy;2020 Board of Regents of the University of Wisconsin System
					</a>
				</div>
			</div>
		);
	}
}
