const mockBoard = {
  id: 'Board id',
  title: 'Board title',
  readLevel: 1,
  writeLevel: 1,
};

const query = {
  Board: async (parent, args, context, info) => {
    return mockBoard;
  },
  AllBoards: async (parent, args, context, info) => {
    return [mockBoard];
  },
};

export default {
  Query: query,
};
