import { useState } from "react";
import axios from "axios";
import { RAPID_API_KEY } from "../env";
const API_KEY = RAPID_API_KEY;
export default function useFetchWithPagination({ id }) {
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [page, setPage] = useState(1);

  const handleSearch = async () => {
    setIsLoading(true);
    setSearchResult([]);

    try {
      const options = {
        method: "GET",
        url: `https://jsearch.p.rapidapi.com/search`,
        headers: {
          "X-RapidAPI-Key": API_KEY,
          "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
        params: {
          query: id,
          page: page.toString(),
        },
      };

      const response = await axios.request(options);
      setSearchResult(response.data.data);
    } catch (error) {
      setSearchError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    searchError,
    searchResult,
    setIsLoading,
    page,
    setPage,
    isLoading,
    handleSearch,
  };
}
