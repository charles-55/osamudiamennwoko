import Carousel from 'react-bootstrap/Carousel';

export const ProjectCard = ({ title, description, imgUrls, link }) => {
    return (
        <div>
            <h3>{title}</h3>
            <p><a href={link} style={{ color: "inherit" }}><b>Source</b></a></p>
            <p>{description}</p>
            <div style={{textAlign: "center"}}>
                {(imgUrls.length > 0) && <Carousel fade>
                    { imgUrls.map((url) => 
                        <Carousel.Item interval={2500}>
                            <img src={url} alt="" style={{maxHeight: "350px", width: "auto"}} className='m-2' />
                        </Carousel.Item>
                    )}
                </Carousel>}
            </div>
        </div>
    );
}
