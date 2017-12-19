import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { lock, Auth } from '../../Auth/Auth.js';

const auth = new Auth();

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      id: 1,
    };

    this.registerFunc = this.registerFunc.bind(this);
    this.logout = this.logout.bind(this);
    this.setState = this.setState.bind(this);
  }

  componentWillMount() {
    auth.handleAuthentication();
    axios.get(`/api/merchants/bySub/${localStorage.idToken}`).
          then(res => this.setState({ sub: res.data.id }))
  }

  registerFunc() {
    auth.login();
  }

  logout() {
    auth.logout();
  }


  // <Link to="browse"><h4>Browse Content</h4></Link>

  render() {
    if (!auth.isAuthenticated()) {
      return (
        <div className="header__container">
          <Link className="header__logo" to="/" />
          <div className="header__social">
            <p>Best Global Market: Immersive experience!</p>
          </div>
          <div className="header__account--register">
            <button className="hvr-icon-pulse btn--profile" onClick={this.registerFunc}>Register/Login</button>
          </div>
        </div>
      );
    }
    return (
      <div className="header__container">
        <Link className="header__logo" to="/" />
          <img src="https://otove.files.wordpress.com/2012/12/tumblr_menq9ehdxq1rj9sw5o1_400.gif" />
        </Link>
        <div className="nav__container--header">
          <Link to={`/merchant_profile/${this.state.sub}`} >
							Merchant Profile
          </Link>
          <Link to={`/manage_store/${this.state.sub}`}>
							Manage Store
          </Link>
          <Link to={`/broadcast/${this.state.sub}`}>
>>>>>>> Link to logged-in merchant's profile in header.
							Broadcast
          </Link>
        </div>
        <div className="header__account--register">
          <button className="hvr-icon-pulse btn--profile" onClick={this.logout}>Logout</button>
        </div>
      </div>
    );
  }
}

export default Header;
