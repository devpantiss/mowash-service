import { NextPage } from "next";
import Layout from "../components/Dash/Layout";
import Row1 from "@/components/Dash/Row1";

const Dashboard: NextPage = () => {
  return (
    <Layout>
      <Row1 />
    </Layout>
  );
};

export default Dashboard;
