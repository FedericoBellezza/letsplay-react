import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from "./pages/Homepage";
import DefaultLayout from "./layouts/DefaultLayout";
import EventsPage from "./pages/events/EventsPage";
import EventsShowPage from "./pages/events/EventsShowPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route element={<Homepage />} path="/" />
            <Route element={<EventsPage />} path="/events" />
            <Route element={<Homepage />} path="/contacts" />
            <Route element={<Homepage />} path="/bests" />
            <Route element={<EventsShowPage />} path="/events/:id" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
