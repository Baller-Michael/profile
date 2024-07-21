import { PureComponent } from 'react';

export default class CambridgeFooter extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			isMobileView: window.innerWidth <= 800,
		};
		this.handleResize = this.handleResize.bind(this);
	}

	componentDidMount() {
		window.addEventListener('resize', this.handleResize);
	}

	handleResize() {
		const { isMobileView } = this.state;
		if (window.innerWidth <= 800 && !isMobileView) {
			this.setState({ isMobileView: true });
		} else if (window.innerWidth > 800 && isMobileView) {
			this.setState({ isMobileView: false });
		}
	}

	render() {
		const { isMobileView } = this.state;
		const staticSrcPrefix = null;
		return (
			<footer className="cambridge-footer">
				{!isMobileView ? (
					<div className="page-container">
						<div className="cam-content-container cam-footer-logo">
							<a
								href="https://www.cam.ac.uk"
								target="_blank"
								rel="nofollow noopener noreferrer"
							>
								<img
									className="cam-logo"
									src="https://www.cam.ac.uk/sites/www.cam.ac.uk/files/logo.png"
									alt="Cambridge University"
								/>
							</a>{' '}
							<p> © 2020 University of Cambridge</p>
							<ul className="cam-unstyled-list cam-global-footer-links">
								<li>
									<a
										href="mailto:uez@maxwell.cam.ac.uk"
										target="_blank"
										rel="nofollow noopener noreferrer"
										className="menu__link"
									>
										Contact The University Entreprise Zone
									</a>
								</li>
								<li>
									<a
										href="https://www.cam.ac.uk/about-the-university/contact-the-university?ucam-ref=global-footer"
										target="_blank"
										rel="nofollow noopener noreferrer"
										className="menu__link"
									>
										Contact the University
									</a>
								</li>
								<li>
									<a
										href="https://www.cam.ac.uk/about-this-site/accessibility?ucam-ref=global-footer"
										target="_blank"
										rel="nofollow noopener noreferrer"
										className="menu__link"
									>
										Accessibility
									</a>
								</li>
								<li>
									<a
										href="http://www.information-compliance.admin.cam.ac.uk/foi"
										target="_blank"
										rel="nofollow noopener noreferrer"
										className="menu__link"
									>
										Freedom of information
									</a>
								</li>
								<li>
									<a
										href="http://www.registrarysoffice.admin.cam.ac.uk/governance-and-strategy/anti-slavery-and-anti-trafficking"
										target="_blank"
										rel="nofollow noopener noreferrer"
										title="Modern Slavery Act Transparency Statement"
										className="menu__link"
									>
										Statement on Modern Slavery
									</a>
								</li>
								<li>
									<a
										href="https://www.cam.ac.uk/about-this-site/terms-and-conditions?ucam-ref=global-footer"
										target="_blank"
										rel="nofollow noopener noreferrer"
										className="menu__link"
									>
										Terms and conditions
									</a>
								</li>
								<li>
									<a
										href="https://www.cam.ac.uk/university-a-z?ucam-ref=global-footer"
										target="_blank"
										rel="nofollow noopener noreferrer"
										className="menu__link"
									>
										University A-Z
									</a>
								</li>
							</ul>
						</div>
						<div className="link-list border-left">
							<h3>
								<a
									href="https://www.cam.ac.uk/study-at-cambridge?ucam-ref=global-footer"
									target="_blank"
									rel="nofollow noopener noreferrer"
									className="menu__link"
								>
									Study at Cambridge
								</a>
							</h3>
							<ul className="cam-unstyled-list menu">
								<li>
									<a
										href="http://www.study.cam.ac.uk/undergraduate/?ucam-ref=global-footer"
										target="_blank"
										rel="nofollow noopener noreferrer"
										className="menu__link"
									>
										Undergraduate
									</a>
								</li>
								<li>
									<a
										href="http://www.graduate.study.cam.ac.uk/?ucam-ref=global-footer"
										target="_blank"
										rel="nofollow noopener noreferrer"
										className="menu__link"
									>
										Postgraduate
									</a>
								</li>
								<li>
									<a
										href="http://www.ice.cam.ac.uk/?ucam-ref=global-footer"
										target="_blank"
										rel="nofollow noopener noreferrer"
										className="menu__link"
									>
										Continuing education
									</a>
								</li>
								<li>
									<a
										href="http://www.epe.admin.cam.ac.uk/?ucam-ref=global-footer"
										target="_blank"
										rel="nofollow noopener noreferrer"
										className="menu__link"
									>
										Executive and professional education
									</a>
								</li>
								<li>
									<a
										href="http://www.educ.cam.ac.uk/?ucam-ref=global-footer"
										target="_blank"
										rel="nofollow noopener noreferrer"
										className="menu__link"
									>
										Courses in education
									</a>
								</li>
							</ul>
						</div>
						<div className="link-list">
							<h3>
								<a
									href="https://www.cam.ac.uk/about-the-university?ucam-ref=global-footer"
									target="_blank"
									rel="nofollow noopener noreferrer"
									className="menu__link"
								>
									About the University
								</a>
							</h3>
							<ul className="cam-unstyled-list menu">
								<li>
									<a
										href="https://www.cam.ac.uk/about-the-university/how-the-university-and-colleges-work?ucam-ref=global-footer"
										target="_blank"
										rel="nofollow noopener noreferrer"
										className="menu__link"
									>
										How the University and Colleges work
									</a>
								</li>
								<li>
									<a
										href="https://www.cam.ac.uk/about-the-university/visiting-the-university?ucam-ref=global-footer"
										target="_blank"
										rel="nofollow noopener noreferrer"
										className="menu__link"
									>
										Visiting the University
									</a>
								</li>
								<li>
									<a
										href="http://map.cam.ac.uk?ucam-ref=global-footer"
										target="_blank"
										rel="nofollow noopener noreferrer"
										className="menu__link"
									>
										Maps
									</a>
								</li>
								<li>
									<a
										href="/news?ucam-ref=global-footer"
										target="_blank"
										rel="nofollow noopener noreferrer"
										className="menu__link"
									>
										News
									</a>
								</li>
								<li>
									<a
										href="http://www.jobs.cam.ac.uk"
										target="_blank"
										rel="nofollow noopener noreferrer"
										className="menu__link"
									>
										Jobs
									</a>
								</li>
								<li>
									<a
										href="https://www.philanthropy.cam.ac.uk/give-now?ucam-ref=global-footer"
										target="_blank"
										rel="nofollow noopener noreferrer"
										className="menu__link"
									>
										Give to Cambridge
									</a>
								</li>
							</ul>
						</div>
						<div className="link-list border-left">
							<h3>
								<a
									href="https://www.cam.ac.uk/research?ucam-ref=global-footer"
									target="_blank"
									rel="nofollow noopener noreferrer"
									className="menu__link"
								>
									Research at Cambridge
								</a>
							</h3>
							<ul className="cam-unstyled-list menu">
								<li>
									<a
										href="https://www.cam.ac.uk/research/news?ucam-ref=global-footer"
										target="_blank"
										rel="nofollow noopener noreferrer"
										className="menu__link"
									>
										Research news
									</a>
								</li>
								<li>
									<a
										href="https://www.cam.ac.uk/research/spotlight-on?ucam-ref=global-footer"
										target="_blank"
										rel="nofollow noopener noreferrer"
										className="menu__link"
									>
										Spotlight on...
									</a>
								</li>
								<li>
									<a
										href="https://www.cam.ac.uk/research/research-at-cambridge?ucam-ref=global-footer"
										target="_blank"
										rel="nofollow noopener noreferrer"
										className="menu__link"
									>
										About research at Cambridge
									</a>
								</li>
							</ul>
						</div>
					</div>
				) : (
					<div className="page-container">
						<div className="cam-content-container cam-footer-logo">
							<a
								href="https://www.cam.ac.uk"
								target="_blank"
								rel="nofollow noopener noreferrer"
							>
								<img
									className="cam-logo"
									src="https://www.cam.ac.uk/sites/www.cam.ac.uk/files/logo.png"
									width="178"
									alt="Cambridge University"
								/>
							</a>{' '}
							<p> © 2020 University of Cambridge</p>
							<ul className="cam-unstyled-list cam-global-footer-links">
								<li>
									<a
										href="https://www.cam.ac.uk/about-the-university/contact-the-university?ucam-ref=global-footer"
										target="_blank"
										rel="nofollow noopener noreferrer"
										className="menu__link"
									>
										Contact The University Entreprise Zone
									</a>
								</li>
								<li>
									<a
										href="https://www.cam.ac.uk/about-the-university/contact-the-university?ucam-ref=global-footer"
										target="_blank"
										rel="nofollow noopener noreferrer"
										className="menu__link"
									>
										Contact the University
									</a>
								</li>
								<li>
									<a
										href="https://www.cam.ac.uk/about-this-site/accessibility?ucam-ref=global-footer"
										target="_blank"
										rel="nofollow noopener noreferrer"
										className="menu__link"
									>
										Accessibility
									</a>
								</li>
								<li>
									<a
										href="http://www.information-compliance.admin.cam.ac.uk/foi"
										target="_blank"
										rel="nofollow noopener noreferrer"
										className="menu__link"
									>
										Freedom of information
									</a>
								</li>
								<li>
									<a
										href="http://www.registrarysoffice.admin.cam.ac.uk/governance-and-strategy/anti-slavery-and-anti-trafficking"
										target="_blank"
										rel="nofollow noopener noreferrer"
										title="Modern Slavery Act Transparency Statement"
										className="menu__link"
									>
										Statement on Modern Slavery
									</a>
								</li>
								<li>
									<a
										href="https://www.cam.ac.uk/about-this-site/terms-and-conditions?ucam-ref=global-footer"
										target="_blank"
										rel="nofollow noopener noreferrer"
										className="menu__link"
									>
										Terms and conditions
									</a>
								</li>
								<li>
									<a
										href="https://www.cam.ac.uk/university-a-z?ucam-ref=global-footer"
										target="_blank"
										rel="nofollow noopener noreferrer"
										className="menu__link"
									>
										University A-Z
									</a>
								</li>
							</ul>
						</div>
						<div className="link-list">
							<h3>
								<a
									href="https://www.cam.ac.uk/study-at-cambridge?ucam-ref=global-footer"
									target="_blank"
									rel="nofollow noopener noreferrer"
									className="menu__link is-active-trail active-trail active"
								>
									Study at Cambridge
								</a>
							</h3>
						</div>
						<div className="link-list">
							<h3>
								<a
									href="https://www.cam.ac.uk/about-the-university?ucam-ref=global-footer"
									target="_blank"
									rel="nofollow noopener noreferrer"
									className="menu__link"
								>
									About the University
								</a>
							</h3>
						</div>
						<div className="link-list">
							<h3>
								<a
									href="https://www.cam.ac.uk/research?ucam-ref=global-footer"
									target="_blank"
									rel="nofollow noopener noreferrer"
									className="menu__link"
								>
									Research at Cambridge
								</a>
							</h3>
						</div>
					</div>
				)}
			</footer>
		);
	}
}
