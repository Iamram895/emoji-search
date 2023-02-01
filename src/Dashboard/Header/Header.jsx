import React, { PureComponent } from 'react'
import "./Header.css"

export default class Header extends PureComponent {
  render() {
    return (
      <header className="header">
        <img src="https://www.freepnglogos.com/uploads/instagram-logo-png-transparent-0.png" alt="instagram logo" width={20} height={20} /> 
        Emoji Search
        <img src="https://www.freepnglogos.com/uploads/instagram-logo-png-transparent-0.png" alt="instagram logo" width={20} height={20} />
     
      </header>

    )
  }
}
