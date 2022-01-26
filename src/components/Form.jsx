import React from 'react';
const Form = ({ setFilter, setFilterString }) => {
  const handleChange = (e) => {
    setFilterString(e.target.value);
  };

  return (
    <form className="form" onSubmit={(e) => e.target.preventDefault}>
      <input
        type="text"
        className="form__input"
        placeholder="Filter by:"
        onChange={(e) => handleChange(e)}
      />
      <select
        className="form__select"
        name=""
        id=""
        onChange={(e) => {
          setFilter(e.target.value),
            (document.cookie = `filter = ${e.target.value}`);
        }}
      >
        <option></option>
        <option value="name">name</option>
        <option value="size">size</option>
        <option value="date">date</option>
      </select>
    </form>
  );
};
export default Form;
