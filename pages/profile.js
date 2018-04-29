import React, { Component } from 'react'

export default class extends Component {
  static getInitialProps ({ query: { id } }) {
    return { postId: id }
  }

  render () {
    return (<h1>Profile #{this.props.postId}</h1>)
  }
}
