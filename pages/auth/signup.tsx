import Head from "next/head";
import Layout from "../../components/Layout";
import Link from "next/link";

const Signup = () => {
  return (
    <Layout>
      <Head>
        <link rel="stylesheet" type="text/css" href="/auth.css" />
      </Head>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <div>
          <img src="/images/Logo.png" />
        </div>
        <div>
          <b>Make the most out of your business</b>
        </div>
        <div>
          Already on Market Circle?{" "}
          <Link href="/auth/login">
            <a>
              <b>Log in</b>
            </a>
          </Link>
        </div>
      </div>{" "}
      <div className="row">
        <form style={{ width: "100%" }}>
          <div className="form-group col-12">
            <label htmlFor="email">Email address / Phone</label>
            <input
              type="email"
              className="form-control cinput"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group col-12">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control cinput"
              id="exampleInputPassword1"
              placeholder="Password"
              data-toggle="password"
            />
          </div>
          <div className="form-group col-12">
            <label htmlFor="exampleInputPassword1">Confirm Password</label>
            <input
              type="password"
              className="form-control cinput"
              id="exampleInputPassword1"
              placeholder="Password"
              data-toggle="password"
            />
          </div>
          <div className="form-group col-12">
            <input
              type="radio"
              id="organization"
              name="account_type"
              value="organization"
            />{" "}
            <label htmlFor="organization">Organization</label>{" "}
            <input
              type="radio"
              id="individual"
              name="account_type"
              value="individual"
            />{" "}
            <label htmlFor="individual">Individual</label>
          </div>
          <div className="form-group col-12">
            <button
              type="submit"
              className="btn btn-primary btn-block submitbutton"
            >
              Sign Up
            </button>
          </div>
          <div
            style={{
              textAlign: "center",
            }}
          >
            By clicking Sing up, you agree to the Market Circle
            <br />
            <b>
              <a href="">User Agreement,</a>
              <a href="">Privacy Policy</a>
            </b>{" "}
            and{" "}
            <b>
              <a href="">Cookie Policy</a>
            </b>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Signup;
