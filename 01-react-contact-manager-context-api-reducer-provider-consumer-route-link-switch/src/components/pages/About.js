import React from "react";

const About = props => {
  return (
    <div>
      <h1 className="display-4">About Contact Manager</h1>
      {/*<h1 className="display-4">{props.match.params.name}</h1>*/}
      <p className="lead"> Simple app to Manage Contacts</p>
      <p className="text-secondary">Version 1.0.0</p>
    </div>
  );
};

export default About;
