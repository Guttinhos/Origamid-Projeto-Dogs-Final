import React from 'react';
import TokenPost from './endpoints/TokenPost';
import UserPost from './endpoints/UserPost';

const Api = () => {
  return (
    <div>
      User Post
      <UserPost />
      <h2>Token Post</h2>
      <TokenPost />
    </div>
  );
};

export default Api;
