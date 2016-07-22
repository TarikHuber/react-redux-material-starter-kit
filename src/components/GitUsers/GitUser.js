import React, { PropTypes } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const GitUser = ({ user }) => {
  const { login, avatar_url, html_url } = user;
  const src = `https://ghbtns.com/github-btn.html?user=${login}&type=follow&count=true&size=large`;

  const styles={
    card:{
      margin: '8px',
    }
  }

  return (
    

    <div>
      <Card style={styles.card}>
        <CardHeader
          title={login}
          subtitle="Subtitle"
          avatar={avatar_url}
          >

        </CardHeader>

        <CardTitle title={<a href={ html_url } target="_blank">{login}</a>} subtitle="Card subtitle" />
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
          <iframe
            src={src}
            frameBorder="0"
            allowTransparency="true"
            scrolling="0"
            frameBorder="0"
            width="500"
            height="30">
          </iframe>
        </CardActions>
      </Card>
    </div>


  );
};

GitUser.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
  }).isRequired,
};

export default GitUser;
