import React from "react";
import Layout from "components/Layout";
import panda from "images/404.gif"

const NotFoundPage = () => (
  <Layout>
    <div style={{textAlign: "center"}}>
      <img src={panda} />
      <h1>OH NO!</h1>
      <p>You just hit a route that doesn&#39;t exist... the despair.</p>
    </div>
  </Layout>
)

export default NotFoundPage;