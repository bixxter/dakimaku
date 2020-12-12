import React from 'react';

export default function Search() {
  return (
      <form>
        <div className="input-field">
          <input id="search" type="search" required />
          <label className="label-icon" htmlFor="search">
            <i className="material-icons">search</i>
          </label>
        </div>
      </form>
  );
}
