import { useState, useEffect } from 'react';

function Fetch() {
  const [data, setData] = useState(null);

  const fetchData = () => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  };

  //   fetchData();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='fetch'>
      <hr />
      <h2>Fetch</h2>
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

export default Fetch;
