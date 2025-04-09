import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from "./pages/Homepage";
import DefaultLayout from "./layouts/DefaultLayout";
import EventsPage from "./pages/EventsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route element={<Homepage />} path="/" />
            <Route element={<EventsPage />} path="/events" />
            <Route element={<Homepage />} path="/contacts" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
