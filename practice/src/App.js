import React from 'react';
import './App.css';
import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import UndoRedo from './containers/UndoRedo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        <UndoRedo />
      </header>
    </div>
  );
}

export default App;
