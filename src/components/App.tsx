import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './top/header/Header';
import { Layout } from '../container/route';

export const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Layout />
      </div>
    </Router>
  );
};

