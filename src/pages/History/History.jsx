import React from 'react';

import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import s from './history.module.css';

const History = () => {
  const { user } = useSelector((store) => store.user);
  let { history } = user;

  return (
    <section className={s.history}>
      <h2>History</h2>
      <ul>
        {history.map((url) => {
          const [param, year, time] = url.split(' ');
          return (
            <li key={year + time}>
              <Link to={`/?search=${param}`}>{param}</Link>
              <span>{year + ' ' + time}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default History;
