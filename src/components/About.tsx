import React from 'react'
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <div className="container">
        <div className="row py-5 my-5">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold ">About Us</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              sint ducimus velit molestias facere impedit aliquid quos fugiat ab
              sequi animi voluptate neque doloribus ipsum asperiores amet labore
              nemo recusandae non inventore omnis, harum nihil vel eligendi.
              Animi excepturi nam quis quisquam quaerat iusto, sequi earum
              voluptate reiciendis. Hic similique consequatur provident, animi
              dignissimos corporis velit necessitatibus doloremque rerum totam
              ullam culpa nostrum laborum at temporibus quam iure fugit saepe,
              distinctio, ex nemo sapiente illo libero. Dolore provident
              voluptates adipisci deserunt omnis dolorem laboriosam placeat
              tempora magni corporis laborum molestiae perspiciatis veritatis,
              dolores numquam quam sapiente accusantium commodi ea est!
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary">Contact Us</NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src="./assets/images/home/aboutus.png" alt="AboutUs" height="400px" width = "500px" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About