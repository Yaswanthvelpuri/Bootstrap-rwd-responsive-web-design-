// Importing React library
import React from "react";

// Defining and exporting the main App component
export default function Box() {
  return (
    <div className="container">
      {/* Creating a Bootstrap container for responsive layout */}
      <div className="row">
        {/* Using Bootstrap grid system to create rows */}

        {/* Using d-inline class to keep these h1 elements inline */}
        <div className="col-12">
          <h1 className="d-inline">hello</h1>
          <h1 className="d-inline">hello</h1>
        </div>

        {/* Column with Bootstrap class for responsiveness and background color */}
        <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-3 bg-primary">
          {/* Adding text inside the color box */}
          <p className="text-white">Primary</p>
          <p className="d-none d-sm-block text-white">d-none d-sm-block</p>
          <p className="d-none d-md-block text-white">d-none d-md-block</p>
          <p className="d-none d-lg-block text-white">d-none d-lg-block</p>
          <p className="d-none d-xl-block text-white">d-none d-xl-block</p>
          {/* Using d-none and other d- classes for various breakpoints to control visibility */}
        </div>

        {/* Similar structure for other color boxes with different breakpoints */}
        <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-3 bg-secondary">
          <p className="text-white">Secondary</p>
          <p className="d-sm-none text-white">d-sm-none</p>
          <p className="d-md-none text-white">d-md-none</p>
          <p className="d-lg-none text-white">d-lg-none</p>
          <p className="d-xl-none text-white">d-xl-none</p>
        </div>

        <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-3 bg-success">
          <p className="text-white">Success</p>
          <p className="d-block d-sm-none text-white">d-block d-sm-none</p>
          <p className="d-block d-md-none text-white">d-block d-md-none</p>
          <p className="d-block d-lg-none text-white">d-block d-lg-none</p>
          <p className="d-block d-xl-none text-white">d-block d-xl-none</p>
        </div>

        <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-3 bg-info">
          <p className="text-white">Info</p>
          <p className="d-inline d-sm-none text-white">d-inline d-sm-none </p>
          <p className="d-inline d-md-none text-white">d-inline d-md-none</p>
          <p className="d-inline d-lg-none text-white">d-inline d-lg-none</p>
          <p className="d-inline d-xl-none text-white">d-inline d-xl-none</p>
        </div>

        <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-3 bg-warning">
          <p className="text-dark">Warning</p>
          <p className="d-inline-block d-sm-none text-dark">
            d-inline-block d-sm-none
          </p>
          <p className="d-inline-block d-md-none text-dark">
            d-inline-block d-md-none
          </p>
          <p className="d-inline-block d-lg-none text-dark">
            d-inline-block d-lg-none
          </p>
          <p className="d-inline-block d-xl-none text-dark">
            d-inline-block d-xl-none
          </p>
        </div>

        <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-3 bg-danger">
          <p className="text-white">Danger</p>
          <p className="d-flex d-sm-none text-white">d-flex d-sm-none</p>
          <p className="d-flex d-md-none text-white">d-flex d-md-none</p>
          <p className="d-flex d-lg-none text-white">d-flex d-lg-none</p>
          <p className="d-flex d-xl-none text-white">d-flex d-xl-none</p>
        </div>
      </div>
    </div>
  );
}
