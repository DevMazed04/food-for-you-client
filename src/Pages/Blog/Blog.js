import React from 'react';
import './Blog.css'

const Blog = () => {
  return (
    <div>
      <h2 className="fw-semibold text-black opacity-75 text-center px-4 mt-5 mb-3 mb-sm-3">
        Common Interview Questions
      </h2>

      <div className="accordion border border-0 mx-auto mt-4 mt-sm-5 my-lg-4 px-4 px-lg-5 rounded nav-width"
        id="accordionExample">
        <div className="accordion-item border border-0 mb-3">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button bg-gradient text-dark opacity-75 fw-semibold px-4 py-4 rounded border"
              type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
              aria-controls="collapseOne">
              What is the difference between SQL and NoSQL?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show rounded-3" aria-labelledby="headingOne"
            data-bs-parent="#accordionExample">
            <div className="accordion-body text-secondary px-0 pe-3 px-lg-4 pb-3 px-3 text-start">
              <small>
              </small>
              <b>1)</b> <b>SQL</b> is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them) where <b>NoSQL</b> is a class of DBMs that are non-relational and generally do not use SQL.
              <br />
              <b>2)</b> SQL databases have fixed or static or predefined schema, Where NoSQL databases have dynamic schema. <br />
              <b>3)</b>  SQL databases are best suited for complex queries, where NoSQL databases are not so good for complex queries. <br />
              <b>4)</b> SQL database Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc. Where NpSQL database Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc
            </div>
          </div>
        </div>

        <div className="accordion-item border border-0 mb-3">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed bg-gradient text-dark opacity-75 fw-semibold px-4 py-4 border border-dark border-opacity-10 rounded"
              type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
              aria-controls="collapseTwo">
              What is JWT, and how does it work?
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample">
            <div className="accordion-body text-secondary px-0 pe-3 px-lg-4 pb-3 px-3 text-start">
              <small>
                <b>JWT</b> or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. <br />

                JWT <b>works</b> as a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                Once decoded, you will get two JSON strings:
                The header and the payload.
                The signature.
                The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.
                The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.
                There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.
                The signature ensures that the token has not been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
              </small>
            </div>
          </div>
        </div>

        <div className="accordion-item border border-0 mb-3">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed bg-gradient text-dark opacity-75 fw-semibold px-4 py-4 border border-dark border-opacity-10 rounded"
              type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
              aria-controls="collapseThree">
              What is the difference between javascript and NodeJS?
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
            data-bs-parent="#accordionExample">
            <div className="accordion-body text-secondary px-0 pe-3 px-lg-4 pb-3 px-3 text-start">
              <small>
                <b>1)</b> <b>Javascript</b> is a programming language that is used for writing scripts on the website. Where <b>NodeJS</b> is a Javascript runtime environment.
                <br />
                <b>2)</b> Javascript is capable enough to add HTML and play with the DOM. Where Nodejs does not have capability to add HTML tags.<br />
                <b>3)</b> Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. Where V8 is the Javascript engine inside of node.js that parses and runs Javascript. <br />
                <b>4)</b> JS is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. Where Nodejs is written in C, C++ and Javascript. <br />
                <b>5)</b> Some of the javascript frameworks are RamdaJS, TypedJS, etc. Where Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. <br />
              </small>
            </div>
          </div>
        </div>

        <div className="accordion-item border border-0 mb-5">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed bg-gradient text-dark opacity-75 fw-semibold px-4 py-4 border border-dark border-opacity-10 rounded"
              type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
              aria-controls="collapseThree">
              How does NodeJS handle multiple requests at the same time?
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
            data-bs-parent="#accordionExample">
            <div className="accordion-body text-secondary px-0 pe-3 px-lg-4 pb-3 px-3 text-start">
              <small>
                Node. js <b>(Node)</b> is an open source development platform for executing JavaScript code server-side. Node is useful for developing applications that require a persistent connection from the browser to the server and is often used for real-time applications such as chat, news feeds and web push notifications.
                <br />
                NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.

              </small>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Blog;