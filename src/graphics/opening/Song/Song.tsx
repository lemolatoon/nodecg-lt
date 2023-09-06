import React from 'react';
import Marquee from 'react-fast-marquee';
import { songName, wrapper } from './Song.css';

type Props = {
  className?: string;
};
export const Song = ({ className }: Props) => {
  const dummySongName = "DummySongName - the song name 'Song Name' which is something like remix by someone";
  return <SongLayout className={className} name={dummySongName} />;
};

type SongLayoutProps = {
  className?: string;
  name: string;
};
const SongLayout = ({ className, name }: SongLayoutProps) => {
  return (
    <Marquee className={`${wrapper} ${songName} ${className}`} speed={100}>
      {name}
    </Marquee>
  );
};
