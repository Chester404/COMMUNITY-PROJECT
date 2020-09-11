/* import AuthHeader from "../../components/auth/AuthHeader"; */
import MainLayout from "../../components/MainLayout";
import { useState } from "react";
import Link from "next/link";

export default function Blog({ allPostsData }) {
  const [username] = useState("no-name");
  return (
    <MainLayout title="Blog Page">
      <div></div>
    </MainLayout>
  );
}
