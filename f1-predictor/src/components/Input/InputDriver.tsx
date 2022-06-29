import React from 'react';
import 'components/Input/inputDriver.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used

const InputDriver = () => {
  return (
    <form className='input-prediction'>
      <label className='input-prediction__position-container'>
        <input
          type='number'
          min={1}
          max={10}
          required
          className='input-prediction__position'
        />
        <span className='input-prediction__position-label'>place</span>
      </label>
      <input
        type='text'
        placeholder={'Driver'}
        required
        className='input-prediction__driver'
      />
      <button className='input-prediction__button'>
        <FontAwesomeIcon className='icon--large' icon={solid('add')} />
      </button>
    </form>
  );
};

export default InputDriver;
