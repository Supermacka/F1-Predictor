import React, { FC, FormEvent, useState } from 'react';
import 'components/Input/inputDriver.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used

const InputDriver: FC = () => {
  const [driverPosition, setDriverPosition] = useState<string>('');
  const [driverName, setDriverName] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('- - PREDICTION - -');
    console.log('Position:', driverPosition);
    console.log('Name:', driverName);
  };
  return (
    <form onSubmit={handleSubmit} className='input-prediction'>
      <label className='input-prediction__position-container'>
        <input
          type='number'
          min={1}
          max={10}
          required
          className='input-prediction__position'
          value={driverPosition}
          onChange={(e) => setDriverPosition(e.target.value)}
        />
        <span className='input-prediction__position-label'>place</span>
      </label>
      <input
        type='text'
        placeholder={'Driver'}
        required
        className='input-prediction__driver'
        value={driverName}
        onChange={(e) => setDriverName(e.target.value)}
      />

      <button type='submit' className='input-prediction__button'>
        <FontAwesomeIcon className='icon--large' icon={solid('add')} />
      </button>
    </form>
  );
};

export default InputDriver;
