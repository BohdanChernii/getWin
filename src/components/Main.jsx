import React from 'react';
const Main = ({ images }) => {
  return (
    <main className="main">
      {images.map((item) => (
        <div className="main__item" key={item.index + item.name}>
          <img src="" alt={item.name} className="main__item-image" />
        </div>
      ))}
    </main>
  );
};
export default Main;
