import { useEffect, useState } from "react";
import axios from "axios";

export const withResourceData = (Component, resourcesUrl, resourceName) => {
  return (props) => {
    const [data, setData] = useState(null);

    const fetchData = async () => {
      const response = await axios.get(resourcesUrl);
      setData(response.data);
    };

    useEffect(() => {
      fetchData();
    }, []);

    return <Component {...props} {...{ [resourceName]: data }} />;
  };
};
