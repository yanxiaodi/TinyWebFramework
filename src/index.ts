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

import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';

// axios.post('http://localhost:3000/users', {
//   name: 'myname',
//   age: 20,
// });

//const user = new User({ id: 1 });

// user.set({ name: 'NEW NAME', age: 50 });

//const user = new User({ name: 'Jason', age: 40 });
// const user = User.buildUser({ id: 1 });
//console.log(user.get('name'));
// user.save();
//user.set({ name: 'New Name' });

// const user = User.buildUser({ id: 1 });

// user.on('save', () => {
//   console.log(user);
// });

// user.fetch();

// user.save();

const collection = User.buildUserCollection();
collection.on('çhange', () => {
  console.log(collection);
});
collection.fetch();
