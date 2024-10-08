import { NextPage } from "next";
import Layout from "../components/Dash/Layout";
import Row1 from "@/components/Dash/Row1";


const Dashboard: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-start min-h-screen">
        <Row1 />
      </div>
    </Layout>
  );
};

export default Dashboard;
