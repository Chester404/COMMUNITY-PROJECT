import { useContext } from "react";
import { Store } from "../contextStore";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  const { state, dispatch } = useContext(Store);
  return (
    <>
      <Layout>
        <button
          onClick={() =>
            dispatch({ type: "change", payload: "Peter and Denis" })
          }
        >
          Change It
        </button>
        <br />
        <Link href="/about">
          <a>Test Me</a>
        </Link>
        <div>Home Page What {process.env.URL}</div>
      </Layout>
    </>
  );
}
