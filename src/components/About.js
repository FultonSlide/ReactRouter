import React from 'react';
import Rainbow from '../components/hoc/Rainbow';

const About = () => {
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <p className="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    )
};

export default Rainbow(About);
