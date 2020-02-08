import React from 'react';
import './Aside.css';

const Aside = props => {
  return (
    <div className="Aside">
      <h1>Real-Time and Historical World Weather Data API</h1>
      <h3>
        Retrieve instant, accurate weather information for any location in the
        world in lightweight JSON format
      </h3>
      <form>
        <input
          id="search-input"
          className="search-input"
          type="text"
          placeholder="Enter a place!"
          onDoubleClick={props.submit}
        />
      </form>
    </div>
  );
};

export default Aside;
