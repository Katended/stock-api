import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

const HomeItem = ({
  id, name, symbol,
}) => (
  <Card className="card1">
    <a href={`/Rates/${id}`}>
      <div>
        <div className="con">
          <FontAwesomeIcon icon={faArrowCircleRight} className="icon iconP" />
        </div>
        <h3>{id}</h3>
        <h4>{name}</h4>
        <span>
          {symbol}
        </span>
      </div>
    </a>
  </Card>
);

HomeItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};

export default HomeItem;
