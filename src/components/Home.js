import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSymbols } from '../redux/home/homeSlice';
import HomeItem from './HomeItem';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const [symbolsToShow, setSymbolToShow] = useState([]);
  const symbols = useSelector((state) => state.homeStore.symbols);

  const handleSearch = () => {
    let searchValue = '';
    if (document.getElementById('search-input')) {
      searchValue = document.getElementById('search-input').value;
    }

    if (searchValue !== '') {
      searchValue = searchValue.toLowerCase();

      const selectedArray = Object
        .keys(symbols)
        .filter((key) => (key.toLowerCase() === searchValue.toLowerCase()))
        .reduce((obj, key) => Object.assign(obj, {
          [key]: symbols[key],
        }), {});

      console.log(selectedArray);

      setSymbolToShow(selectedArray);
    } else {
      setSymbolToShow(symbols);
    }
  };

  useEffect(() => {
    if (symbols.length === 0) {
      dispatch(fetchSymbols());
    }
  }, [dispatch, symbols]);

  useEffect(() => {
    if (symbols !== undefined) {
      setSymbolToShow(symbols);
    }
  }, [symbols]);

  return (
    <div>
      <div className="search-by-symbol">
        <span className="topheading">
          ALL SYMBOLS
        </span>
        <div className="filter-inputs">
          <span>EXCHANGE</span>
          <input type="text" id="search-input" onChange={handleSearch} placeholder="Search by symbol e.g USD" />
        </div>
      </div>
      <div className="flex-container">
        {

      Object.keys(symbolsToShow).map((key) => (
        <HomeItem
          id={key}
          key={key}
          name={symbolsToShow[key].name}
          symbol={symbolsToShow[key].symbol}
        />
      ))
    }
      </div>
    </div>
  );
};
export default Home;
