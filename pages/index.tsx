import { useContext } from "react";
import { Store } from "../contextStore";
import MainLayout from "../components/MainLayout";

export default function Home() {
  const { state, dispatch } = useContext(Store);
  return (
    <>
      <MainLayout>
        {/* <button
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
        <div>Home Page What {process.env.URL}</div> */}
      </MainLayout>
    </>
  );
}
