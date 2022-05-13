import React from 'react';
import hanif from '../../images/hanif.jpg';

const About = () => {
    return (
        <div className="container">
            <h2 className="text-info my-5 text-center">About Me</h2>
            <div className="row">
            <div className="col-6">
                <img width="400" height="400"  src={hanif} alt = ''/>
            </div>
            <div className="col-6">
                
                <h2>Hello, I am </h2>
                <h2 className="text-info">Haniful Islam Hanif</h2>
                <p>Hello, My name is Haniful Islam Hanif. I study at Dinajpur Polytechnic Institute of Diploma in Engineering, Computer Technology. My future Dream is web developer.</p>
                <p>
                Recently I have completed Html5, Css3, Javascript, Bootstrap, Jquery, React JS, Next JS, Node JS, Express JS, and Mongo DB react and node js from Programming Hero.
                </p>
            </div>
        </div>
        </div>
    );
};

export default About;