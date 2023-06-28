import { useState, useEffect } from 'react';

function Fetch() {
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
      {data ? (
        <div>
          <h2>{data.author}</h2>
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

export default Fetch;
