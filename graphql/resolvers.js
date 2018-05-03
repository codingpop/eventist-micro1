const users = [
  {
    firstName: 'Dele',
    lastName: 'Bayo',
    email: 'del@bay.com',
    password: 'sdafdfaA121@',
  },
  {
    firstName: 'Dele',
    lastName: 'Bayo',
    email: 'del@bay.com',
    password: 'sdafdfaA121@',
  },
];

export const resolvers = {
  Query: {
    users: () => users,
    user: (root, { id }) => users.find(user => user.id === id),
  },
  Mutation: {
    addUser: (root, user) => {
      users.push(user);

      return user;
    },
  },
};
