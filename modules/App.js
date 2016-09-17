import React from 'react'
import { Link } from 'react-router'
import NavLink from './navLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <NavLink />
        </ul>
        {this.props.children}
      </div>
    )
  }
})
