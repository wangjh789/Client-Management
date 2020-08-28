import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from "./components/Customer"

const customers = [
  {
    "id": 1,
    "img": "http://placeimg.com/64/64/1",
    "name": "홍길동",
    "birth": "970727",
    "gender": "남자",
    "job": "대학생",
  },
  {
    "id": 2,
    "img": "http://placeimg.com/64/64/2",
    "name": "왕종이",
    "birth": "970727",
    "gender": "남자",
    "job": "대학생",
  },
  {
    "id": 3,
    "img": "http://placeimg.com/64/64/3",
    "name": "우앙잉",
    "birth": "970727",
    "gender": "남자",
    "job": "대학생",
  }
]

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              img={c.img}
              gender={c.gender}
              birth={c.birth}
              name={c.name}
              job={c.job} />
          );
        })
      }
    </div>
  );
}

export default App;
