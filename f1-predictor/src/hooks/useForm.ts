import { ChangeEvent, FormEvent, useState } from 'react';

type Input = {
  [key: string]: any; // 👈️ variable key
};

type ReturnType = [
  Input,
  (e: ChangeEvent<HTMLInputElement>) => void,
  (e: FormEvent) => void,
];

const useForm = (submitCallback: () => void): ReturnType => {
  const [state, setState] = useState<Input>({});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    submitCallback();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.persist();

    const { name, value } = e.target;
    setState((currentState) => ({ ...currentState, [name]: value }));
  };

  return [state, handleChange, handleSubmit];
};

export default useForm;
