/* import AuthHeader from "../../components/auth/AuthHeader"; */
import MainLayout from "../../components/MainLayout";
import { useState } from "react";

export default function Blog({ allPostsData }) {
  const [username] = useState("no-name");
  return (
    <MainLayout title="Blog Page" pageTitle="">
      <h3></h3>
    </MainLayout>
  );
}
