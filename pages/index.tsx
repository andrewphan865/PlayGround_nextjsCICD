// pages/index.js
import { NextApiRequest, NextPage, NextPageContext } from 'next';
import React from 'react';
interface RuntimeConfig {
  APP_URL: string;

}

interface RequestWithRuntimeConfig extends NextApiRequest {
  runtimeConfig: RuntimeConfig;
}

const HomePage: NextPage<{ runtimeConfig: RuntimeConfig }> = ({ runtimeConfig }) => {
  const { APP_URL } = runtimeConfig;

  return (
    <div>
      <h1>Hello, World!</h1>
      <p>App URL: {APP_URL}</p>
    </div>
  );
};

HomePage.getInitialProps = async (context: NextPageContext) => {
  // Access the runtimeConfig from the request object
  const req = context.req as RequestWithRuntimeConfig;
  const runtimeConfig = req.runtimeConfig;

  return {
    runtimeConfig,
  };
};

export default HomePage;
