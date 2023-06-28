import { useState, useEffect } from 'react';

function Basics() {
  const [name, setName] = useState('');

  // Every single useEffect always fire on first render
  // On every render
  useEffect(() => {
    console.log(`I 've been re-rendered`);
  });

  // On first Render/Mount only! - componentDidMount Alternative
  useEffect(() => {
    // console.log('The component has been mounted');
  }, []);

  // On first Render + whenever dependancy changes! - componentDidUpdate Alternative
  useEffect(() => {
    // console.log(`The name changed!: ${name}`);

    return () => {
      //cleanup...
      //   console.log('Unmounted...');
    };
  }, [name]);

  useEffect(() => {
    const timer = setInterval(() => {
      //   console.log('This will run every second!');
    }, 1000);

    return () => {
      clearInterval(timer);
      //   console.log('Cleaned up!');
    };
  }, []);

  return (
    <div>
      <h2>useEffect Hook</h2>
      <input
        className='cooltext'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Type something!'
      />
    </div>
  );
}

export default Basics;
