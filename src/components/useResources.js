import { useState, useEffect } from "react";
import axios from "axios";
const useResourceList = (resource) => {
  const [resources, setresources] = useState([]);
  useEffect(() => {
    (async (resource) => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      );
      setresources(response.data);
    })();
  }, [resource]);

  return resources;
};
export { useResourceList };
