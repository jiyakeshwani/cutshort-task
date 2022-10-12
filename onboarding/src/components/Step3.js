import React from "react";

function Step3() {
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
            <span>1</span>
          </div>
          <div id="line1"></div>
        </div>
        <div className="flex ">
          <div
            className="
                  circle-1
                
                "
          >
            <span>2</span>
          </div>
        </div>
        <div id="line1"></div>
        <div className="flex ">
          <div
            className="
                  circle-1
              
                "
          >
            <span>3</span>
          </div>
        </div>
        <div id="line1"></div>
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
        <h2>How are you planning to use Eden?</h2>
        <p>We'll streamline your setup experience accoringly.</p>
      </div>
      <section className="flex step2">
        <div className="myself">
          <img src="/profile.png" alt="profile" />
          <h3>For myself</h3>
          <p>Write better. Think more clearly. Stay organized</p>
        </div>
        <div className="team">
          <img src="/team.png" alt="team" />
          <h3>With My team</h3>
          <p>Wikis, docs, tasks & projects, all in one place</p>
        </div>
      </section>
      <div className="btn-container">
        <button className="btn">Create Workspace</button>
      </div>
    </div>
  );
}

export default Step3;
