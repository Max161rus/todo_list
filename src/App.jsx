import { useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import style from './App.module.css';

const App = () => {

  const [data, dataChange] = useState(setStorage());

  const [filter, dataFilter] = useState('all');

  function setStorage() {
    if (localStorage.getItem('dataList') !== null) {
      return JSON.parse(localStorage.getItem('dataList'));
    }
    if (localStorage.getItem('dataList') === null) {
      return []
    }

  }

  return (
    <section className={style.todoapp}>
      <Header dataChange={dataChange} data={data} />
      <Main dataChange={dataChange} data={data} filter={filter} />
      <Footer dataChange={dataChange} data={data} filter={filter} dataFilter={dataFilter} />
    </section>
  );
}

export default App;
