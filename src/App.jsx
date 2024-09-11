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
  AboutPage,
  CandidatePage,
  VoterPage,
  PositionPage,
  ContactPage,
} from "./Pages/pages";
import {
  Login,
  DashHero,
  Winner,
  Add_candidate,
  Delete_voter,
  Add_voter,
  EditCandidate,
  IssuesDisplay,
  DeleteCandidate,
  Voter,
  EditVoter,
  Candidate,
  AddPosition,
  Position,
  Edit_Position,
  DeletePosition,
  SignUp,
  Home,
  CastVote,
  AuthContext
} from "./Components/index";
import { useSelector } from "react-redux";
const App = () => {
  const isLogin = useSelector(state=>state.login.login)
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Home/>} />
          <Route path="cast_vote" element={<AuthContext><CastVote/></AuthContext>}/>
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage/>} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp/>}/>
        </Route>
        <Route path="admin_login" element={<AdminPage />}></Route>
        <Route path="dashboard" element={<AdminDashboardPage />}>
          <Route index element={<DashHero />} />
          <Route path="winner" element={<Winner />} />
          <Route path="reports" element={<IssuesDisplay/>}/>
          <Route path="position" element={<PositionPage />}>
            <Route index element={<Position />} />
            <Route path="add_position" element={<AddPosition />} />
            <Route path="edit_position" element={<Edit_Position/>}/>
            <Route path="delete_position" element={<DeletePosition/>}/>
          </Route>
          <Route path="candidate" element={<CandidatePage />}>
            <Route index element={<Candidate />} />
            <Route path="add_candidate" element={<Add_candidate />} />
            <Route path="edit_candidate" element={<EditCandidate />} />
            <Route path="delete_candidate" element={<DeleteCandidate />} />
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
  return <RouterProvider router={routes} />;
};

export default App;
