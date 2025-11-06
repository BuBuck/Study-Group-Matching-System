import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import Auth from './pages/Auth';
import Search from './pages/Search';
import Groups from './pages/Groups';
import CreateGroup from './pages/CreateGroup';
import Dashboard from './pages/Dashboard';
import Not from './pages/Not';

import Header from "./components/section/Header"
import Main from './components/section/Main';
import Footer from './components/section/Footer';


function App() {

    return (
        <BrowserRouter>
            <Header />
            <Main>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/auth/:authId' element={<Auth />} />
                    <Route path='/search/:searchId' element={<Search />} />
                    <Route path='/groups' element={<Groups />} />
                    <Route path='/groups/:id' element={<Groups />} />
                    <Route path='/createGroup' element={<CreateGroup />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='*' element={<Not />} />
                </Routes>
            </Main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
