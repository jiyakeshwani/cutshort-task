import { useState } from "react";
import React from "react";

function Step2() {
  let [workspaceName, setWorkspaceName] = useState("");
  let [workspaceUrl, setWorkspaceUrl] = useState("");

  function handleChange(event) {
    setWorkspaceName(event.target.value);
    setWorkspaceUrl(event.target.value);
  }
  return (
    <div className="step">
      <div className="logo">
        <img className="logo-img" src="/logo.png" alt="logo" />
        <h1>Eden</h1>
      </div>
      <div className="flex steps">
        <div className="flex ">
          <div
            className="
                  circle-1
               
                "
          >
            <span className="white">1</span>
          </div>
          <div id="line1"></div>
        </div>
        <div className="flex ">
          <div
            className="
                  circle
                
                "
          >
            <span>2</span>
          </div>
        </div>
        <div id="line"></div>
        <div className="flex ">
          <div
            className="
                  circle
              
                "
          >
            <span>3</span>
          </div>
        </div>
        <div id="line"></div>
        <div className="flex ">
          <div
            className="
                  circle
                
                "
          >
            <span>4</span>
          </div>
        </div>
      </div>
      <div className="intro">
        <h2>Let's set up a home for all your work</h2>
        <p>You can always create another workspace later.</p>
      </div>
      <form className="form">
        <label for="workspace-name">Workspace Name</label>
        <input
          onChange={handleChange}
          placeholder="Eden"
          name="workspace-name"
          type="text"
          value={workspaceName}
        />
        <label for="workspace-url">
          Workspace URL <span className="optional">(optional)</span>
        </label>
        <input
          onChange={handleChange}
          placeholder="www.eden.com/     Example"
          name="workspace-url"
          type="text"
          value={workspaceUrl}
        />
        <button className="btn">Create Workspace</button>
      </form>
    </div>
  );
}

export default Step2;
