import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import crop from "./cropdisease.jpg"
import cafe from "./Cafe.png";
import Faceswap from "./Faceswap.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crop}
              isBlog={false}
              title="Soyabean Leaf Disease Prediction"
              description="In this project, prediction of soyabean leaf diseased plant is done using deep learning techniques. CNN is used for classification of diseased leaf."
              ghLink="https://github.com/vaendole/crop-disease-prediction"
            />
          </Col>

         
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Faceswap}
              isBlog={false}
              title="FaceSwapping"
              description="In this project face swapping is done using OpenCV in Computer Vision and Deep Learning."
              ghLink="https://github.com/vaendole/FaceSwappingProject"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cafe}
              isBlog={false}
              title="Cafe Managment System"
              description="Cafe management system is used for maintaining the details, Sales, billing and maintains an inventory for the Cafe. Coffee Shop Management System is based on a concept to maintain orders and management. of a particular coffee shop. There are two sections in this project, they are Coffee Ordering and. Admin panel. By using this system, he/she can maintain ordering records of a day."
              ghLink="https://github.com/vaendole/Cafe-Managment"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
