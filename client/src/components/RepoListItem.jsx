import React from 'react';

const RepoListItem = (props) => (
  <div>
    <h4> Repo ListItem Component </h4>
    {props.repo.id}<br/>
    {props.repo.name}<br/>
    {props.repo.html_url}<br/>
    {props.repo.description}<br/>
    {props.repo.forks_count}<br/>
    <br/>


  </div>
)

export default RepoListItem;