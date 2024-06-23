import {
  LoginPage,
  NavBar,
  AuthTokenResp,
  HomePage,
  SingleFile,
  PrivateRoute,
  NotFound,
} from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <>
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="/auth_token" element={<AuthTokenResp />}></Route>
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/folder/:folderId"
              element={
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/file/:fileId"
              element={
                <PrivateRoute>
                  <SingleFile />
                </PrivateRoute>
              }
            ></Route>

            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
