import { AvailableCourses } from "@/components/dashboard/cards";
import { Heading } from "@/components/dashboard/headings";
import { Dashboardlayout } from "@/components/dashboard/layout";
import React from "react";

const Dashboard = () => {
  return (
    <Dashboardlayout>
      <Heading />
      <AvailableCourses />
    </Dashboardlayout>
  );
};

export default Dashboard;
