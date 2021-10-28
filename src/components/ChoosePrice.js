import React from 'react';
import PropTypes from 'prop-types';

const math = require('mathjs');

const average = (...array) => {
  const sum = array.reduce((acc, curr) => acc + parseFloat(curr), 0);
  return sum / array.length;
};

const stdev = (...array) => math.std(array);

const fixNumberFormat = (number) => {
  const str = number.toFixed(2).toString();
  const limiteArred = 5;
  const limiteNumber1 = 0.1;
  const limiteNumber2 = 1;
  const limiteNumber3 = 10;
  const min1 = 0.05;
  const max1 = 0.1;
  const min2 = 0.5;
  const max2 = 1;
  const min3 = 5;
  const max3 = 10;
  if (number < limiteNumber1) {
    return str[3] <= limiteArred ? min1 : max1;
  }
  if (number < limiteNumber2) {
    return str[2] <= limiteArred ? min2 : max2;
  }
  if (number < limiteNumber3) {
    return str[0] <= limiteArred ? min3 : max3;
  }
  return str[1] <= limiteArred ? `${str[0]}5${'0'.repeat(str.length - limiteArred)}`
    : `${str[0]}${'0'.repeat(str.length - limiteArred + 1)}`;
};

class ChoosePrice extends React.Component {
  render() {
    const { productArray, updateLimitPrices } = this.props;
    let priceArray = productArray.map((element) => element.price);
    priceArray = priceArray.filter((element) => element !== null);
    const media = average(priceArray);
    const dev = stdev(priceArray);
    const difMeanStd = fixNumberFormat(media - dev);
    const sumMeanStd = fixNumberFormat(media + dev);
    const mean = fixNumberFormat(media);
    return (
      <div>
        {
          (media - dev < 0) ? (
            <select onChange={ updateLimitPrices }>
              <option value="-">-</option>
              <option value={ `${mean}-max` }>
                { `Menor que R$${mean}` }
              </option>
              <option value={ `${mean}-${sumMeanStd}-bet` }>
                { `Entre R$${mean} e R$${sumMeanStd}` }
              </option>
              <option value={ `${sumMeanStd}-min` }>
                { `Maior que R$${sumMeanStd}` }
              </option>
            </select>
          ) : (
            <select onChange={ updateLimitPrices }>
              <option value="-">-</option>
              <option value={ `${difMeanStd}-max` }>
                { `Menor que R$${difMeanStd}` }
              </option>
              <option value={ `${difMeanStd}-${sumMeanStd}-bet` }>
                { `Entre R$${difMeanStd} e R$${sumMeanStd}` }
              </option>
              <option value={ `${sumMeanStd}-min` }>
                { `Maior que R$${sumMeanStd}` }
              </option>
            </select>
          )
        }
      </div>
    );
  }
}

ChoosePrice.propTypes = {
  productArray: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateLimitPrices: PropTypes.func.isRequired,
};

export default ChoosePrice;
