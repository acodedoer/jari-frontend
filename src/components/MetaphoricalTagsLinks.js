import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import MetaphoricalIcon from '@material-ui/icons/Comment';

const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });

const DisplayLiteralTagsLinks = () => {
    const classes = useStyles();

    const {data, loading, error} = useQuery(gql`{
        allMetaphoricalTags{
              tag
          }}
          `);
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

    return (
      data.allMetaphoricalTags.map(({tag}) => (
        <ListItem button className={classes.nested}>
            <ListItemIcon>
                <MetaphoricalIcon style={{fontSize:"medium", fill: "#FFC857"}}/>
                </ListItemIcon>
            <ListItemText primary= {tag} />
        </ListItem>
      )))
      };


export default DisplayLiteralTagsLinks;