import React, { useState } from "react";
// import InputBox from "./inputBox";

const App = () => {
  const [resources, setresources] = useState();
  return (
    <div>
      <div>
        <button onClick={() => setresources("Posts")}>Posts</button>
        <button onClick={() => setresources("Todos")}>Todos</button>
      </div>
      {resources}
    </div>
  );
};

export default App;
