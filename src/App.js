import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';

const App = () => {
  return (
      <div className={styles.app}>
        <Header />
        <main className={styles.main}>
          <Routes>
            <Route  path="/" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
  );
};

export default App;
