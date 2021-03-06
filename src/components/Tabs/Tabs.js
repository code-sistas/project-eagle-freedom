import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Tabs.css";

export default class Tabs extends Component {
  constructor() {
    super();
    this.state = {
      selected: 0
    };
  }

  handleClick(index) {
    this.setState({
      selected: index
    });
  }

  renderPanes() {
    var children = React.Children.toArray(this.props.children);

    function createLabels(child, index) {
      return (
        <div
          className="tab-label"
          key={index}
          onClick={this.handleClick.bind(this, index)}
        >
          {child.props.label}
        </div>
      );
    }

    return (
      <div className="tab-labels">{children.map(createLabels.bind(this))}</div>
    );
  }

  renderContent() {
    var children = React.Children.toArray(this.props.children);

    return (
      <div>
        <hr
          className={`line${this.state.selected}`}
          style={{ transition: "1s" }}
        />
        <div className="tabs-content">
          {children[this.state.selected].props.content}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="tab">
        {this.renderPanes()}
        {this.renderContent()}
      </div>
    );
  }
}

Tabs.propTypes = {
  selected: PropTypes.number,
  index: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired
};
