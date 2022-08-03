var Welcome = createReactClass({
  propTypes: {
    user: PropTypes.string
  },

  render: function() {
    return (
      <React.Fragment>
        User: {this.props.user}
      </React.Fragment>
    );
  }
});

