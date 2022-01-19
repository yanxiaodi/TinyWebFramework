import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save-model': this.onSaveClick,
    };
  }
  onSetAgeClick = (): void => {
    console.log('Hi there');
    this.model.setRandomAge();
  };

  onSetNameClick = () => {
    const input = this.parent.querySelector('input');
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  onSaveClick = () => {
    this.model.save();
  };

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>User Name: ${this.model.get('name')}</div>
        <div>User Age: ${this.model.get('age')}</div>
        <input placeholder='${this.model.get('name')}'/>
        <button class='set-name'>Click Me!</button>
        <button class='set-age'>Set random age</button>
        <button class='save-model'>Save User</button>
      </div>
    `;
  }
}
