import Head from "next/head";
import Layout from "../../components/Layout";
import Link from "next/link";

const Login = () => {
  return (
    <>
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
            <h3>
              <b>Login</b>
            </h3>
          </div>
          <br />
        </div>{" "}
        <div className="row">
          <form style={{ width: "100%" }}>
            <div className="form-group col-12">
              <label htmlFor="email">Email address / Phone Number</label>
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
              <button
                type="submit"
                className="btn btn-primary btn-block submitbutton"
              >
                Login
              </button>
            </div>
            <br />
            <div
              style={{
                textAlign: "center",
              }}
            >
              <a>Forgotten Password?</a>
              <br />
              Don't have an account?
              <Link href="/auth/signup">
                <a>Sign Up</a>
              </Link>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Login;
