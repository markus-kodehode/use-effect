import { useEffect, useState } from "react";
import "./App.css";

/* 
UTEN DEPENDCY ARRAY
useEffect(() => {
  kode her }) 
  Kjørt etter hver rerender.

MED TOMT DEPENDENCY ARRAY
useEffect(() => {
  kode her
  }, [])
  Kjørt KUN on mount

MED DEPENDENCY ARRAY
useEffect(() => {
  kode her
  }, [count])
  Kjørt hver gang count oppdateres og rerendrer komponenten
*/

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        if (!response.ok) {
          throw new Error(`HTTP error. Stats ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <h2 style={{ color: "red" }}>Error: {error}</h2>}
      {data && (
        <div>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
}

export default App;
