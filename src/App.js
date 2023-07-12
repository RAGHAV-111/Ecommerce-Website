import React, { useContext, Suspense, useEffect } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import './App.css';
import Header from './header/Header';
// import Home from './pages/Home';
// import Store from './pages/Store';
// import About from './pages/About';
// import Login from './pages/Login';
// import ContactUs from './pages/ContactUs';
import Footer from './footer/Footer';
// import ProductDetail from './pages/ProductDetail';
import { ShowCartContextProvider } from './store/showCart-context';
import { ProductContextProvider } from './store/product-context';
import loginContext from './store/login-context';
import LoadingSpinner from './UI/LoadingSpinner';
import cartContext from './store/cart-Context';

const Home = React.lazy(() => import('./pages/Home'));
const Store = React.lazy(() => import('./pages/Store'));
const About = React.lazy(() => import('./pages/About'));
const Login = React.lazy(() => import('./pages/Login'));
const ContactUs = React.lazy(() => import('./pages/ContactUs'));
const ProductDetail = React.lazy(() => import('./pages/ProductDetail'));

function App() {
  const loginCtx = useContext(loginContext);
  const cartCtx = useContext(cartContext);

  const {loginCartHandler} = cartCtx;
  const {isloggedIn} = loginCtx;

  // fetching cart data on refresh
  useEffect(() => {
    if (isloggedIn) {
      console.log('called');
      loginCartHandler();
    }
  }, [loginCartHandler, isloggedIn]);

  const productsArr = [
    {
      title: 'Punk Powerhouse',
      price: 10.67,
      imageUrl:
        'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/160db2f2cc6eaef1ad40cb4f5f43cffd_screen.jpg?ts=1561422695',
    },

    {
      title: 'The Sound of Tears',
      price: 14.34,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaKyJcdMort9yCezf_gWweOJ2ReElqVN5XtB_uDajivSf3TuUKPMPuCsjE7jQM8CnMVD4&usqp=CAU',
    },

    {
      title: 'Echoes of Silence',
      price: 20.87,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqVE4ccVDvYWKyEmv2jAu3oyuixgEPl4PmHzTNa1pqoaodl7vdGsD6xbi9XxjhkIr9k4k&usqp=CAU',
    },

    {
      title: 'Music from the Soul',
      price: 45.56,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6OeMsZOABS_Hi1wLKBnhOvJS3O5PVHp2rZw&usqp=CAU',
    },
    {
      title: 'The Unknown Landscape',
      price: 67.54,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3hL-5Imwxdqc3k1Gph2UGptRrCxnSwnLP3w&usqp=CAU',
    },
    {
      title: 'Woodland Wonders',
      price: 89.43,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSratzr9SyWZHVKkrqhMcaZs7XnKAh6ytFkyw&usqp=CAU',
    },
    {
      title: 'Cat Killed Curiosity',
      price: 8.54,
      imageUrl:
        'https://img.freepik.com/premium-photo/jazz-music-old-retro-vinyl-disc-lp-record-audio-vintage-album_63762-3051.jpg?size=626&ext=jpg&ga=GA1.1.1779478198.1682355800&semt=ais',
    },
    {
      title: 'Rock Star Status',
      price: 89.67,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWwrUmzUGw4-rOo3OEC8Lsu_dmHx5HwAQKMA&usqp=CAU',
    },
  ];

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ShowCartContextProvider>
        <Header />
      </ShowCartContextProvider>

      <Route path='/' exact>
        <Redirect to='/home' />
      </Route>

      <Route path='/home'>
        <Home />
      </Route>

      <Switch>
        <ProductContextProvider>
          <ShowCartContextProvider>
            <Route path='/product' exact>
              {loginCtx.isloggedIn && <Store productList={productsArr} />}
              {!loginCtx.isloggedIn && <Redirect to='/login' />}
            </Route>
          </ShowCartContextProvider>

          <Route path='/product/:productId'>
            {loginCtx.isloggedIn && <ProductDetail />}
            {!loginCtx.isloggedIn && <Redirect to='/login' />}
          </Route>
        </ProductContextProvider>
      </Switch>

      <Route path='/about'>
        <About />
      </Route>

      <Route path='/contact'>
        <ContactUs />
      </Route>

      <Route path='/login'>
        {!loginCtx.isloggedIn && <Login />}
        {loginCtx.isloggedIn && <Redirect to='/home' />}
      </Route>

      <Footer />
    </Suspense>
  );
}

export default App;
