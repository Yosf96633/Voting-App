import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  HomePage,
  AdminPage,
  AdminDashboardPage,
  CandidatePage,
  VoterPage,
} from "./Pages/pages";
import {
  Login,
  DashHero,
  Winner,
  Add_candidate,
  Delete_voter,
  Add_voter,
  EditCandidate,
  DeleteCandidate,
  Voter,
  EditVoter,
  Candidate,
} from "./Components/index";
const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />}>
        <Route index element={<h1>Home</h1>} />
        <Route path="about" element={<h1>About</h1>} />
        <Route path="contact" element={<h1>Contact</h1>} />
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="admin_login" element={<AdminPage />}></Route>
      <Route path="dashboard" element={<AdminDashboardPage />}>
        <Route index element={<DashHero />} />
        <Route path="winner" element={<Winner />} />
        <Route path="candidate" element={<CandidatePage />}>
          <Route index element={<Candidate />} />
          <Route path="add_candidate" element={<Add_candidate />} />
          <Route path="edit_candidate" element={<EditCandidate />} />
          <Route path="delete_candidate" element={<DeleteCandidate/>}/>
        </Route>
        <Route path="voter" element={<VoterPage />}>
          <Route index element={<Voter />} />
          <Route path="add_voter" element={<Add_voter />} />
          <Route path="edit_voter" element={<EditVoter />} />
          <Route path="delete_voter" element={<Delete_voter />} />
        </Route>
      </Route>
    </>
  )
);
const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
