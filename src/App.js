import React from 'react';
import './App.css';

function App() {
  return (
    <div>
        <header>
      <div className="left-section">
        <a href="https://mail.google.com">Gmail</a>
        <a href="">Images</a>
      </div>
      <div className="right-section">
        <img id="products" src="products.png" alt="Products" />
        <img id="bell" src="bell.png" alt="Bell" />
        <img id="share" src="share.png" alt="Share" />
      </div>
    </header>

      <div className="main">
        <img className="logo-img" src="google.png" alt="Google Logo" />
        <input className="search-input" type="text" />
        <div className="btn-wrapper">
          <button className="btn">Google Search</button>
          <button className="btn">I'm Feeling Lucky</button>
        </div>
      </div>
    </div>
  );
}

export default App;
