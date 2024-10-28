import { Container } from "./styles"
import Ammar from "../../assets/ammar.png"
import htmlIcon from "../../assets/html-icon.svg"
import cssIcon from "../../assets/css-icon.svg"
import jsIcon from "../../assets/js-icon.svg"
import nodeIcon from "../../assets/node-icon.svg"
import nestJsIcon from "../../assets/Nest.js - Copy.svg"
import reactIcon from "../../assets/react-icon.svg"
import typescriptIcon from "../../assets/typescript-icon.svg"
import vueIcon from "../../assets/vue-icon.svg"
import javaIcon from "../../assets/java.png"
import angularIcon from "../../assets/angular.png"
import flaskIcon from "../../assets/Flask - Copy.svg"
import djangoIcon from "../../assets/Django - Copy.svg"
import springIcon from "../../assets/Spring - Copy.svg"
import mysqlIcon from "../../assets/mysql-icon.svg"
import postgresIcon from "../../assets/PostgresSQL.svg"
import mongoIcon from "../../assets/MongoDB.svg"
import dockerIcon from "../../assets/Docker.svg"
import kubernetesIcon from "../../assets/Kubernetes.svg"
import bootstrapIcon from "../../assets/bootstrap-icon.svg"
import sassIcon from "../../assets/sass-icon.svg"
import expressIcon from "../../assets/express.svg"
import netIcon from "../../assets/NET - Copy.svg"
import wordpressIcon from "../../assets/wordpress.svg"
import shopifyIcon from "../../assets/shopify.svg"
import pythonIcon from "../../assets/Python - Copy.svg"
import awsIcon from "../../assets/AWS.svg"
import elasticSearch from "../../assets/Elastic Search.svg"
import kafkaIcon from "../../assets/Apache Kafka.svg"
import jUnit from "../../assets/JUnit.svg"
import mocha from "../../assets/Mocha.svg"
import selenium from "../../assets/Selenium.svg"
import rabbitMQ from "../../assets/RabbitMQ.svg"
import redisIcon from "../../assets/Redis.svg"

import ScrollAnimation from "react-animate-on-scroll"

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi, I'm Muhammad Ammar Aamir, a Full Stack Engineer with 5+ years of
            experience across full-stack development, cloud architecture, and
            CI/CD automation. Skilled in technologies like Node.js, Java, C#,
            and TypeScript, I build scalable solutions on AWS, utilizing
            services like S3, ECS, Lambda, EventBridge, VPC and many more.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.2 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            My tech stack spans frontend frameworks (React, Angular) to backend
            systems, where I leverage Kafka, Redis, Docker, and Kubernetes for
            efficient, containerized applications. Experienced in asynchronous
            programming and real-time data handling with Pub/Sub patterns, I
            bring expertise in databases like MongoDB, PostgreSQL, and MySQL. My
            DevOps approach includes Terraform and CloudFormation for IaC,
            optimizing deployments in fast-paced environments.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            Let’s connect if you’re looking for a proactive developer who
            delivers resilient, performance-driven solutions!
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          {/* Languages */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="TypeScript" />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={pythonIcon} alt="Python" />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={javaIcon} alt="Java" />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={netIcon} alt="C#" />
            </ScrollAnimation>
          </div>

          {/* Frontend Frameworks & Libraries */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={angularIcon} alt="Angular" />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={vueIcon} alt="Vue" />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={bootstrapIcon} alt="Bootstrap" />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={sassIcon} alt="Sass" />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={htmlIcon} alt="HTML" />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={cssIcon} alt="CSS" />
            </ScrollAnimation>
          </div>

          {/* Backend Frameworks & Technologies */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={nodeIcon} alt="Node.js" />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={nestJsIcon} alt="Nest.js" />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={expressIcon} alt="Express" />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={flaskIcon} alt="Flask" />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={djangoIcon} alt="Django" />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={springIcon} alt="Spring" />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={netIcon} alt=".NET" />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={rabbitMQ} alt="RabbitMQ" />
            </ScrollAnimation>
          </div>

          {/* Databases */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={mysqlIcon} alt="MySQL" />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={postgresIcon} alt="PostgreSQL" />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={mongoIcon} alt="MongoDB" />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={kafkaIcon} alt="Apache Kafka" />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={redisIcon} alt="Redis" />
            </ScrollAnimation>
          </div>

          {/* DevOps & Cloud */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={awsIcon} alt="AWS" />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={dockerIcon} alt="Docker" />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={kubernetesIcon} alt="Kubernetes" />
            </ScrollAnimation>
          </div>

          {/* Testing & QA */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jUnit} alt="JUnit" />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={mocha} alt="Mocha" />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={selenium} alt="Selenium" />
            </ScrollAnimation>
          </div>

          {/* CMS & E-commerce */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={wordpressIcon} alt="WordPress" />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={shopifyIcon} alt="Shopify" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          <img src={Ammar} alt="Ammar Aamir" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
