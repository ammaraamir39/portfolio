import { Container } from "./styles"
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll"

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                {/* <a href="https://github.com/CodeVinayak/Serverless-Voting-Application" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a> */}
                <a
                  href="https://www.syncora.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>{" "}
              </div>
            </header>
            <div className="body">
              <h3>Syncora: A PreClinical Trial Management System</h3>
              <p>
                {" "}
                Designed and implemented a comprehensive preclinical trial
                management system leveraging a microservices architecture with{" "}
                <b>NestJS</b> and <b>TypeScript</b>. Integrated with{" "}
                <b>MongoDB</b> and <b>PostgreSQL</b> databases, using{" "}
                <b>Mongoose</b> for efficient data modeling and management.
                Built a robust ETL pipeline with <b>AWS MWAA</b> for seamless
                data extraction, transformation, and loading from external
                sources to internal databases, ensuring data consistency.
                Employed <b>Kafka</b> and <b>AWS SQS</b> for asynchronous
                communication, along with <b>SNS</b> and <b>EventBridge</b> to
                orchestrate complex workflows. The application utilizes{" "}
                <b>AWS Lambda</b> for scalable compute, <b>ElasticSearch</b> for
                fast data retrieval, and <b>Docker</b> with <b>ECS</b> for
                containerized deployment, all managed through <b>Terraform</b>{" "}
                for infrastructure-as-code. The frontend was developed with{" "}
                <b>Next.js</b> for a responsive and interactive user experience.{" "}
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>NestJS</li>
                <li>TypeScript</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>Java</li>
                <li>Spring</li>
                <li>PostgreSQL</li>
                <li>Microservices</li>
                <li>Pub/Sub</li>
                <li>AWS SQS</li>
                <li>Kafka</li>
                <li>MWAA (Managed Workflows for Apache Airflow)</li>
                <li>AWS SNS</li>
                <li>AWS Lambda</li>
                <li>AWS EventBridge</li>
                <li>Next.js</li>
                <li>Docker</li>
                <li>AWS ECS</li>
                <li>Terraform</li>
                <li>ElasticSearch</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/ammaraamir39/HRMS-Education"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />{" "}
                </a>
                {/* <a
                  href="https://ai-chatbot-t8fn.onrender.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a> */}
              </div>
            </header>
            <div className="body">
              <h3>HRMS-Education: Human Resource Management System</h3>
              <p>
                HRMS-Education is a comprehensive Human Resource Management
                System designed to streamline HR processes specifically for
                educational institutions like schools, colleges, and
                universities. The system features modules for employee
                registration, attendance tracking, leave management, profile
                editing, and project assignments. Built with a robust tech stack
                including <b>React.js</b>, <b>React-Redux</b>,{" "}
                <b>Redux Toolkit</b>, <b>RxJS</b>, and <b>Firebase</b> for
                real-time data management, along with <b>Node.js</b> and{" "}
                <b>Express</b> on the backend, and <b>Java Spring Boot</b> for
                additional backend services. The platform incorporates{" "}
                <b>OAuth 2.0</b> for secure authentication, <b>PostgreSQL</b>{" "}
                for reliable data storage, and role-based access control, making
                it scalable and secure for large institutions.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.js</li>
                <li>React-Redux</li>
                <li>Redux Toolkit</li>
                <li>RxJS</li>
                <li>Firebase</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Java Spring Boot</li>
                <li>OAuth 2.0</li>
                <li>PostgreSQL</li>
                <li>Role-Based Access Control</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/ammaraamir39/Python-AWS-Cognito"
                  target="\_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Authentication & Authorization Using AWS Cognito</h3>
              <p>
                Developed a modular, scalable web application using <b>Flask</b>{" "}
                for educational institutions, integrating secure user
                authentication and management with <b>AWS Cognito</b>. The
                application supports <b>OAuth 2.0</b> with client ID and secret,
                and includes <b>SSO</b> and <b>MFA</b> for enhanced security.
                Utilizes <b>Role-Based Access Control (RBAC)</b> via Cognito
                Groups, with real-time communication powered by <b>SocketIO</b>.{" "}
                <b>MongoDB</b> is used as the primary database, with request
                validation through <b>Marshmallow</b>, centralized configuration
                management, and structured logging for maintainability.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>Flask</li>
                <li>AWS Cognito</li>
                <li>MFA</li>
                <li>SSO</li>
                <li>OAuth 2.0</li>
                <li>MongoDB</li>
                <li>SocketIO</li>
                <li>RBAC (Role-Based Access Control)</li>
                <li>Policy-Based Authentication</li>
                <li>Pymongo</li>
                <li>Marshmallow</li>
                <li>Logging</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/ammaraamir39/ChatApp-Nodejs-Nextjs-Turborepo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Scalable Chat Application with Monorepo Architecture</h3>
              <p>
                Created a scalable chat application using a monorepo structure
                with <b>Node.js</b>, <b>Next.js</b>, and <b>Turborepo</b>. The
                application integrates real-time messaging with <b>Socket.IO</b>
                , uses <b>Redis</b> and <b>Kafka</b> for data caching and
                message queueing, and <b>PostgreSQL</b> for data storage.
                Developed with <b>TypeScript</b> for type safety and
                maintainability, the system is optimized for performance and
                scalability.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Node.js</li>
                <li>Next.js</li>
                <li>Turborepo</li>
                <li>Socket.IO</li>
                <li>Redis</li>
                <li>Kafka</li>
                <li>PostgreSQL</li>
                <li>TypeScript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                {/* <a
                  href="https://github.com/CodeVinayak/Real-Time-Hand-Gesture-Driven-3D-Object-Manipulation"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a> */}
                <a
                  href="https://acegrinding.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>AceGrinding: Admin Portal for Pipe and Truck Tracking</h3>
              <p>
                Developed the admin portal for <b>AceGrinding</b>, a factory
                management and truck tracking application, utilizing a
                microservices architecture. Built with <b>NestJS</b> and{" "}
                <b>GraphQL</b> for flexible and scalable API management.
                Integrated <b>Java</b> for additional backend services. The
                application features <b>MongoDB</b> with Geographical indexes
                for precise location tracking, <b>ElasticSearch</b> for fast
                data retrieval, and <b>PostgreSQL</b> for relational data
                management. Employed <b>Kafka</b> for event streaming, tracking
                truck locations, and <b>Redshift</b> for in-depth analytical
                reporting.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>NestJS</li>
                <li>GraphQL</li>
                <li>Java</li>
                <li>MongoDB (Geographical Indexes)</li>
                <li>ElasticSearch</li>
                <li>PostgreSQL</li>
                <li>Kafka</li>
                <li>Kafka Streaming</li>
                <li>Redshift</li>
                <li>Microservices Architecture</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://shifttake.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>ShiftTake: Workforce Shift Management Platform</h3>
              <p>
                ShiftTake is a workforce management platform designed for shift
                allotment and real-time team collaboration. Built with{" "}
                <b>Node.js</b> and <b>Express</b> on the backend and{" "}
                <b>React.js</b> on the frontend, it integrates <b>MongoDB</b>{" "}
                for data storage. <b>Firebase</b> is used for authentication and
                push notifications, while <b>AWS SNS</b> and <b>AWS Lambda</b>{" "}
                handle email notifications and data aggregation from various
                shift sources. <b>RabbitMQ</b> enables pub/sub messaging,{" "}
                <b>Socket.IO</b> powers chat, and <b>WebRTC</b> supports video
                communication. The application is containerized with{" "}
                <b>Docker</b> and deployed on <b>AWS EKS</b>, with monitoring
                using <b>AWS CloudWatch</b> and <b>AWS X-Ray</b>.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>Html</li>
                <li>css</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/ammaraamir39/rebusfinance"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Automated Text Translation & Categorization with ChatGPT</h3>
              <p>
                Developed a Python script that automates text translation to
                English and categorizes data based on predefined prompts using{" "}
                <b>OpenAI's ChatGPT</b> API. The script reads rows from an{" "}
                <b>Excel sheet</b>, processes each entry, and sends targeted
                prompts to ChatGPT for categorization. This tool streamlines
                text processing and classification, leveraging AI-driven
                language understanding for accurate categorization.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>OpenAI API (ChatGPT)</li>
                <li>Excel Processing</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/ammaraamir39/NX-Node-Typescript-Monorepo-Basic-Architecture-Setup"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit repository" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Basic Monorepo Architecture with Node.js and TypeScript</h3>
              <p>
                Developed a basic monorepo architecture setup using{" "}
                <b>Node.js</b> and <b>Express</b>, managed with <b>Nx</b> to
                facilitate scalable project organization. This setup utilizes{" "}
                <b>TypeScript</b> for type safety and consistency, supporting
                multiple applications and libraries within a unified repository
                structure, making it suitable for complex, modular applications.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Node.js</li>
                <li>Express</li>
                <li>TypeScript</li>
                <li>Nx</li>
                <li>Monorepo Architecture</li>{" "}
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://mitulindustries.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mitul Industries - Manufacturing Industries Site</h3>
              <p>
              This manufacturing industry website shows off products and helps the business get more customers and information online. Making products is important but making money from them is the goal. This site can help the business make more profit.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* 
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://mayatmaj.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mayatmaj - Film Production Site</h3>
              <p>
                This agency website promotes post production, virtual production, and video marketing services. It shows previous client work and reviews to get more business. If you need help with production, this website can give you information and connect you with the right people.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://www.smartcornersproperties.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>SmartCorners - Real Estate Properties Site</h3>
              <p>
              This real estate site displays land properties and helps buyers and sellers. Buyers can see lots of pictures, videos, and details about properties before visiting in person. It makes it easier for buyers to find what they want and helps sellers get more attention.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>               
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://madewithluv.in/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>MadeWithLuv - HomeDecor Site</h3>
              <p>
                This website sells home decor products and helps people decorate their homes. It is easy to find what you need, whether it's furniture or decorations. The site is useful for people who want to make their homes look nice and need some help.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
                <li>Woocommerce</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}
      </div>
    </Container>
  )
}
