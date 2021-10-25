import { useState, ueEffect } from 'react';

import { Wrapper, Content } from './Grid.styles';

const apiKey = process.env.REACT_APP_API_KEY;

const Grid = () => {
  const [state, setState] = useState();
  const baseUrl = `https://api.themoviedb.org/3/`;
  const req = `${baseUrl}trending/movie/week?api_key=${apiKey}`;

  useEffect(()=> fetch(req)
    .then(res => res.json())
    .then(data => {
      console.log(data.results);
      setState(data.results);
    }),[]
  )

  return <Wrapper></Wrapper>;
};

export default Grid;
