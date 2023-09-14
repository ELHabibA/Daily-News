import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux'; // Import the Provider
import store from './components/redux/store'; // Import your Redux store

import Login from './Pages/Login/login';
import Articles from './Pages/Articles/articles';
import Register from './Pages/Register/register';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
    return (
        <CookiesProvider>
            <Provider store={store}> {/* Wrap your app with the Provider */}
            <Router>
                <div>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/articles" element={<PrivateRoute path="/articles"> <Articles /> </PrivateRoute>}/>
                        <Route path="/*" element={<Login />} />
                    </Routes>
                </div>
                </Router>
            </Provider>
        </CookiesProvider>
    );
};


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

