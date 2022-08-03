import React from "react"
import PropTypes from "prop-types"
class Welcome extends React.Component {
  render () {
    return (
      <React.Fragment>
        User: {this.props.user.name}
      </React.Fragment>
    );
  }
}

Welcome.propTypes = {
  user: PropTypes.string
};
export default Welcome
