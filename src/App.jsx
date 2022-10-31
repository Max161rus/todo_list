import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import style from './App.module.css';

const App = () => {

  const [data, setData] = useState([]);

  const [id, setId] = useState(1);

  const settingId = () => {
    setId(id => id + 1);
    return id;
  };

  const addTodo = value => {
    const newTodo = {
      todoText: value,
      activityFlag: true,
      editingTodo: false,
      id: settingId()
    };
    setData([...data, newTodo]);
  }

  const deleteTodo = newData => {
    setData(newData);
  }

  const deleteСompletedTodos = newData => {
    setData(newData);
  }

  const activitySwitch = newData => {
    setData(newData);
  }

  return (
    <section className={style.todoapp}>
      <Header addTodo={addTodo} data={data} />
      <Main data={data} deleteTodo={deleteTodo} activitySwitch={activitySwitch} />
      {data.length > 0 ? <Footer data={data} deleteСompletedTodos={deleteСompletedTodos} /> : null}
    </section>
  );
}

export default App;
