import Head from "next/head";

const Header = ({ title = "Community Project" }) => {
  return (
    <Head>
      <title>{title}</title>
      {/* <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
        crossOrigin="anonymous"
      /> */}
      <link
        rel="stylesheet"
        href="https://cdn.datatables.net/1.10.21/css/dataTables.bootstrap4.min.css"
      />
      <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
      <link rel="stylesheet" href="/assets/css/icons.css" />
      <link rel="stylesheet" href="/assets/css/custom.css" />

      {/* <link rel="stylesheet" type="text/css" href="styles.css" /> */}
    </Head>
  );
};

export default Header;
