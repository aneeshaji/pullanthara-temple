import Link from "next/link"

export default function Footer1() {
    return (
        <>

            <footer className="footer-section">
                <div className="footer-widgets-wrapper footer-bg">
                    <div className="shape-1">
                        <img src="/assets/img/footer-shape-1.png" alt="shape-img" />
                    </div>
                    <div className="shape-2">
                        <img src="/assets/img/footer-shape-2.png" alt="shape-img" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <Link href="/">
                                            <img src="/assets/img/logo/logo-new.png" alt="logo-img" />
                                        </Link>
                                    </div>
                                    <div className="footer-content">
                                        <p>
                                        Pullanthara Sree Maha Ganapathy Temple is one of the famous temples in south india with great historical importance
                                        </p>
                                        <div className="social-icon d-flex align-items-center">
                                            <Link target="_blank" href="https://www.facebook.com/pullantharaganapathytemple/"><i className="fab fa-facebook-f" /></Link>
                                            <Link target="_blank" href="https://www.instagram.com/pullantharaganapathytemple/"><i className="fab fa-instagram" /></Link>
                                            {/* <Link href="#"><i className="fa-brands fa-linkedin-in" /></Link> */}
                                            <Link target="_blank" href="#"><i className="fa-brands fa-youtube" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".5s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>Quick Links</h3>
                                    </div>
                                    <ul className="list-area">
                                        <li>
                                            <Link href="/about">
                                                <i className="fa-solid fa-chevron-right" />
                                                About Temple
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service">
                                                <i className="fa-solid fa-chevron-right" />
                                                Offerings
                                            </Link>
                                        </li>
                                        {/* <li>
                                            <Link href="/news">
                                                <i className="fa-solid fa-chevron-right" />
                                                Our Blogs
                                            </Link>
                                        </li> */}
                                        {/* <li>
                                            <Link href="/faq">
                                                <i className="fa-solid fa-chevron-right" />
                                                FAQ’S
                                            </Link>
                                        </li> */}
                                        <li>
                                            <Link href="/contact">
                                                <i className="fa-solid fa-chevron-right" />
                                                Contact Us
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                <div className="single-footer-widget style-margin">
                                    <div className="widget-head">
                                        <h3>Recent Posts</h3>
                                    </div>
                                    <div className="recent-post-area">
                                        <div className="recent-post-items">
                                            <div className="thumb">
                                                <img src="/assets/img/news/pp1.jpg" alt="post-img" />
                                            </div>
                                            <div className="content">
                                                <ul className="post-date">
                                                    <li>
                                                        <i className="fa-solid fa-calendar-days me-2" />
                                                        20 Feb, 2024
                                                    </li>
                                                </ul>
                                                <h6>
                                                    <Link href="/news-details">
                                                        Top 5 Most Famous <br />
                                                        Technology Trend In 2024
                                                    </Link>
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="recent-post-items mb-0">
                                            <div className="thumb">
                                                <img src="/assets/img/news/pp2.jpg" alt="post-img" />
                                            </div>
                                            <div className="content">
                                                <ul className="post-date">
                                                    <li>
                                                        <i className="fa-solid fa-calendar-days me-2" />
                                                        15 Dec, 2024
                                                    </li>
                                                </ul>
                                                <h6>
                                                    <Link href="/news-details">
                                                        The Surfing Man Will Blow <br />
                                                        Your Mind
                                                    </Link>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="col-xl-4 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".9s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>Contact Us</h3>
                                    </div>
                                    <div className="footer-content">
                                        <ul className="contact-info">
                                            <li>
                                                <i className="fas fa-map-marker-alt" />
                                                Karunagappally, Kollam
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-phone-volume" />
                                                <Link href="/tel:+919400768558">+91-9400768558</Link>
                                            </li>
                                            <li>
                                                <i className="fa-regular fa-envelope" />
                                                <Link href="/mailto:infotech@gmail.com">enq@pullatharatemple.in</Link>
                                            </li>
                                        </ul>
                                        {/* <Link href="/contact" className="theme-btn hover-white mt-4">
                                            get A Quote
                                            <i className="fa-solid fa-arrow-right-long" />
                                        </Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-wrapper d-flex align-items-center justify-content-between">
                            <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
                                © All Copyright {new Date().getFullYear()} by <Link href="/">codeFirstIT</Link>
                            </p>
                            <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
                                <li>
                                    <Link href="/contact">
                                        Terms &amp; Condition
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link href="#" id="scrollUp" className="scroll-icon">
                        <i className="far fa-arrow-up" />
                    </Link>
                </div>
            </footer>

        </>
    )
}
