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
                Cross-origin resource sharing <b>(CORS)</b> is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).
              </small>
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
                <b>Firebase</b> helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together. The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
                <br />
                The other free <b>alternative</b> of Firebase is <br />
                i) MongoDB, <br />
                ii) Supabase, <br />
                iii) RxDB, <br />
                iv) Etebase, <br />
                v) remoteStorage
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
                <b>Private Routes</b> in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.
                The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
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
                Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.

              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;