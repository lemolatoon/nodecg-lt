import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { OpeningPageState, openingStates } from '../../../types';
import { marginLeft, selectFont } from './OpeningStateForm.css';
import { useReplicant } from 'use-nodecg';

type Props = {
  className?: string;
};
export const OpeningStateForm = (props: Props) => {
  const [openingPageState, setOpeningPageState] = useReplicant<OpeningPageState>(
    'openingPageState',
    { state: 'opening' } as const,
    { defaultValue: { state: 'opening' as const } },
  );
  const form = useForm<OpeningPageState>();
  const onSubmit: SubmitHandler<OpeningPageState> = ({ state }) => {
    setOpeningPageState({ state });
  };
  return <OpeningStateFormLayout {...props} form={form} submitHandler={onSubmit} />;
};

type OpeningStateFormLayoutProps = {
  form: ReturnType<typeof useForm<OpeningPageState>>;
  submitHandler: SubmitHandler<OpeningPageState>;
} & Props;
export const OpeningStateFormLayout = ({ className, form, submitHandler }: OpeningStateFormLayoutProps) => {
  const { register, handleSubmit } = form;
  const onSubmit = handleSubmit(submitHandler);
  return (
    <form onSubmit={onSubmit} className={className}>
      <select {...register('state')} className={selectFont}>
        {openingStates.map((state, index) => {
          return (
            <option key={index} value={state}>
              {state}
            </option>
          );
        })}
      </select>
      <button type="submit" className={marginLeft}>
        反映
      </button>
    </form>
  );
};
