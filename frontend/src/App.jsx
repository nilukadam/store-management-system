import { useEffect } from "react";
import API from "./api/axios";

function App() {

  useEffect(() => {
    API.get("/health")
      .then(res => {
        console.log("API Response:", res.data);
      })
      .catch(err => {
        console.error("API Error:", err);
      });
  }, []);

  return (
    <div className="container mt-5 text-center">
      <h1 className="text-primary">Store Management System</h1>

      <button className="btn btn-success mt-4">
        Bootstrap Working
      </button>
    </div>
  );
}

export default App;