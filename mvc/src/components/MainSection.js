import React from 'react';
import TodoList from './TodoList';
import Footer from './Footer';

const MainSection = () => (
  <section className="main">
    主要内容
    <TodoList />
    <Footer />
  </section>
)

export default MainSection;
