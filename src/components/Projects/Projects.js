import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import chatify from "../../Assets/Projects/chatify.png";

import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="LezChat"
              description="Group Chat Room hangout with friends build with node.js, express.js and socket.io.Enables realtime messaging."
              link="https://lezchat-by-anurag.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Quiz Management System"
              description="A Quiz App made using PHP and MYSQL, which teachers can use to create personalized quiz and generate a code for it. Students with the code can take thee quiz which will be evaluated in realtime and they will get a socre."
              link="https://github.com/Anuragkr07/QMS"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
