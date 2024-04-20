import Carousel from 'react-bootstrap/Carousel';

export const ProjectCard = ({ title, description, imgUrls }) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div style={{textAlign: "center"}}>
                <Carousel fade>
                    { imgUrls.map((url) => 
                        <Carousel.Item interval={2500}>
                            <img src={url} alt="" style={{maxHeight: "350px", width: "auto"}} className='m-2' />
                        </Carousel.Item>
                    )}
                </Carousel>
            </div>
        </div>
    );
}
