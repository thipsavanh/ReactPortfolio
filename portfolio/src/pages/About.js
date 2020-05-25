import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import biophoto from '../assets/images/biophoto.jpg';

function About(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        <Row>
          <Col className="col-12 col-lg-6">
            <img className="photo" src={biophoto} alt="photo" />
          </Col>
          <Col className="col-12 col-lg-6">
            <p>
              Hello! I am currently a student in The Coding Bootcamp at UT. As someone with no prior background in software
              development, I have gained a great deal of knowledge over the last six months of the course. I have learned
              HTML, CSS, Javascript, and React for frontend development and I have learned Express and node.js for backend
              development.
            </p>
            <p>
              You can take a look at a few examples of my work in my Portfolio section. The first two showcase group
              projects. The second project was especially challenging as everything was done virtually with regards to
              communicating with my teammates and outlining the direction of the MVP of our project. As the course continues
              to progress, I will continue to add more of my work.
            </p>
            <p>
              For more information about me, you can browse the contact page which contains links to my LinkedIn profile,
              GitHub page, resume, and email.
            </p>
          </Col>
        </Row>
      </Content>
    </div>
  )
}

export default About;