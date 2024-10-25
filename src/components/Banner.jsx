import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setloopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Full Stack Developer", "Mobile App Developer", "Cloud Developer", "AI Developer"];
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(150);
    const [isComplete, setIsComplete] = useState(false);
    const period = 2500;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setIsComplete(false);
            setDelta(prevDelta => prevDelta / 2);
        }
        if (!isDeleting & (updatedText === fullText)) {
            setIsDeleting(true);
            setIsComplete(true);
            setDelta(period);
        } else if (isDeleting && (updatedText === "")) {
            setIsDeleting(false);
            setloopNum(loopNum + 1);
            setDelta(150);
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Welcome to My Portfolio</span>
                                    <h1>{`Hi, I'm a `}<br />
                                        <span className="wrap">{ text }</span>
                                        <span className={isComplete ? "animate__animated animate__flash animate__infinite" : ""}>|</span>
                                    </h1>
                                    <p>
                                        A skilled <strong>software developer</strong> possessing a broad range of skills in software design, development, testing, and a rapid rate of learning. Competent in a wide range of programming languages, platforms, and the newest state-of-the-art techniques and equipment. Capable of managing oneself while working independently and as a competent team member during projects. I enjoy researching and learning new things, especially those related to software. Outside software development, I also love to play basketball and read books.
                                    </p>
                                    <button onClick={() => document.getElementById('connect').scrollIntoView({ behavior: 'smooth' })}>Let's connect <ArrowRightCircle size={25}/></button>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img className='rounded-circle img-thumbnail' src="img/profile-image.png" alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
