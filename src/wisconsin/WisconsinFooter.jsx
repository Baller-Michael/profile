
import React, { Component } from 'react';

export default class WisconsinFooter extends Component {
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

	constructor(props) {
		super(props);

		this.socialIcons = [
			{
				title: 'Facebook',
				iconClassName: 'fa-facebook',
				href: 'https://www.facebook.com/UWMadison/',
			},
			{
				title: 'Linkedin',
				iconClassName: 'fa-linkedin',
				href: 'https://www.linkedin.com/school/uwmadison/',
			},
			{
				title: 'Twitter',
				iconClassName: 'fa-twitter',
				href: 'https://twitter.com/UMarkUW',
			},
			{
				title: 'Instagram',
				iconClassName: 'fa-instagram',
				href: 'https://www.instagram.com/uwmadison/',
			},
			{
				title: 'Youtube',
				iconClassName: 'fa-youtube-play',
				href: 'https://youtube.com/uwmadison',
			},
		];
	}

	render() {
		const staticSrcPrefix = null;

		return (
			<footer id="wisconsin-footer">
				<div className="container">
					<div id="uw-footer-link-o-rama" className="uw-full-row">
						<div className="uw-row uw-row-1200">
							<h2>Footer links</h2>
							<div>
								<h3>Popular</h3>
								<ul>
									<li>
										<a
											href="https://secfac.wisc.edu/academic-calendar/"
											target="_blank"
											rel="nofollow noopener noreferrer"
										>
											Academic Calendar
										</a>
									</li>
									<li>
										<a
											href="https://bursar.wisc.edu/tuition-and-fees"
											target="_blank"
											rel="nofollow noopener noreferrer"
										>
											Tuition and Fees
										</a>
									</li>
									<li>
										<a
											href="academics/index.html"
											target="_blank"
											rel="nofollow noopener noreferrer"
										>
											Majors, Minors &amp; Certificates
										</a>
									</li>
									<li>
										<a
											href="https://map.wisc.edu/"
											target="_blank"
											rel="nofollow noopener noreferrer"
										>
											Campus Map
										</a>
									</li>
									<li>
										<a
											href="about/facts/index.html"
											target="_blank"
											rel="nofollow noopener noreferrer"
										>
											Facts &amp; Figures
										</a>
									</li>
									<li>
										<a
											href="directories/index.html"
											target="_blank"
											rel="nofollow noopener noreferrer"
										>
											Directory Search
										</a>
									</li>
									<li>
										<a
											href="https://sis.wisc.edu/"
											target="_blank"
											rel="nofollow noopener noreferrer"
										>
											Student Information Systems
										</a>
									</li>
								</ul>
							</div>
							<div>
								<h3>Resources</h3>
								<ul>
									<li>
										<a
											href="https://students.wisc.edu/"
											target="_blank"
											rel="nofollow noopener noreferrer"
										>
											Students
										</a>
									</li>
									<li>
										<a
											href="https://parent.wisc.edu/"
											target="_blank"
											rel="nofollow noopener noreferrer"
										>
											Parents
										</a>
									</li>
									<li>
										<a
											href="https://working.wisc.edu/"
											target="_blank"
											rel="nofollow noopener noreferrer"
										>
											Faculty &amp; Staff
										</a>
									</li>
									<li>
										<a href="https://www.uwalumni.com/">Alumni</a>
									</li>
									<li>
										<a
											href="https://internationalresources.wisc.edu/"
											target="_blank"
											rel="nofollow noopener noreferrer"
										>
											International
										</a>
									</li>
									<li>
										<a
											href="https://obe.wisc.edu/"
											target="_blank"
											rel="nofollow noopener noreferrer"
										>
											Business &amp; Industry
										</a>
									</li>
								</ul>
							</div>
							<div>
								<h3>Quick Links</h3>
								<ul>
									<li>
										<a
											href="accessibility/index.html"
											target="_blank"
											rel="nofollow noopener noreferrer"
										>
											Accessibility
										</a>
									</li>
									<li>
										<a
											href="https://diversity.wisc.edu/"
											target="_blank"
											rel="nofollow noopener noreferrer"
										>
											Diversity
										</a>
									</li>
									<li>
										<a
											href="governance/index.html"
											target="_blank"
											rel="nofollow noopener noreferrer"
										>
											Governance
										</a>
									</li>
									<li>
										<a
											href="policies/index.html"
											target="_blank"
											rel="nofollow noopener noreferrer"
										>
											Policies
										</a>
									</li>
									<li>
										<a
											href="https://uwpd.wisc.edu/"
											target="_blank"
											rel="nofollow noopener noreferrer"
										>
											Safety
										</a>
									</li>
									<li>
										<a
											href="https://compliance.wisc.edu/titleix/"
											target="_blank"
											rel="nofollow noopener noreferrer"
										>
											Title IX
										</a>
									</li>
									<li>
										<a
											href="https://www.supportuw.org/"
											target="_blank"
											rel="nofollow noopener noreferrer"
										>
											Support UW
										</a>
									</li>
								</ul>
							</div>
							<div id="uw-footer-crest-and-wordmark">
								<a href="index.html" aria-label="Link to main university website">
									<img
										className="footer-logo"
										src={`${staticSrcPrefix}/wisconsin/footer-logo.png`}
										alt=""
									/>
								</a>
								<h3 id="uw-footer-contact-us">
									<a href="contact-us/index.html">
										<i className="fa fa-fw fa-envelope" />
										Contact Us
									</a>
								</h3>
								<ul className="footer__social-list">
									{this.socialIcons.map(icon =>
										WisconsinFooter.createSocialButton(icon)
									)}
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div id="uw-footer-notices">
					<p className="uw-full-row">
						<span id="uw-footer-copyright">
							&copy;2024 Board of Regents of{' '}
							<span id="uw-footer-divider-tiny">
								<br />
							</span>
							the University of Wisconsin System
							<span id="uw-footer-divider">
								<br />
							</span>
						</span>
						<span className="uw-footer-joiner">|</span>{' '}
						<span id="uw-footer-privacy">
							<a href="privacy-notice/index.html">Privacy Notice</a>
						</span>{' '}
						<span className="uw-footer-joiner">|</span>{' '}
						<span id="uw-footer-accessibility">
							Feedback,&nbsp;questions&nbsp;or accessibility&nbsp;issues:&nbsp;
							<a
								href="mailto:web@umark.wisc.edu"
								target="_blank"
								rel="nofollow noopener noreferrer"
							>
								web@umark.wisc.edu
							</a>
						</span>
					</p>
				</div>
			</footer>
		);
	}
}
