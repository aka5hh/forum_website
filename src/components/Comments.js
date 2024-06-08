import React from 'react';
import { List, ListItem, ListItemText, Divider , Typography} from '@mui/material';

const Comments = ({ comments }) => {
  return (
    <List>
      {comments.map((comment) => (
        <React.Fragment key={comment.id}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={comment.name}
              secondary={
                <>
                  <Typography component="span" variant="body2" color="textPrimary">
                    {comment.email}
                  </Typography>
                  {" — " + comment.body}
                </>
              }
            />
          </ListItem>
          <Divider component="li" />
        </React.Fragment>
      ))}
    </List>
  );
};

export default Comments;
