import './components/todo/todo.css'
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { Outlet } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { fetchserAPI } from './service/api.services';
import { AuthContent } from './components/content/auth.content';

const App = () => {
  const { setUser } = useContext(AuthContent)

  useEffect(() => {
    LoadAccessToken();
  }, [])

  const delay = (seconds) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, seconds);
    })
  }


  const LoadAccessToken = async () => {
    const res = await fetchserAPI()
    await delay(5000)
    if (res.data) {
      setUser(res.data.data.user)
    }
  }
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App
