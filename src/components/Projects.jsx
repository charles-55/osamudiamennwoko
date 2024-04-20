import { Col, Container, Row, Nav, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projectData from './projectList.json';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    const projects = projectData.projects;

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__slideInLeft" : "hidden"}>
                                    <h2>Projects</h2>
                                </div>
                            }
                        </TrackVisibility>
                        <TrackVisibility>
                            <div className="animate__animated animate__slideInRight">
                                <Tab.Container id="projects-tabs" defaultActiveKey="tab1">
                                    <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                                        {
                                            projects.map((proj, index) => (
                                                <Nav.Item>
                                                    <Nav.Link eventKey={"tab" + index} >{"Tab " + (index+1)}</Nav.Link>
                                                </Nav.Item>
                                            ))
                                        }
                                    </Nav>
                                    <Tab.Content>
                                        {
                                            projects.map((proj, index) => (
                                                <Tab.Pane eventKey={"tab" + index}>
                                                    <Row>
                                                        <ProjectCard
                                                            {...proj}
                                                        />
                                                    </Row>
                                                </Tab.Pane>
                                            ))
                                        }
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src="img/color-sharp2.png" alt="" />
        </section>
    );
}
