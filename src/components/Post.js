import React, { useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Button, Collapse } from '@mui/material';
import Comments from './Comments';

const Post = ({ post, users }) => {
  const [comments, setComments] = useState([]);
  const [commentsVisible, setCommentsVisible] = useState(false);
  const [loadingComments, setLoadingComments] = useState(false);

  const user = users.find((user) => user.id === post.userId);

  const toggleComments = async () => {
    if (!commentsVisible) {
      setLoadingComments(true);
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
        setComments(response.data);
        setLoadingComments(false);
      } catch (error) {
        console.error('Error fetching comments:', error);
        setLoadingComments(false);
      }
    }
    setCommentsVisible(!commentsVisible);
  };

  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h5">{post.title}</Typography>
        <Typography variant="subtitle1" color="textSecondary">
          by {user ? user.name : 'Unknown'}
        </Typography>
        <Typography variant="body1" paragraph>
          {post.body}
        </Typography>
        <Button variant="outlined" onClick={toggleComments}>
          {commentsVisible ? 'Hide Comments' : 'Show Comments'}
        </Button>
        <Collapse in={commentsVisible}>
          {loadingComments ? (
            <Typography variant="body2" color="textSecondary">
              Loading comments...
            </Typography>
          ) : (
            <Comments comments={comments} />
          )}
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default Post;
