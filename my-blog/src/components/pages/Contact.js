import React, { Component } from 'react';
import {
    Container,
    Row,
    Col
} from 'react-grid-system';
class Contact extends Component {

    render() {
        return (
            <div className="ContainerContact">
                <Container>
                    <h3>
                    Here are some useful links to contact me
                    </h3>
                    <Row>
                        <Col>
                        <a href="mailto:alvinjv818@gmail.com">
                            <i class="zmdi zmdi-email"></i>
                            <div className="social-text">alvinjv818@gmail.com</div>

                        </a>
                        </Col>
                        <Col>
                        <a href="https://github.com/alvin818">
                            <i class="zmdi zmdi-github-box"></i>
                            <div className="social-text">github.com/alvin818</div>
                        </a>
                        </Col>
                        <Col>
                        <a href="https://www.linkedin.com/in/alvin-vanegas/">
                            <i class="zmdi zmdi-linkedin-box"></i>
                            <div className="social-text">linkedin.com/in/alvin-vanegas/</div>

                        </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }


}


export default Contact;