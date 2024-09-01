import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { SongNameState } from "../../../types";
import { marginLeft, selectFont } from "./SongNameStateForm.css";
import { useReplicant } from "use-nodecg";

type Props = {
  className?: string;
};
export const SongNameStateForm = (props: Props) => {
  const dummySongName =
    "DummySongName - the song name 'Song Name' which is something like remix by someone";
  const [, setSongNameState] = useReplicant<SongNameState>(
    "songNameState",
    { name: dummySongName, on: false },
    { defaultValue: { name: dummySongName, on: false } },
  );
  const form = useForm<SongNameState>();
  const onSubmit: SubmitHandler<SongNameState> = ({ name, on }) => {
    setSongNameState({ name, on });
  };
  return (
    <OpeningStateFormLayout {...props} form={form} submitHandler={onSubmit} />
  );
};

type OpeningStateFormLayoutProps = {
  form: ReturnType<typeof useForm<SongNameState>>;
  submitHandler: SubmitHandler<SongNameState>;
} & Props;
export const OpeningStateFormLayout = ({
  className,
  form,
  submitHandler,
}: OpeningStateFormLayoutProps) => {
  const { register, handleSubmit } = form;
  const onSubmit = handleSubmit(submitHandler);
  return (
    <form onSubmit={onSubmit} className={className}>
      <div>
        <input {...register("name")} className={selectFont} />
      </div>
      <div>
        <input {...register("on")} type="checkbox" />
      </div>
      <button type="submit" className={marginLeft}>
        反映
      </button>
    </form>
  );
};
