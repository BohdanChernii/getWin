import React, { useState, useEffect } from 'react';
import Form from './Form';
import Main from './Main';
import readCookie from '../readCookie.js';
const App = () => {
  const [filter, setFilter] = useState('');
  const [images, setImages] = useState([]);

  const [filterString, setFilterString] = useState('');
  useEffect(() => {
    fetch(
      'https://prof.world/api/test_json_files/?token=6a06cc0050374e32be51125978904bd8'
    )
      .then((response) => response.json())
      .then((result) =>
        setImages(
          result.data.files.Folder1.concat(result.data.files.Folder2).concat(
            result.data.files.Folder3
          )
        )
      );
  }, []);
  const cookie = readCookie('filter');
  const filtered = images.filter((item) => {
    if (cookie === 'name') {
      return item.name.includes(filterString);
    }
    if (cookie === 'size') {
      return item.size == filterString;
    }
    if (cookie === 'date') {
      return item.atime == filterString;
    }
    return item;
  });
  console.log(filtered);
  return (
    <div className="page">
      <Form
        setFilter={setFilter}
        filter={filter}
        setFilterString={setFilterString}
      />
      <Main filter={filter} images={filtered} />
    </div>
  );
};
export default App;
