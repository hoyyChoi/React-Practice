import React, { Component } from 'react'

export default class Box extends Component {
  render() {
    return (
      <div>box{this.props.value}</div>
    )
  }
}
