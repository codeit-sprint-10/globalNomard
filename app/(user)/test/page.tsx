'use client';

import { useForm } from 'react-hook-form';
import UseInput from '../_components/UseInput/UseInput';

type FormValues = {
  [key: string]: string;
};

function page() {
  const { control, handleSubmit, formState } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: { FirstName: '' },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return <div>테스트 페이지</div>;
}

export default page;
