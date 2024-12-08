import "./App.css";
import { BrowserRouter } from "react-router-dom";
import StudentRoutes from "./routes/StudentRoutes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <StudentRoutes />
      </BrowserRouter>
    </>
  );
};
export default App;
