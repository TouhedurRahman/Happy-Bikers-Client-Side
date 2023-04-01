import React from 'react';
import { Accordion } from 'react-bootstrap';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog');

    return (
        <div className='w-75 mx-auto my-5 rounded'>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Q.01: Difference between javascript and nodejs.</Accordion.Header>
                    <Accordion.Body style={{ textAlign: "justify" }}>
                        JavaScript is a programming language that is primarily used for creating interactive web content. It is executed in a web browser and can be used to add interactivity, animation, and other dynamic features to websites. <br />

                        On the other hand, Node.js is a runtime environment that allows JavaScript to be executed outside of the web browser. It is based on the V8 JavaScript engine, which is used in the Google Chrome browser, and allows developers to write server-side applications in JavaScript. Node.js comes with built-in libraries for file system operations, networking, and other commonly used functionality in server-side programming. <br /><br />

                        In summary, JavaScript is a programming language used for client-side web development, while Node.js is a runtime environment that allows JavaScript to be used for server-side programming.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Q.02: When should you use nodejs and when should you use mongodb?</Accordion.Header>
                    <Accordion.Body style={{ textAlign: "justify" }}>
                        Node.js is an event-driven, non-blocking I/O runtime environment that allows developers to build server-side applications in JavaScript. It is ideal for building real-time applications and microservices that require high scalability, performance, and responsiveness. <br /><br />

                        MongoDB, on the other hand, is a NoSQL document-based database that provides a flexible and scalable data storage solution. It is well-suited for applications that handle large amounts of unstructured or semi-structured data, such as social media platforms, e-commerce websites, and IoT applications.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Q.03: Differences between sql and nosql databases.</Accordion.Header>
                    <Accordion.Body style={{ textAlign: "justify" }}>
                        SQL (Structured Query Language) databases use a tabular structure to store data, where data is organized into tables with rows and columns. SQL databases are based on the relational data model and use SQL queries to interact with the data. SQL databases are well-suited for applications that require complex queries and transactions, such as banking systems and e-commerce websites. <br /><br />
                        NoSQL (Not Only SQL) databases, on the other hand, use a variety of data models to store and retrieve data, including document-based, key-value, graph, and column-family models. NoSQL databases are designed to be highly scalable and provide better performance for handling large amounts of unstructured data. They are commonly used for big data and real-time web applications that require high performance and scalability, such as social media platforms and IoT applications
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Q.04: What is the purpose of jwt and how does it work?</Accordion.Header>
                    <Accordion.Body style={{ textAlign: "justify" }}>
                        JWT (JSON Web Token) is a secure and scalable way to transmit and verify user identity and access privileges between different components of a web application or API. It works by generating a token containing user information, signing it with a secret key, and transmitting it between the client and server for authentication and authorization purposes.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;