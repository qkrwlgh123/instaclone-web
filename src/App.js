import { BrowserRouter as Router, Navigate, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Login from './screens/Login';
import Home from './screens/Home';
import { useReactiveVar } from '@apollo/client';
import { darkModeVar, isLoggedInVar } from './apollo';
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from './styles';
import routes from './routes';
import SignUp from './screens/SignUp';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);
  return (
    <HelmetProvider>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Router>
          <Routes>
            <Route
              path={routes.home}
              element={isLoggedIn ? <Home /> : <Login />}
            ></Route>
            <Route
              path={routes.signUp}
              element={!isLoggedIn ? <SignUp /> : null}
            ></Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
