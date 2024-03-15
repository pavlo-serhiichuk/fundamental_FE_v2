import React from 'react';
import {Link} from 'react-router-dom';
import {useTheme} from 'app/providers/ThemeProvider'
import {cls} from 'shared/lib/classNames/classNames'
import {AppRouter} from 'app/providers/Routes/ui/AppRouter'
import {Navbar} from 'widgets/Navbar/ui/Navbar'
import {ThemeSwitcher} from 'shared/ui/ThemeSwitcher'


const App = () => {
  const {theme } = useTheme()

  return (
    <div className={cls('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
      <ThemeSwitcher />
    </div>
  );

};

export default App;