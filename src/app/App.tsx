import React from 'react';
import {Link} from 'react-router-dom';
import {useTheme} from 'app/providers/ThemeProvider'
import {cls} from 'shared/lib/classNames/classNames'
import {AppRouter} from 'app/providers/Routes/ui/AppRouter'
import {Navbar} from 'widgets/Navbar/ui/Navbar'
import {Sidebar} from 'widgets/Sidebar/ui/Sidebar/Sidebar'


const App = () => {
  const {theme } = useTheme()

  return (
    <div className={cls('app', {}, [theme])}>
      <Navbar />
      <div className="app-content">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );

};

export default App;