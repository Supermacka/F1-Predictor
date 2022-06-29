import { ChangeEvent, useState } from 'react';

type Input = {
  [key: string]: any; // 👈️ variable key
};

const useForm = (): [Input, (e: ChangeEvent<HTMLInputElement>) => void] => {
  const [state, setState] = useState<Input>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.persist();

    const { name, value } = e.target;
    setState((currentState) => ({ ...currentState, [name]: value }));
  };

  return [state, handleChange];
};

export default useForm;
