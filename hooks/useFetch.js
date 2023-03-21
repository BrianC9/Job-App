import { useState, useEffect } from "react";
import axios from "axios";
import { RAPID_API_KEY } from "../env";
export function useFetch({ endpoint, query }) {
  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState();

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": RAPID_API_KEY,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };
  const fetchData = async () => {
    setisLoading(true);
    try {
      const response = await axios.request(options);
      setdata(response.data.data);
    } catch (error) {
      setError(error);
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refecth = () => {
    fetchData();
  };
  return { data, isLoading, error, refecth };
}
