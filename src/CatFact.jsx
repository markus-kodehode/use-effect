import { useState, useEffect } from "react";

export default function CatFact() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("https://catfact.ninja/facts?limit=5");
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
    <div className="cat-facts">
      {loading && <p>Loading...</p>}
      {error && <h2 style={{ color: "red" }}>Error: {error}</h2>}
      {data && (
        <>
          <h1 className="cat-title">Cat facts</h1>
          {data.data.map((elem) => {
            return (
              <div className="cat-card">
                <p>{elem.fact}</p>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
