import React from 'react';
import './About.css';

const About = (props) => {
    const { people } = props;
    return (

        <div className="about">

            <div class="w3-col l3 m6 w3-margin-bottom">
                <img src={people.thumbnailUrl2} id="peopleimg" />
                <p id="namepp">{people.name}</p>
                <p class="w3-opacity">CEO &amp; Founder</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <p><button class="w3-button w3-light-grey w3-block">Contact</button></p>
            </div>

        </div>
    );
}

export default About;