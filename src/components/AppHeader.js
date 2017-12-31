import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.svg'
import Octopus from '../images/octopus.png'

export default class AppHeader extends React.Component {
  state = { showSearch: false }
  toggleSearch = () => this.setState({ showSearch: !this.state.showSearch })
  render() {
    return (
      <div className="pa4 flex justify-between">
        <Link to="/" className="flex items-center">
          <img src={Octopus} alt="Octopus" className="h2 mr2" />
          <img src={Logo} alt="Shpred" className="h1" />
        </Link>
        <div>
          {this.state.showSearch && (
            <input type="text" onChange={this.handleSearch} autoFocus />
          )}
          <button onClick={this.toggleSearch} className="b0 pa1">
            <i className="fa fa-search" />
          </button>
        </div>
      </div>
    )
  }
}
