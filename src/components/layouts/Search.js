import React from 'react';

export default function Search() {
  return (
    <div className="right">
      <form>
        <div className="input-field">
          <input id="search" type="search" required />
          <label className="label-icon" for="search">
            <i className="material-icons">search</i>
          </label>
        </div>
      </form>
    </div>
  );
}
