import React from 'react';
import {Link} from 'react-router-dom';
import {useTheme} from 'app/providers/ThemeProvider'
import {cls} from 'shared/lib/classNames/classNames'
import {AppRouter} from 'app/providers/Routes/ui/AppRouter'


const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={cls('app', {}, [theme])}>
      <button onClick={toggleTheme}>toggle theme</button>
      <Link to={'/about'}>To about</Link>
      <Link to={'/'}>To main</Link>
      <br /><br />
      <AppRouter />
    </div>
  );

};

export default App;