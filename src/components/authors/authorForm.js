"use strict";

var React = require('react');
var Input = require('../common/textInput');

var AuthorForm = React.createClass({
  render: function() {
    return(
        <form>
          <h1>Manage Author</h1>
          <Input
              name="firstName"
              label="First Name"
              onChange={this.props.onChange}
              value={this.props.author.firstName} />

          <Input
              name="lastName"
              label="Last Name"
              onChange={this.props.onChange}
              value={this.props.author.lastName} />

          <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
        </form>
    );
  }
});

module.exports = AuthorForm;
