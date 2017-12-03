import React, { Component } from 'react';

export default class RecursiveComponent extends Component {
  entryComponent() {
    return (
      <div className="box">
        {this.props.components.shift()}
        {this.props.components.length ? <RecursiveComponent components={this.props.components} /> : ''}
      </div>
    );
  }

  render() {
    return this.entryComponent();
  }
};
