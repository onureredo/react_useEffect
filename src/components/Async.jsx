import { useState, useEffect } from 'react';

function Async() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    setData(data);
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
