import React, { Component } from 'react';
import holistic from './Pictures/holistic.png';
// React grid system
import {
    Row,
    Col
} from 'react-grid-system';

// For "card" elements for projects
import {
    Thumbnail
} from 'react-bootstrap';

// For linking projects
import {
    Link
  } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="Container">
            <h3>Below are some projects I have worked on and there are more to come!</h3>
                    <Row>
                        <Col>
                        <Link to="/HolisticProject">
                            <Thumbnail src={ holistic } alt="242x200">
                                <h3>Holistic</h3>
                                <p>Holistic is a smart planner that helps you break down and achieve your goals by giving you reccomendations when you need them.</p>
                            </Thumbnail>
                        </Link>
                        </Col>
                        <Col>
                        <Thumbnail src="#" alt="242x200">
                            <h3>Project Title</h3>
                            <p>Project description</p>
                        </Thumbnail>
                        </Col>
                        
                    </Row>
            
            </div>

        );
    }


}


export default Home;