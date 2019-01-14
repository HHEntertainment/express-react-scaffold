const mockUser = {
  tel: '01091251372',
  password: '1212',
  sellerLevel: 3,
  joinDate: 'date',
  isAuthenticated: true,
};

const query = {
  User: async (parent, args, context, info) => {
    return mockUser;
  },
};

const mutation = {
  addUser: async (parent, args, context, info) => {
    return mockUser;
  },
  updatePassword: async (parent, args, context, info) => {
    return mockUser;
  },
  signIn: async (parent, args, context, info) => {
    return mockUser;
  },
};

export default {
  Query: query,
  Mutation: mutation,
};
