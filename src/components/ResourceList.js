import React from "react";
import { useResourceList } from "./useResources";

const ResourceList = ({ resource }) => {
  const resources = useResourceList(resource);
  return (
    <ul>
      {resources.map((record) => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};
export { ResourceList };
