import { Container, Row, Col } from 'react-bootstrap';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <img className='rounded-circle' src="img/logo.png" alt="Logo" />
                    </Col>
                    <Col sm={6} className='text-center text-sm-end'>
                        <div className='social-icon'>
                        <a href="https://www.linkedin.com/in/osamudiamen-nwoko/"><img src="img/linkedinIcon.svg" alt="LinkedIn" /></a>
                        <a href="https://github.com/charles-55"><img src="img/githubIcon.svg" alt="GitHub" /></a>
                        </div>
                        <p>CopyRight 2024. All Right Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
