import React, { useContext } from "react";
import "animate.css";
import { CredentialContext } from "./../App";

import Task from "./Task";

const Welcome = () => {
  const [credentials] = useContext(CredentialContext);

  return (
    <div class="min-h-screen md:min-h-[80vh] p-4 md:max-w-5xl mx-auto">
      {credentials ? (
        <Task />
      ) : (
        <p className="flex items-center justify-center text-lg font-bold">
          You're not logged in
        </p>
      )}
    </div>
  );
};

export default Welcome;
