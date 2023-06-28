import { useState, useEffect } from 'react';

function Async() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
      setError(error.toString());
    }
  };

  //   fetchData();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='fetch'>
      <hr />
      <h2>async await</h2>
      {data ? (
        <div>
          <h3>{data.author}</h3>
          <p>
            <em>&quot;{data.content}&quot;</em>
          </p>
        </div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        'Loading...'
      )}
      <button onClick={fetchData} className='btn_green'>
        INSPIRE ME
      </button>
    </div>
  );
}

export default Async;
