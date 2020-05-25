import React from "react";
import { useResourceList } from "./useResources";

const UserList = () => {
  const users = useResourceList("users");
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export { UserList };
