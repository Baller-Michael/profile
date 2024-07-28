import React from "react";
import {
  Link,
} from "react-router-dom";

export default function MyProfile() {
  const baseURL = import.meta.env.BASE_URL;
  return (
    <div className="my-profile">
      <section className="home" id="home">
        <div className="page-container">
          <div className="container">
            <div className="column about-me-column animated animatedFadeInUp fadeInUp">
              <h1 className="creator">Michael Pavelchuk</h1>
              <h3 className="job">Senior full stack developer</h3>
              <h4 className="stack">JavaScript | React | Node | Meteor</h4>
              <ul className="contacts">
                <li className="email">
                  {/* <i className="fas fa-envelope"></i> */}
                  <a href="">mihalu41998@gmail.com</a>
                </li>
                <li className="phone">
                  {/* <i className="fas fa-phone"></i> */}
                  <a href="">0637227709</a>
                </li>
                <li className="address">
                  {/* <i className="fas fa-map-marker-alt"></i> */}
                  <a href="">Lviv, Ukraine</a>
                </li>
              </ul>
              <ul className="socials">
                <li className="social">
                  <a href="" className="social-link">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="social">
                  <a href="" className="social-link">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="social">
                  <a href="" className="social-link">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li className="social">
                  <a href="" className="social-link">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="column my-photo">
              <img
                src={`${baseURL}/profile.png`}
                alt="Michael Pavelchuk"
                className="michael-photo-1"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="about-parallax"></div>
      <section className="about-me" id="about-me">
        <div className="page-container">
          <div className="img-container column">
            <img
              src={`${baseURL}/about-me.jpg`}
              alt="About me"
              className="about-me-img"
            />
          </div>
          <div className="about-me-column column">
            <h2>About me</h2>
            <p className="desription">
              I have over 4 years of experience in building and maintaining web
              applications. I have a strong background in code review,
              deployment processes, and collaborating with cross-functional
              teams to achieve project goals. I am good at team collaboration
              and value the exchange of knowledge, but at the same time, I am
              capable of independently solving problems and seeking innovative
              solutions to enhance work quality. Also I am good at
            </p>
            <ul className="knowledge">
              <li className="knowledge-item">HTML</li>
              <li className="knowledge-item">CSS</li>
              <li className="knowledge-item">JS</li>
              <li className="knowledge-item">React</li>
              <li className="knowledge-item">Meteor</li>
              <li className="knowledge-item">MongoDB</li>
              <li className="knowledge-item">Git</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="work-education"></div>
      <section className="experience" id="education">
        <div className="page-container">
          <div className="column education">
            <h3>Education</h3>
            <div className="study-card animated animatedFadeInUp fadeInUp">
              <h4 className="name">Yevshan</h4>
              <p className="year">2007-2012</p>
              <p className="desription">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum
              </p>
            </div>
            <div className="study-card animated animatedFadeInUp fadeInUp">
              <h4 className="name">College</h4>
              <p className="year">2012-2016</p>
              <p className="desription">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum
              </p>
            </div>
            <div className="study-card animated animatedFadeInUp fadeInUp">
              <h4 className="name">NULP</h4>
              <p className="year">2016-till today</p>
              <p className="desription">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum
              </p>
            </div>
          </div>
          <div className="column jobs">
            <h3>Work Experience</h3>
            <div className="study-card animated animatedFadeInUp fadeInUp">
              <h4 className="name">Tehno+</h4>
              <p className="year">2019-2020</p>
              <p className="desription">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum
              </p>
            </div>
            <div className="study-card animated animatedFadeInUp fadeInUp">
              <h4 className="name">KeenEthics</h4>
              <p className="year">2020-till today</p>
              <p className="desription">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio" id="portfolio">
        <div className="page-container">
          <h3>Portfolio</h3>
          <div className="my-works">
            {/* <div className="pages"><a href=""><img src="./public/cambridge.png" alt="cambridge"/></a>
                        <div className="hover-text">
                            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ullam et
                                cumque minima quasi modi ea, omnis porro, atque dicta quo libero, inventore eius aspernatur
                                corrupti. Maiores, aperiam. Sunt, asperiores.</p>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <button className="view-btn">View</button>
                            </a>
                        </div>
                    </div>
                    <div className="pages"><a href=""><img src="./public/gen.jpg" alt="gen"/></a>
                        <div className="hover-text">
                            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ullam et
                                cumque minima quasi modi ea, omnis porro, atque dicta quo libero, inventore eius aspernatur
                                corrupti. Maiores, aperiam. Sunt, asperiores.</p>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <button className="view-btn">View</button>
                            </a>
                        </div>
                    </div>
                    <div className="pages"><a href=""><img src="./public/wisconsin.png" alt="wisconsin"/></a>
                        <div className="hover-text">
                            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ullam et
                                cumque minima quasi modi ea, omnis porro, atque dicta quo libero, inventore eius aspernatur
                                corrupti. Maiores, aperiam. Sunt, asperiores.</p>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <button className="view-btn">View</button>
                            </a>
                        </div>
                    </div>  */}
            {/* <div className="work work-animation">
                        <img src="./public/gen.jpg" />
                        <div className="mask mask-1"></div>
                        <div className="mask mask-2"></div>
                        <div className="content">
                            <h2>GEN</h2>
                            <p>My first big project</p>
                            <a href="#" className="info">Read More</a>
                        </div>
                    </div> */}
            <div className="work work-animation">
              <img src={`${baseURL}/cambridge-logo.jpg`} />
              <div className="mask mask-1"></div>
              <div className="mask mask-2"></div>
              <div className="content">
                <h2>Cambridge</h2>
                <p></p>
                <Link to="/cam" className="info">
                  Read More
                </Link>
              </div>
            </div>
            <div className="work work-animation">
              <img src={`${baseURL}/wisconsin.png`} />
              <div className="mask mask-1"></div>
              <div className="mask mask-2"></div>
              <div className="content">
                <h2>Wisconsin</h2>
                <p></p>
                <Link to="/uwmadison-cals" className="info">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="hobbies">
            <div className="page-container">
                <h3>Hobbies</h3>
                <div className="hobby">
                    <div className="basketball">
                        <div className="ball"></div>
                    </div>
                    <div className="running">
                        <div className="img-wrap">
                            <img src="./public/running.png" alt="">
                        </div>
                    </div>
                    <div className="running"></div>
                </div>
            </div>
        </section> */}
      <footer>
        <div className="page-container">
          <p>&copy; Michael Pavelchuk 2024</p>
          <ul className="socials">
            <li className="social">
              <a href="" className="social-link">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="social">
              <a href="" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="social">
              <a href="" className="social-link">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="social">
              <a href="" className="social-link">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
