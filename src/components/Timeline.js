import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from './Post';
import { CircularProgress, Box } from '@mui/material';

const Timeline = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
        
        const postsData = postsResponse.data;
        const usersData = usersResponse.data;

        postsData.sort((a, b) => b.id - a.id);

        setPosts(postsData);
        setUsers(usersData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={5}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} users={users} />
      ))}
    </div>
  );
};

export default Timeline;
