import React from "react";

export default function Sidebar() {
  return (
    <div className="container">
      <div className="row ">
        <div className="bg-info p-5 col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <h1 className="text-primary d-sm-none">text-primary</h1>
        </div>
        <div className="bg-primary p-5 m-2 col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <h1 className="text-secondary d-md-none">text-secondary</h1>
        </div>
        <div className="bg-success p-5 m-2 col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <h1 className="text-danger d-xl-none">text-danger</h1>
        </div>
        <div className="bg-danger p-5 m-2 col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <h1 className="text-success d-lg-none">text-success</h1>
        </div>
        <div className="bg-secondary p-5 mr-2 col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <h1 className="text-dark d-xl-none">text-dark</h1>
        </div>
        <div className="bg-warning p-5 m-4 col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <h1 className="text-light d-none d-xl-block">text-light</h1>
        </div>
        <div className="bg-dark p-5 m-5 col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <h1 className="text-warning d-none d-md-block d-xl-none d-lg-none">
            text-warning
          </h1>
        </div>
      </div>
    </div>
  );
}
