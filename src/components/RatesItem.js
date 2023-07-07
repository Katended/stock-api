import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

const RatesItem = ({
  id, value,
}) => (
  <Card className="card2">
    <div className="ratesitem">
      <span>
        <h4>{id}</h4>
        <span>
          {value}
        </span>
      </span>
      <span>
        <FontAwesomeIcon icon={faArrowCircleRight} className="icon iconP" />
      </span>
    </div>
  </Card>
);
RatesItem.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,

};

export default RatesItem;
