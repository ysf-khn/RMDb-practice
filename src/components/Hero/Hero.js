import { useState } from 'react';

import { Wrapper } from './Hero.styles';

const apiKey = process.env.REACT_APP_API_KEY;

const Hero = () => {
  const [path, setPath] = useState('');
  const [title, setTitle] = useState('');
  const [overview, setOverview] = useState('');
  const [rating, setRating] = useState('');
  const [date, setDate] = useState('');

  const baseUrl = `https://api.themoviedb.org/3/`;
  const baseImageUrl = `https://image.tmdb.org/t/p/w1280`;
  const req = `${baseUrl}trending/movie/week?api_key=${apiKey}`;

  fetch(req)
    .then(res => res.json())
    .then(data => {
      setPath(`${baseImageUrl}${data.results[0].poster_path}`);
      setTitle(`${data.results[0].original_title}`);
      setOverview(`${data.results[0].overview}`);
      setRating(`${data.results[0].vote_average}`);
      setDate(`${data.results[0].release_date}`);
    });

  return (
    <Wrapper>
      <img src={path} alt="" />
      <div className="details">
        <h1 className="title">{title}</h1>
        <p className="overview">{overview}</p>
        <h3>Release Date: {date}</h3>
        <h3>{rating} 🌟</h3>
      </div>
    </Wrapper>
  );
};
export default Hero;
