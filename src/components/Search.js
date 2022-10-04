import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>

      {
        <div className="userChat" onClick>
          <img
            src="https://images.pexels.com/photos/13586038/pexels-photo-13586038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="userChatInfo">
            <span>Jane Brown</span>
          </div>
        </div>
      }
    </div>
  );
};

export default Search;
