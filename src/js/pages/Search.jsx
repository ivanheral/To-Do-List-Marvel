import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import ListHeroes from '../components/listHeroes';
import { css } from 'emotion';

export default () => {
  const [data, setData] = useState({});
  const [query, setQuery] = useState("");

  const getData = () => {
    fetch(
      `https://gateway.marvel.com/v1/public/characters?limit=12&nameStartsWith=${query}&apikey=50bc3a700882c62352eb1e9ee5c6c043`
    ).then((response) => {
      return response.json();
    })
      .then((json) => {
        setData(json.data);
      });
  };

  useEffect(
    () => {
      getData();
    }, [query]
  );

  return (
    <div>
      <input className={css`
        border-box: box-sizing;
        margin: 10px auto;
        width: 120px;
        display: block;
        padding: 5px;
        `}
        type="text"
        value={query}
        onKeyDown={e => { if (e.key === "Enter") setQuery(e.target.value) }} />
      <ListHeroes {...data} />
    </div>
  );
}
