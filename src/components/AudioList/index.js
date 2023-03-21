import React from "react";
import { Nav } from "../container";

const AudioList = ({ path }) => {
  return (
    <div>
      <Nav>
        {path.map((p, index) => (
          <h4>
            <hr />
            {p} {index}
            <hr />
          </h4>
        ))}
      </Nav>
    </div>
  );
};

export default AudioList;
