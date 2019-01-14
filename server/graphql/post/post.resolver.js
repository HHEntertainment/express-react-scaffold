const mockPost = {
  id: 'Post id',
  complete: true,
  expirationDate: 'date',
  author: 'Post author',
  price: 7500,
  title: 'Post title',
  content: 'Post content',
  createdAt: 'date',
  updatedAt: 'date',
  boardId: 'Board id',
  views: 1000,
  type: '대리예매',
};

const query = {
  Post: async (parent, args, context, info) => {
    return mockPost;
  },
  Posts: async (parent, args, context, info) => {
    return [mockPost];
  },
};

const mutation = {
  addPost: async (parent, args, context, info) => {
    // DB write post logic
    return mockPost;
  },
  updatePostTitle: async (parent, args, context, info) => {
    // DB update post title logic
    return mockPost;
  },
  updatePostContent: async (parent, args, context, info) => {
    // DB update post content logic
    return mockPost;
  },
  updatePostPrice: async (parent, args, context, info) => {
    // DB update post price logic
    return mockPost;
  },
};

export default {
  Query: query,
  Mutation: mutation,
};
