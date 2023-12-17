import React, {useState} from 'react';
import "./Landing.css"
import Button from '@mui/material/Button';
import Service from "./Service"
import BookDialog from "./BookDialog";
import ContactDialog from "./ContactDialog";

const Landing = () => {
    const [openBook, setOpenBook] = useState(false);
    const [openContact, setOpenContact] = useState(false);
    const [parkSelected, setParkSelected] = useState(false)

    const handleClickOpen = () => {
        setOpenBook(true);
    };

    const handleCloseBook = () => {
        setOpenBook(false);
    };

    const handleCloseContact = () => {
        setOpenContact(false);
    };

    return (
        <>
            <div className="header">
                <div className="logo">
                    <img src="logo.png" alt=""/>
                </div>
                <div className="buttons-top">
                    <div className="btn">
                        <Button id="book" variant="contained" onClick={() => setOpenBook(true)}>Book a Test</Button>
                    </div>
                    <div className="btn">
                        <Button id="contact" variant="contained" onClick={() => setOpenContact(true)}>Contact Sales</Button>
                    </div>
                </div>
            </div>
            <div className="banner1">
                <div className="banner-bg">
                    <div className="info-container">
                        <div className="info">
                            <div className="info-text">
                                <h3><span>T</span>esting <span>M</span>aster <span>P</span>latform</h3>
                                <h2>We streamline your AV testing for shorter, more cost-effective, and safer outcomes.</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="banner2">
                <div className="content">
                    <h1 className="title">Services</h1>
                    <div className="services">
                        <Service image="talk.png" title="Tech Consulting" text="We support you with our expertise in autonomous driving testing."/>
                        <Service image="driving-school.png" title="Testing" text="We offer testing environment covering customized use cases to ensure VRU testing."/>
                        <Service image="vital-signs.png" title="Simulation Center" text="With fully-equipped simulation center, you save time and cost before sending your vehicles on road."/>
                    </div>
                </div>
            </div>
            <div className="banner" id="banner3">
                <div className="text">
                    <h3>What we provide</h3>
                    <h1>A professional test field with 10+ ancre</h1>
                    <h1><span>5</span> km away from Munich</h1>
                </div>
                <div className="image2"><img src="map.jpg" alt=""/></div>
            </div>
            <div className="banner" id="banner4">
                <div className="container">
                    <h2>Parking</h2>
                    <div className="service-details">
                        <div className="box">
                            <h3>Valet parking</h3>
                            <div className="image3"><img src="park1.jpg" alt=""/></div>
                        </div>
                        <div className="box">
                            <h3>Find parking space</h3>
                            <div className="image3"><img src="park2.jpg" alt=""/></div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h2>Intersection</h2>
                    <div className="service-details">
                        <div className="box">
                            <h3>Vulnerable Road Users (VRU)</h3>
                            <div className="image3"><img src="inter1.jpg" alt=""/></div>
                        </div>
                        <div className="box">
                            <h3>Turning</h3>
                            <div className="image3"><img src="inter2.jpg" alt=""/></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner" id="banner5">
                <div className="text"><h3>Want to tailor the set-up?</h3>
                    <p>From simulation under different weather conditions to demand of specified car action such as overtaking, we're here to satisfy you.</p>
                    <p>Contact our team for further information！</p>
                </div>
                <div className="bottom">
                    <div className="buttons-bottom">
                        <div className="btn">
                            <Button id="book" variant="contained">Book a Test</Button>
                        </div>
                        <div className="btn">
                            <Button id="contact" variant="contained">Contact Sales</Button>
                        </div>
                    </div>
                </div>
            </div>
            <BookDialog open={openBook} handleClose={handleCloseBook}/>
            <ContactDialog open={openContact} handleClose={handleCloseContact}/>
        </>
    );
}

export default Landing;
