// https://randomuser.me/api
import React, {useEffect, useState} from "react";
import {ThemeProvider} from 'styled-components'

/*Themes*/ 
import light from './styles/themes/light'
import dark from './styles/themes/dark'

/* Components */
import GlobalStyle from './styles/global'
import Header from './components/Header'

export default function App() {
  const [theme, setTheme] = useState(() => {
    const storageValue = localStorage.getItem('theme')
    return storageValue ? JSON.parse(storageValue) : light
  })

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme.title === 'light' ? dark : light)
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Header toggleTheme={toggleTheme}/>
      </ThemeProvider>
    </div>
  );
}
