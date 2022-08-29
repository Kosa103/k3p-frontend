import React from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { ContextProvider } from './storage/context';
import { reducer } from './storage/reducers/reducer';
import { storageScheme } from './utils/schemes';
import { PATHS } from './utils/constants';
import StorageHandler from './storage/StorageHandler';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import ProtectedRoute from './components/common/Routing';
import LandingPage from './components/pages/LandingPage';

const App = () => {
  const {
    root,
    login,
    register,
    landing,
    /* params: {
      subMenu,
    } */
  } = PATHS;

  return (
    <ContextProvider
      initialState={{ storage: storageScheme }}
      reducer={reducer}
    >
      <Router>
        <Routes>
          <Route path={root} element={<LoginPage />} />
          <Route path={login} element={<LoginPage />} />
          <Route path={register} element={<RegisterPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path={landing} exact element={<LandingPage />} />
          </Route>
          <Route path="*" element={<h1>404 Page not found</h1>} />
        </Routes>
      </Router>
      <StorageHandler />
    </ContextProvider>
  );
};

export default App;
