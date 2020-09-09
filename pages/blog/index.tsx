import AuthHeader from "../../components/auth/AuthHeader";
import { useState } from "react";
import MainLayout from "../../components/MainLayout";

export default function Blog({ allPostsData }) {
  const [username] = useState("no-name");
  return (
    <MainLayout title="Blog Page" pageTitle="">
      <h3></h3>
    </MainLayout>
  );
}
