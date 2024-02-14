import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log('from class', props)
  }

  render() {
    return (
      <div className="admin-card">
        <h2>UserClass</h2>
        <h3>{this.props.role}</h3>
        <h3>{this.props.address}</h3>
      </div>
    );
  }
}

export default UserClass;
