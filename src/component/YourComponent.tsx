/*
 * File Created: 2019-09-09 09:09:09
 * Author: jc
 * Desc: 
 */

import React, { Component } from 'react';

export interface YourComponentProps {
  name: string;
}

export interface YourComponentState {
  name: string;
}

export default class YourComponent extends Component<YourComponentProps, YourComponentState> {


  constructor(props) {
    super(props);

    // this.state = {
    //   data: null,
    // }
  }

  componentDidMount() {
    // do something
  }

  render() {
    const { name } = this.props;
    return <p className="your-component">Hello, {name}!</p>;
  }
}
