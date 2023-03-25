// pages/index.js
import { NextPage } from 'next';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { IncomingMessage } from 'http';

interface RuntimeConfig {
  APP_URL: string;
  // Add other environment variables here
}

export interface RequestWithRuntimeConfig extends IncomingMessage {
  runtimeConfig: RuntimeConfig;
}

interface HomePageProps {
  runtimeConfig: RuntimeConfig;
}

interface CustomGetServerSidePropsContext extends GetServerSidePropsContext {
  req: IncomingMessage & {
    runtimeConfig?: RuntimeConfig;
    cookies: Partial<{ [key: string]: string }>;
  };
}

const HomePage: NextPage<HomePageProps> = ({ runtimeConfig }) => {
  const { APP_URL } = runtimeConfig;

  return (
    <div>
      <h1>Hello, world!</h1>
      <p>APP_URL: {APP_URL}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<HomePageProps> = async (context: CustomGetServerSidePropsContext) => {
  const req = context.req as RequestWithRuntimeConfig | null;
  return {
    props: {
      runtimeConfig: {
        APP_URL: req?.runtimeConfig?.APP_URL || '',
      },
    },
  };
};

export default HomePage;