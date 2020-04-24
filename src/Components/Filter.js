import React from 'react';

const Filter = (props) => {
  function HandleFilter(ev) {
    ev.preventDefault();
    props.handleInputData({
      value: ev.currentTarget.value,
      name: ev.currentTarget.name,
    });
  }
  return (
    <div className='form' onSubmit={props.onSubmit}>
      <form>
        <input
          className='form-input-text'
          placeholder='Search'
          type='search'
          name='name'
          key='search'
          value={props.value}
          onChange={HandleFilter}
        ></input>
      </form>
    </div>
  );
};

export default Filter;
