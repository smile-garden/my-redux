import React from 'react';
import TodoTextInput from './TodoTextInput';

const Header = () => (
  <header className="header">
    <h1>todos</h1>
    <TodoTextInput
      newTodo
      onSave={(text) => {
        if (text.length !== 0) {
          // something
        }
      }}
      placeholder="what needs to be done?"
    />
  </header>
)

export default Header;
