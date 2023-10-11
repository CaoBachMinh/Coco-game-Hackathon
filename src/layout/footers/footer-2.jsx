import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../contexts/mouse-move-context';
import FooterSocial from './component/footer-social';

const footer_contents = {
    desc: 'Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor incidid unt labore dolore.',
    add: 'Danang',
    call: '+01 123 5641 231',
    email: 'info@coco-game.com',
    widgets: [
        {
            col: '3',
            class: 'explore-widget',
            widget_title: 'Online Platform',
            footer_links: [
                { link: '', title: 'About' },
                { link: '', title: 'Courses' },
            ]
        },
        {
            col: '2',
            class: 'quick-link-widget',
            widget_title: 'Links',
            footer_links: [
                { link: '', title: 'Contact Us' },
                { link: '', title: 'Gallery' },
            ]
        }
    ]
}

const { add, call, desc, email, widgets } = footer_contents;

const FooterTwo = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <footer className="edu-footer footer-light footer-for-kitchen footer-style-4">
            <div className="footer-top">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <div className="edu-footer-widget">
                                <h4 className="widget-title">Address</h4>
                                <div className="inner">
                                    <p className="description">{desc}</p>
                                    <div className="widget-information">
                                        <ul className="information-list">
                                            <li><span>Add:</span>{add}</li>
                                            <li><span>Call:</span><a href="tel:+011235641231">{call}</a></li>
                                            <li><span>Email:</span><a href="mailto:info@coco-game.com"
                                            target="_blank" rel="noreferrer">{email}</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {widgets.map((w, i) => (
                            <div key={i} className={`col-lg-${w.col} col-sm-6`}>
                                <div className={`edu-footer-widget ${w.class}`}>
                                    <h4 className="widget-title">{w.widget_title}</h4>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            {w.footer_links.map((l, i) => <li key={i}>
                                            <Link href={`/${l.link}`}><a>{l.title}</a></Link>
                                            </li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="col-lg-4 col-md-6">
                            <div className="edu-footer-widget">
                                <h4 className="widget-title">Contacts</h4>
                                <div className="inner">
                                    <p className="description">Enter your email address to register to our newsletter subscription</p>
                                    <div className="input-group footer-subscription-form">
                                        <input type="email" className="form-control" placeholder="Your email" />
                                        <button className="edu-btn btn-medium" type="button">Subscribe <i className="icon-4"></i></button>
                                    </div>
                                    <ul className="social-share icon-transparent">
                                        <FooterSocial />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="shape-group">
                    <motion.li className="shape-1 scene" data-sal-delay="100" data-sal="fade" data-sal-duration="1000"
                        animate={ {
                            x: mouseDirection(30).x,
                            y: mouseDirection(30).y
                        } }
                    >
                        <img src="/assets/images/others/shape-01-01.png" alt="shape" />
                    </motion.li>
                    <motion.li className="shape-2 scene" data-sal-delay="100" data-sal="fade" data-sal-duration="1000"
                        animate={ {
                            x: mouseReverse(30).x,
                            y: mouseReverse(30).y
                        } }
                    >
                        <img src="/assets/images/others/shape-02-01.png" alt="shape" />
                    </motion.li>
                    <li className="shape-3" data-sal-delay="100" data-sal="fade" data-sal-duration="1000">
                        <img src="/assets/images/others/shape-03-01.png" alt="shape" />
                    </li>
                    <motion.li className="shape-4 scene" data-sal-delay="100" data-sal="fade" data-sal-duration="1000"
                        animate={ {
                            x: mouseDirection(30).x,
                            y: mouseDirection(30).y
                        } }
                    >
                        <img src="/assets/images/others/shape-04-01.png" alt="shape" />
                    </motion.li>
                    <motion.li className="shape-5 scene" data-sal-delay="100" data-sal="fade" data-sal-duration="1000"
                        animate={ {
                            x: mouseReverse(30).x,
                            y: mouseReverse(30).y
                        } }
                    >
                        <img src="/assets/images/others/shape-05-01.png" alt="shape" />
                    </motion.li>
                </ul>
            </div>
            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner text-center">
                                <p>Copyright {new Date().getFullYear()} <a href="#" rel="noreferrer" target="_blank">coco-game</a>. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterTwo;