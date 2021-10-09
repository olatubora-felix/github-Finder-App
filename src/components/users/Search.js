import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';


const Search = () => {

  const githubContext = useContext(GithubContext)
  const alertContext = useContext(AlertContext)

  const { users, clearUsers } = githubContext;
  const { setAlert } = alertContext;

  const [text, setText] = useState('')

  const onChange = (e) => {
    setText(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('')
    }

  };
 
    return (
      <div className="">
        <form className="form" onSubmit={onSubmit}>
          <input type="text"
            name="text"
            className="text"
            placeholder="Search User..."
            value={text}
            onChange={onChange}
          />
          <input type="submit"
            value="Saerch"
            className="btn btn-dark btn-block"
          />
        </form>
        {/* Clear User */}
        {
          users.length > 0
          &&
          <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>
        }
         
      </div>
    );
}


export default Search;
