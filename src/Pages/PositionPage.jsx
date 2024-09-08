import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
const PositionPage = () => {
  const darkmode = useSelector((state) => {
    return state.AdminTheme.Admin_dark_mode;
  });
  return (
    <>
      <div></div>
      <Outlet />
    </>
  );
};

export default PositionPage;