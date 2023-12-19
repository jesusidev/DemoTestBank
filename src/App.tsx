import { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DispatchContext, StateContext } from './state/context';
import { useImmerReducer } from 'use-immer';
import { formReducer } from './state/reducer';
import Home from './pages/Home';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './styles/theme.ts';
import '@fontsource/roboto';

function App() {
  let initialState = useContext(StateContext);
  const [state, dispatch] = useImmerReducer(formReducer, initialState);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        </StateContext.Provider>
      </DispatchContext.Provider>
    </ThemeProvider>
  );
}

export default App;
