import React, { useState } from "react";
import { ResourceList } from "./ResourceList";
import { UserList } from "./userlist";

const App = () => {
  const [resources, setresources] = useState();
  return (
    <div>
      <UserList />
      <div>
        <button onClick={() => setresources("posts")}>Posts</button>
        <button onClick={() => setresources("todos")}>Todos</button>
      </div>
      <ResourceList resource={resources} />
    </div>
  );
};

export default App;
