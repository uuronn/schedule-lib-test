import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import Home from "./Home";
import GanttTaskReact from "./pages/ganttTaskReact";
import "./reset.css";
import FrappeGanttReact from "./pages/frappeGanttReact";
import ReactInteractiveTimeline from "./pages/reactInteractiveTimeline";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/pages" element={<GanttTaskReact />} />
      <Route path="/frappeGanttReact" element={<FrappeGanttReact />} />
      <Route
        path="/reactInteractiveTimeline"
        element={<ReactInteractiveTimeline />}
      />
    </Route>
  )
);

const root = document.getElementById("root");

if (root) {
  const app = createRoot(root);

  app.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
