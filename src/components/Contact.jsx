import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    message: ""
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    // setTimeout(() => {
    //   setButtonText("Send");
    //   setStatus({ success: false, message: "Sorry, contact feature still in progress. Try again later." });
    // }, 3000);

    fetch("https://charles-55.github.io/osamudiamennwoko/api/contact", {
      method: "POST",
      body: JSON.stringify(formDetails),
      headers: { "Content-Type": "application/json", Accept: "application/json" }
    }).then((res) => {
      if (res.ok) {
        setStatus({ success: true, message: "Message sent successfully!" });
        setFormDetails(formInitialDetails);
      } else setStatus({ success: false, message: "Error, message was not sent!" });
      setButtonText("Send");
    });

    // setButtonText("Sending...");
    // let response = await fetch("http://localhost:5000/contact", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "Application/json;charset=utf-8"
    //     },
    //     body: JSON.stringify(formDetails)
    // });
    // setButtonText("Send");
    // let result = response.json();
    // setFormDetails(formInitialDetails);
    // if (result.code === 200) {
    //     setStatus({ success: true, message: "Message sent successfully!" });
    // }
    // else {
    //     setStatus({ success: false, message: "Message failed to send, try again later!" });
    // }
  };

  return (
    <section className='contact' id='connect'>
      <Container>
        <Row>
          <Col md={6}>
            <img src="img/contact-img.svg" alt='Contact Me' />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className='px-1'>
                  <TrackVisibility>
                    {({ isVisible }) =>
                      <div className={isVisible ? "animate__animated animate__slideInLeft animate__faster" : "hidden"}>
                        <input type='text' value={formDetails.firstName} placeholder='First Name*' required onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </div>
                    }
                  </TrackVisibility>
                </Col>
                <Col sm={6} className='px-1'>
                  <TrackVisibility>
                    {({ isVisible }) =>
                      <div className={isVisible ? "animate__animated animate__slideInRight animate__faster" : "hidden"}>
                        <input type='text' value={formDetails.lastName} placeholder='Last Name' onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                      </div>
                    }
                  </TrackVisibility>
                </Col>
                <Col sm={6} className='px-1'>
                  <TrackVisibility>
                    {({ isVisible }) =>
                      <div className={isVisible ? "animate__animated animate__slideInLeft animate__faster" : "hidden"}>
                        <input type='email' value={formDetails.email} placeholder='Email Address*' required onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </div>
                    }
                  </TrackVisibility>
                </Col>
                <Col sm={6} className='px-1'>
                  <TrackVisibility>
                    {({ isVisible }) =>
                      <div className={isVisible ? "animate__animated animate__slideInRight animate__faster" : "hidden"}>
                        <input type='tel' value={formDetails.phoneNumber} placeholder='Phone Number' onChange={(e) => onFormUpdate('phoneNumber', e.target.value)} />
                      </div>
                    }
                  </TrackVisibility>
                </Col>
                <Col className='px-1'>
                  <TrackVisibility>
                    {({ isVisible }) =>
                      <div className={isVisible ? "animate__animated animate__slideInUp animate__faster" : "hidden"}>
                        <textarea row='15' value={formDetails.message} placeholder='Message*' required onChange={(e) => onFormUpdate('message', e.target.value)} />

                        {
                          status.message &&
                          <p className={(status.success === false) ? "danger" : "success"}>{status.message}</p>
                        }

                        <button type='submit'><span>{buttonText}</span></button>
                      </div>
                    }
                  </TrackVisibility>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
