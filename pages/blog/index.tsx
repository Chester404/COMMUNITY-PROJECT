/* import AuthHeader from "../../components/auth/AuthHeader"; */
import MainLayout from "../../components/MainLayout";
import { useState } from "react";
import MainLayout from "../../components/MainLayout";

export default function Blog({ allPostsData }) {
  const [username] = useState("no-name");
  return (
<<<<<<< HEAD
    <MainLayout title="Blog Page">
      <div></div>
=======
    <MainLayout title="Blog Page" pageTitle="">
      <h3></h3>
>>>>>>> origin/pre-release
    </MainLayout>
  );
}
