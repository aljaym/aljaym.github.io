import React from 'react';
import Header from '../components/Header';
import skills from './data/skills.json';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => skills.map((skill) => {
    const getPercentage = () => {
        return skill.percentage;
    }

    return (
        <Col xs lg="4">
            <div key={skill.id} className="skill-col">
                <div class={`c100 orange p${getPercentage()}`}>
                    <CircularProgressbar value={getPercentage()} text={`${getPercentage()}%`} 
                        styles={buildStyles({
                            // Rotation of path and trail, in number of turns (0-1)
                            rotation: 0.25,
                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: 'butt',
                            // Text size
                            textSize: '16px',
                            // How long animation takes to go from one percentage to another, in seconds
                            pathTransitionDuration: 0.5,
                            // Can specify path transition in more detail, or remove it entirely
                            // pathTransition: 'none',
                            // Colors
                            pathColor: `rgba(240, 95, 64, ${getPercentage() / 100})`,
                            textColor: '#f88',
                            trailColor: '#d6d6d6',
                            backgroundColor: '#3e98c7',
                          })}
                    />
                </div>
                <h3> {skill.name} </h3>
                <p class="description"> {skill.the_excerpt} </p>
            </div>
        </Col>
    )
});

const Skill = () => {
    return (
        <div className="App subpage">
            <Header />
            <Container>
                <Row>
                    <Col>
                        <div className="text-center">
                            <h2 className="section-heading">Current Skill Set</h2>
                        </div>
                    </Col>
                </Row>
                
                
                <Row>
                    <Skills></Skills>
                </Row>
                {/* <div class="skill-col">
                    <div class="c100 p<?php echo get_field( "percentage" ); ?> orange">
                        <span><?php echo get_field( "percentage" ); ?>%</span>
                        <div class="slice">
                            <div class="bar"></div>
                            <div class="fill"></div>
                        </div>
                    </div>
                </div>
                <h3> <?php the_title(); ?> </h3>
                <p class="description"> <?php echo get_the_excerpt(); ?> </p> */}
                <Row>
                    <Col className='text-center'>
                        <a target="_blank" href="https://ph.linkedin.com/in/aljay-mallari-772150110" className="btn btn-primary btn-xl page-scroll">Find Out More</a>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}

export default Skill;