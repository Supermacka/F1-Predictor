import React, { FC, useEffect } from 'react';
import 'components/Input/inputDriver.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import useForm from 'hooks/useForm';

const InputDriver: FC = () => {
  // e: FormEvent
  const addDriverPrediction = () => {
    // Add driver card
  };

  const [value, handleChange, handleSubmit] = useForm(addDriverPrediction);

  const getMatchingDrivers = () => {
    console.log('Changed:', value.name);
  };
  useEffect(() => {
    getMatchingDrivers();
  }, [value.name]);

  return (
    <form onSubmit={handleSubmit} className='input-prediction'>
      <label className='input-prediction__position-container'>
        <input
          type='number'
          title='Fill in the predicted position'
          name='position'
          min={1}
          max={10}
          required
          className='input-prediction__position'
          value={value.position || ''}
          onChange={handleChange}
        />
        <span className='input-prediction__position-label'>place</span>
      </label>
      <input
        type='text'
        title='Fill in the driver name'
        name='name'
        placeholder={'Driver'}
        required
        className='input-prediction__driver'
        value={value.name || ''}
        onChange={handleChange}
      />

      <button
        type='submit'
        title='Add driver'
        className='input-prediction__button'
      >
        <FontAwesomeIcon className='icon--large' icon={solid('add')} />
      </button>
    </form>
  );
};

export default InputDriver;
