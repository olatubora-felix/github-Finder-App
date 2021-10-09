import React, {Fragment, useEffect, useContext} from 'react';
import Spinner from '../layouts/Spinner';
import Repos from '../repos/Repos'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import GithubContext from '../../context/github/githubContext';


const User = ({ match }) => {

  const githubContext = useContext(GithubContext)
  const { user, getUser, loading, getUserRepos } = githubContext;
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    console.log(getUserRepos(match.params.login));
    // eslint-disable-next-line
  }, []);
  
    const {
      name,
      company,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      following,
      followers,
      public_repos,
      public_gists,
      hireable
    } = user;

    if(loading) return <Spinner />
    return (
      <Fragment>
        <Link to="/" className='btn btn-light'>
          Back to search
        </Link>
        Hireable: {''}
        {
          hireable ?
            (<i className='fa fa-check text-success' />) :
            (<i className='fa fa-times-circle text-danger' />)
        }
        <div className="card grid-2">
          <div className="all-center">
            <img src={avatar_url}
              alt="UserImage"
              className='round-img'
              style={{ width: '150px' }}
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio
              &&
              (<Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
              </Fragment>)}
            <a href={html_url} className="btn btn-dark my-1">Visit Github Profile</a>
            <ul>
              <li>
                {login
                  &&
                  (<Fragment>
                    <strong>Username:</strong> {login}
                  </Fragment>)
                }
              </li>
              <li>
                {company
                  &&
                  (<Fragment>
                    <strong>Company:</strong> {company}
                  </Fragment>)
                }
              </li>
              <li>
                {blog
                  &&
                  (<Fragment>
                    <strong>Website:</strong> {blog}
                  </Fragment>)
                }
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
            <div className="badge badge-primary">Followers: {followers}</div>
            <div className="badge badge-success">Following: {following}</div>
            <div className="badge badge-light">public_repos: {public_repos}</div>
            <div className="badge badge-dark">public_gists: {public_gists}</div>
        </div>
        <Repos/>
      </Fragment>
    )
}

User.propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
    repos: PropTypes.object.isRequired,
  }

export default User
