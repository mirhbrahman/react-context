import React, { Component } from 'react'

export default class LanguageSelector extends Component {
  render() {
    return (
      <div>
        <div>
          Select a language:
          <i className="flag us" onClick={() => this.props.onLanguageChange('english')} />
          <i className="flag nl" onClick={() => this.props.onLanguageChange('dutch')} />
        </div>
      </div>
    )
  }
}
