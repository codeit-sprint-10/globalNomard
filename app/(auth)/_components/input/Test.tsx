import { useController, UseControllerProps } from 'react-hook-form';

type FormValues = { [key: string]: string };

interface Props extends UseControllerProps<FormValues> {
  label: string;
  type: string;
}

export default function Test({ name, label, type, control, ...rest }: Props) {
  const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  const pwRegex = /^[0-9a-zA-Z]{8,100}$/;

  const rule = type === 'email' ? emailRegex : pwRegex;

  const { field, fieldState, formState } = useController({
    name,
    control,
    rules: { pattern: rule },
  });

  // console.log(formState.errors);

  return (
    <div>
      <label>{label}</label>
      <input {...field} {...rest} />
      {formState.errors[name] && <p>{`${name} 에러`}</p>}
      {fieldState.error && <p>{fieldState.error.message}</p>}
    </div>
  );
}
