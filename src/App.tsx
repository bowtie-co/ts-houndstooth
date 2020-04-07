import React, { FC } from 'react';
import logo from './logo.svg';
import './App.css';

export interface AppProps {
  link: {
    text: string;
    href: string;
  };
}

export const App: FC<AppProps> = (props: AppProps) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>TypeScript - Houndstooth</p>
        <a className="App-link" href={props.link.href} target="_blank" rel="noopener noreferrer">
          {props.link.text}
        </a>
      </header>
    </div>
  );
};

export default App;
