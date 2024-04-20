import { Container, Row, Col } from 'react-bootstrap';
import { CircularProgressbar } from 'react-circular-progressbar';
import Carousel from 'react-multi-carousel';
import TrackVisibility from 'react-on-screen';
import GradientSVG from './GracientSVG';
import skillData from './skillList.json';

import 'react-multi-carousel/lib/styles.css';
import 'animate.css';
import 'react-circular-progressbar/dist/styles.css';

const SkillItem = ({ name, value }) => {
    return (
        <div className='mx-2 w-25'>
            <GradientSVG />
            <CircularProgressbar
                strokeWidth={7.5}
                value={value}
                text={`${value}%`}
                styles={{
                    text: { fill: "#fff", fontWeight: 550 },
                    path: { stroke: "url(#gradientPB)", height: "100%" },
                    trail: { stroke: "#2e2e2e" }
                }}
            />
            <h5>{name}</h5>
        </div>
    );
}

export const Skills = () => {
    const skills = skillData.skills;

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 0 },
            items: 1
        }
    };

    return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__pulse" : ""}>
                                    <div className='skill-bx'>
                                        <h2>Skills</h2>
                                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                            {Object.keys(skills).map((key) => (
                                                <div className='carousel-slide'>
                                                    <h3>{key}</h3>
                                                    <div className='d-flex justify-content-around flex-wrap'>
                                                        {Object.keys(skills[key]).map((value) => (
                                                            <SkillItem name={value} value={skills[key][value]} />
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </Carousel>
                                    </div>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src="img/color-sharp.png" alt='leftImgBg' />
        </section>
    );
}
