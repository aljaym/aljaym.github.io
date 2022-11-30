import React from 'react';
import Header from '../components/Header';
import avatar from '../aljayDSC_0079.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Homepage = () => {
    return (
        <div className="App">
            <Header />
            <Container>
                <Row>
                    <Col className="homepage">
                        <div className="profile-image-parent">
                            <img className="profile-image" src={avatar} alt="Aljay Quizon Mallari" />
                        </div>

                        <div className="intro-text">
                        <h1 className="name">Senior Software Engineer</h1>

                        <hr className="star-light" />

                        <span className="skills"> PHP - PHP MVC - Front End</span>

                        <p>
                            Full stack developer/Web developer with years of experience, Knowledgeable in the user interface, deployment, and debugging processes. Bringing expertise in planning, Database design, installation, development, testing, and maintenance of a website. Equipped with a diverse and promising skill set. Proficient in an assortment of technologies, including PHP, Javascript, HTML, CSS, and MySQL. Capable of self-manage during independent projects, as well as collaborating in a team.
                        </p>
                        </div>
                        <a target="_blank" href="https://ph.linkedin.com/in/aljay-mallari-772150110" className="btn btn-primary btn-xl page-scroll">Find Out More</a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Homepage;