import React, { useEffect } from "react";
import Table from './Table';
import axios from "axios";


function App() {
  const baseUrl = "http://localhost:8080";

  useEffect(() => {
    getTodos();
  }, []);

  async function getTodos() {
    await axios
      .get(baseUrl + "/api/v1/post/list")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <Table/>
  );
}

export default App;
