import React from 'react';
import './Projects.css';

const Projects = (props) => {
    const { car, onCarClick } = props;
    return (
        <div className="projects">
            <div className="projects__content">
                <div className="car-item">
                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <div className="w3-display-container">
                            <div className="w3-display-topleft w3-aqua w3-padding">{car.title}</div>
                            <img src={car.thumbnailUrl} onClick={() => onCarClick(car)} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;