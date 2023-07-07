import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import Card from 'react-bootstrap/Card';
import { fetchCurrencyRates } from '../redux/home/currencyRatesSlice';
import RatesItem from './RatesItem';
import './Home.css';

const Rates = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const rates = useSelector((state) => state.currencyRatesStore.rates);

  useEffect(() => {
    console.log(rates.length === 0);
    if (rates.length === 0) {
      dispatch(fetchCurrencyRates(id));
    }
  }, [rates]);

  return (
    <div className="cases-by-symbol">

      <span className="topheading">
        {id }
      </span>
      <div className="search-by-symbol">
        <div className="filter-inputs">
          <span>&nbsp;</span>
          <span>CURRENCY SYMBOLS</span>
        </div>
      </div>
      <div className="flex-container-details">

        <div>
          {' '}
          <span>
            DATE:
            {' '}
            {(rates.length > 0) ? rates[0].date : ' ' }
          </span>
          {' '}
          <span>
            BASE:
            {' '}
            {id}
          </span>
          {' '}
          EXCHANGE RATES
        </div>
        {
      rates.map((key) => (
        <RatesItem key={key.base} id={key.base} value={key.value} />
      ))
    }
      </div>
    </div>
  );
};

export default Rates;
