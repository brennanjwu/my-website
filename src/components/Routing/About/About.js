import React from 'react';
import './About.scss';
import AboutTile from '../../AboutTile.js';

function About(props) {
    return (
        <div className="about">
            <h1>About Me</h1>
            <div className="summary">
                <p>Hi, my name is Brennan. Currently I’m a Technology Advisory Services Consultant at Slalom, specializing in AWS and Salesforce development. I’ve had the opportunity to work with clients across various industries, helping businesses leverage technology to operate more efficiently and move faster.</p>
                <br></br>
                <p>With an entrepreneurial spirit, I find joy in creating innovative solutions for complex problems. My strong appreciation for good design and technology drives me to continuously explore new ways to enhance business operations. Although I consider myself a generalist, I've recently developed a particular interest in front-end development.</p>
                <br></br>
                <p>Outside of work I enjoy playing soccer, running, and indulging in my passion for coffee. I also have a keen interest in tasteful curation, particularly in fashion and interior design. </p> 
            </div>
            <h2>Experience</h2>
            <AboutTile image="https://media.licdn.com/dms/image/D560BAQGFRbh3xhok1g/company-logo_100_100/0/1697124516877/slalom_consulting_logo?e=1724284800&v=beta&t=nuSB5p7Inw-sopPBCsJA32_6kEKhaRveD2iHXuoHTqg" title="Slalom" subtext="Salesforce Associate Consultant"/>
            <h2>Education</h2>
            <AboutTile image="https://media.licdn.com/dms/image/D4D0BAQHqT-UVrTy-5g/company-logo_100_100/0/1715792434169/university_of_illinois_urbana_champaign_logo?e=1724284800&v=beta&t=I_Xzi1Q-Q05zrvENqXKbGYEjCzuSUGRXA5Q-nfJGfG8" title="University of Illinois Urbana-Champaign" subtext="Bachelor of Science - BS, Computer Engineering"/>
            <h2>Technologies</h2>
            <AboutTile image="https://media.licdn.com/dms/image/C560BAQHZ9xYomLW7zg/company-logo_100_100/0/1630658255326/salesforce_logo?e=1724284800&v=beta&t=TnRkCfqrFQHULAZHTBH9B4D6LGjtjLcS-YVfUHKdSKA" title="Salesforce" subtext="Apex, LWC, SOQL"/>
            <AboutTile image="https://media.licdn.com/dms/image/C560BAQER_QnUTXrPJw/company-logo_100_100/0/1670264051233/amazon_web_services_logo?e=1724284800&v=beta&t=fTH_xED1Voa8gzVl97PoY3xLZFDdFfeZrmMZgR50r4g" title="Amazon Web Services" subtext="EC2, S3, Lambda, DynamoDB"/>
            <AboutTile image="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" title="Javascript" subtext="HTML, CSS"/>
            <AboutTile image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1920px-React_Logo_SVG.svg.png" title="React"/>
            <AboutTile image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/230px-Python-logo-notext.svg.png" title="Python" subtext="PyTorch, NumPy, pandas"/>
        </div>
    );
}

export default About;