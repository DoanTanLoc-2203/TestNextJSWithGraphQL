let school = [
  {
    id: 1,
    name: "Dai hoc Back Khoa",
    address: "Quan 10",
  },
  {
    id: 2,
    name: "Dai hoc Hong Bang",
    address: "Quan 2",
  },
  {
    id: 3,
    name: "Dai hoc Suu Pham Ky Thuat",
    address: "Quan Thu Duc",
  },
  {
    id: 4,
    name: "Dai hoc Ton Duc Thang",
    address: "Quan 7",
  },
];

let user = [
  {
    id: 1,
    name: "Doan Tan Loc",
    age: 21,
    schoolID: 1,
  },
  {
    id: 2,
    name: "Nguyen Tai",
    age: 21,
    schoolID: 4,
  },
  {
    id: 3,
    name: "Nguyen Van Dui",
    age: 30,
    schoolID: 2,
  },
  {
    id: 4,
    name: "Nguyen Van A",
    age: 28,
    schoolID: 3,
  },
];

export const resolvers = {
  Mutation: {
    createUser: (parent: any, agrs: any) => {
      user.push(agrs);
      return agrs;
    },
  },

  Subscription: {
    newUser: (parent: any, agrs: any) => agrs,
  },

  Query: {
    Users: () => user,
    Schools: () => school,
    User: (parent: any, agrs: any) => {
      user.push(agrs);
      return user.find((user) => user.id == agrs.id);
    },
    School: (parent: any, agrs: any) => {
      return school.find((school) => school.id == agrs.id);
    },
  },

  User: {
    schoolID: (parent: any, agrs: any) => {
      return school.find((school) => school.id == parent.id);
    },
  },
};
