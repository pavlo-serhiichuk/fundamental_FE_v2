import React, { Suspense } from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {useTheme} from 'app/providers/ThemeProvider'
import {cls} from 'shared/lib/classNames/classNames'
import {AboutPage} from 'pages/AboutPage'
import {MainPage} from 'pages/MainPage'


const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={cls('app', {}, [theme])}>
      <button onClick={toggleTheme}>toggle theme</button>
      <Link to={'/about'}>To about</Link>
      <Link to={'/'}>To main</Link>
      <br/><br/>
      <Suspense fallback={"Loading..."}>
        <Routes>
          <Route path={'/about'} element={<AboutPage />} />
          <Route path={'/'} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;