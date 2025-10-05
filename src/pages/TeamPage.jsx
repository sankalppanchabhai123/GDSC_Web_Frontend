import React, { useEffect } from "react";
import TeamsPage from "../components/TeamsPage/TeamsPage";
// import { TeamCard } from "../components/common";

const TeamPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return <TeamsPage />;
  // return <TeamCard />
};

export default TeamPage;

