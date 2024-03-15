import React from 'react';
import {Link} from 'react-router-dom';
import {useTheme} from 'app/providers/ThemeProvider'
import {cls} from 'shared/lib/classNames/classNames'
import {AppRouter} from 'app/providers/Routes/ui/AppRouter'
import {Navbar} from 'widgets/Navbar/ui/Navbar'


const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={cls('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
      <button onClick={toggleTheme}>toggle theme</button>
    </div>
  );

};

export default App;