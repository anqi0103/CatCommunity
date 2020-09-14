import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePicture: [],
    };
  }

  render() {
    return (
      <div className="CatProfile">
        <img
          className="EachProfile"
          src={this.props.eachCat.imageURL}
          alt="catImage"
        />
      </div>
    );
  }
}

export default Profile;
