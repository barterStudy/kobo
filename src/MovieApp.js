import Button from './Button';
import styles from './App.module.css';
import { useState, useEffect } from 'react';
import Movie from './components/Movie';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import MovieVideo from './routes/MovieVideo';

function MovieApp() {
    return (
        <Router>
            <Routes>
                <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
                <Route path="/MovieVideo/:id" element={<MovieVideo />} />
            </Routes>
        </Router>
    );
}

export default MovieApp;
