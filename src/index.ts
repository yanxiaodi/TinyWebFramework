import { User } from './models/User';

const user = new User({ name: 'Xiaodi', age: 20 });
console.log(user.get('name'));
console.log(user.get('age'));

user.set({ name: 'Tom' });
console.log(user.get('name'));
console.log(user.get('age'));
