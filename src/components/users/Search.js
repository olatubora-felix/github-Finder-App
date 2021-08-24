import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Search extends Component {
  state = {
    text: ''
  };

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter something', 'light');

    } else {
      this.props.searchUsers(this.state.text);
      this.setState({text: ''})
    }

  };
  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
}
  render() {
    const {showClear, clearUsers} = this.props
    return (
      <div className="">
        <form className="form" onSubmit={this.onSubmit}>
          <input type="text"
            name="text"
            className="text"
            placeholder="Search User..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input type="submit"
            value="Saerch"
            className="btn btn-dark btn-block"
          />
        </form>
        {/* Clear User */}
        {
          showClear
          &&
          <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>
        }
         
      </div>
    );
  }
}

export default Search;