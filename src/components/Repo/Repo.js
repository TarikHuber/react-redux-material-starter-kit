import React, { PropTypes } from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const styles={

  card:{
    margin: '8px',
  }

}

const Repo = ({ repo, owner }) => (
  <div>
    <Card style={styles.card}>
      <CardHeader
        title={owner.login}
        subtitle={<a href={ owner.html_url } target="_blank">{owner.html_url}</a>}
        avatar={owner.avatar_url}>

      </CardHeader>

      <CardTitle title={repo.name} subtitle={<a href={ repo.html_url } target="_blank">{repo.html_url}</a>} />
      <CardText>
        {repo.description}
      </CardText>
      <CardActions>
        <iframe
          src={`https://ghbtns.com/github-btn.html?user=${owner.login}&type=follow&count=true&size=large`}
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

Repo.propTypes = {
  repo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    stargazers_count: PropTypes.number.isRequired,
  }).isRequired,
  owner: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Repo;
