import "./App.css";
import ProfileMain from "./Profile/ProfileMain";
import Siderbar from "./Sidebar/Siderbar";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <SnackbarProvider>
      <div className="App">
        <Siderbar></Siderbar>
        <ProfileMain></ProfileMain>
      </div>
    </SnackbarProvider>
  );
}

export default App;
