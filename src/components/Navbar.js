import React from 'react';


const Navbar = () => {

    return (
        <div className="navbar">
            <title>W3.CSS Template</title>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
            <div class="w3-top">
                <div class="w3-bar w3-white w3-wide w3-padding w3-card">
                    <a href="#home" class="w3-bar-item w3-button"><b>RL</b> Rocket League wiki</a>

                    <div class="w3-right w3-hide-small">
                        <a href="#Projects" class="w3-bar-item w3-button">Projects</a>
                        <a href="#About" class="w3-bar-item w3-button">About</a>
                        <a href="#Contact" class="w3-bar-item w3-button">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;