import { useState } from 'react';

import { Wrapper } from './Hero.styles';

const apiKey = process.env.REACT_APP_API_KEY;

const Hero = () => {
  const [path, setPath] = useState('');

  const baseUrl = `https://api.themoviedb.org/3/`;
  const baseImageUrl = `https://image.tmdb.org/t/p/w1280`;
  const req = `${baseUrl}trending/movie/week?api_key=${apiKey}`;
  const img = `${baseUrl}configuration?api_key=${apiKey}`;

  fetch(img)
    .then(res => res.json())
    .then(data => console.log(data));

  fetch(req)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      console.log(data.results[0]);
      setPath(`${baseImageUrl}${data.results[0].poster_path}`);
    });

  return (
    <Wrapper>
      <img src={path} alt="" />
    </Wrapper>
  );
};
export default Hero;
