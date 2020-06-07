import React from 'react';
import ReactDOM from 'react-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './i18n';
import './assets/tailwind/tailwind.css';
import './index.css';

import * as serviceWorker from './serviceWorker';
import { AppProvider } from './context/AppContext';
import { PageProvider } from './context/PageContext';
import App from './components/App/App';


import { createMuiTheme, ThemeProvider,MuiThemeProvider } from '@material-ui/core/styles';
import { green, orange } from '@material-ui/core/colors';

// importing routerdom

import { BrowserRouter as Router,Route,Switch,Redirect } from "react-router-dom";
import LoginScreen from './components/Authentication/Component/LoginScreen';
import Registration from "./components/Authentication/Component/Registeration";
import SuccessfulRegistration from './components/Authentication/Component/SuccessFulRegistration';
import LoaderScreen from "./shared/LoaderScreen";
import EmailVerified from './components/Authentication/Component/EmailVerified';

toast.configure({
  autoClose: 3000,
  closeButton: false,
  hideProgressBar: true,
  position: toast.POSITION.BOTTOM_RIGHT,
});


const outerTheme = createMuiTheme({
  palette: {
    secondary: {
      main: orange[500],
    },
  },
});

const innerTheme = createMuiTheme({
  palette: {
    secondary: {
      main: "#0984e3",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <PageProvider>
        {/* <App /> */}
        <LoaderScreen></LoaderScreen>
        <MuiThemeProvider theme={innerTheme}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <LoginScreen></LoginScreen>
            </Route>
            <Route path="/register" exact strict>
              <Registration></Registration>
            </Route>
            <Route path="/success" exact strict>
              <SuccessfulRegistration></SuccessfulRegistration>
            </Route>
            <Route path="/emailverify" exact strict>
              <EmailVerified></EmailVerified>
            </Route>
            <Route path="/resume" exact strict>
              <App></App>
            </Route>
          </Switch>
        </Router>
        </MuiThemeProvider>
      </PageProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.register();
