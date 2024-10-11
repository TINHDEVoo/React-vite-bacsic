import './components/todo/todo.css'
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { Outlet } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { getAccoutAPI } from './service/api.services';
import { AuthContent } from './components/content/auth.content';
import { Spin } from 'antd';

const App = () => {
  const { user, setUser, setIsLoading, isLoading } = useContext(AuthContent)

  useEffect(() => {
    fetchUserApi();
  }, [])

  const fetchUserApi = async () => {
    const res = await getAccoutAPI();
    if (res.data) {
      setUser(res.data.data.user)
    }

    setIsLoading(false)
  }

  return (
    <>
      {
        isLoading === true ?
          <div style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "(-50%,-50%)"
          }}>
            <Spin />
          </div>
          :
          <>
            <Header />
            <Outlet />
            <Footer />
          </>
      }
    </>
  );
}

export default App
