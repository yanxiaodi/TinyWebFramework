// import { User } from './models/User';

// const user = new User({ name: 'Xiaodi', age: 20 });
// console.log(user.get('name'));
// console.log(user.get('age'));

// user.set({ name: 'Tom' });
// console.log(user.get('name'));
// console.log(user.get('age'));

// user.on('change', () => {
//   console.log('test #1');
// });
// user.on('change', () => {
//   console.log('test #2');
// });
// user.on('save', () => {
//   console.log('save triggered');
// });
// console.log(user);
// user.trigger('change');

import { User } from './models/User';

// axios.post('http://localhost:3000/users', {
//   name: 'myname',
//   age: 20,
// });

const user = new User({ id: 1 });

// user.set({ name: 'NEW NAME', age: 50 });

//const user = new User({ name: 'Jason', age: 40 });

console.log(user.get('name'));
// user.save();

user.on('change', () => {
  console.log(user);
});

//user.set({ name: 'New Name' });

user.fetch();
