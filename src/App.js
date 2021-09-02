import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notes from "./components/Notes";
import Create from "./components/Create";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import Layout from "./components/Layout";

/* Customizing the theme createTheme and wrap with theme provider */
const theme = createTheme({
  palette: {
    primary: {
      main: "#ce93d8",
    },
    secondary: purple,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Notes />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
