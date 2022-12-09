import { useEffect, useState } from 'react';
import Fletch from './assets/images/Fletch.svg';
import Logo from './assets/images/Logo.svg';
import './App.css';

const App = () => {
  const [food, setFood] = useState({});
  let data = null;

  const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=9&tags=under_30_minutes';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'fc70595eb1msh3da63f66b1b7ce5p19f6bcjsnaff40b5cae6a',
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
  };
  
  
  useEffect(() => {
    fetch(url, options)
      .then(res => res.json())
      .then(json => setFood(json.results))
      .catch(err => console.error('error:' + err));
  }, []);

  return (
    <div className="App">
      <header>
        <img src={Logo} alt="Big Cartel Logo" className="logo" />
        <img src={Fletch} alt="Fletch Menu" className="fletch" />
      </header>
      <main>
      {
        food.length &&
        food.map((item) => (
          <div className="card">
            <div className="image" style={{ backgroundImage: `url(${item.thumbnail_url})` }} />
            <div className='content'>
              <h2>{item.name}</h2>
              <p>{item.description.length > 110 ? `${item.description}...` : item.description}</p>
            </div>
          </div>
        ))
      }
      </main>
    </div>
  );
}

export default App;
