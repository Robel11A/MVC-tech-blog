const userData = [
    {
      username: 'user1',
      password: 'password123'
    },
    {
      username: 'user2',
      password: 'password123'
    },
    {
      username: 'user3',
      password: 'password123'
    },
  ];
  
  const postData = [
    {
      title: 'First Post',
      content: 'This is the content for the first post.',
      user_id: 1
    },
    {
      title: 'Second Post',
      content: 'This is the content for the second post.',
      user_id: 2
    },
    {
      title: 'Third Post',
      content: 'This is the content for the third post.',
      user_id: 3
    },
  ];
  
  const commentData = [
    {
      comment_text: 'This is a comment on the first post.',
      user_id: 2,
      post_id: 1
    },
    {
      comment_text: 'This is another comment on the first post.',
      user_id: 3,
      post_id: 1
    },
    {
      comment_text: 'This is a comment on the second post.',
      user_id: 1,
      post_id: 2
    },
  ];
  
  module.exports = { userData, postData, commentData };
  