import Head from 'next/head';
import React, { Fragment } from 'react';
import {
  StyledHeading,
  StyledMain,
  StyledWrapper,
} from '../page-lib/index-page';
import { ControlPanel } from '@latitude55/components';

const controls = [
  {
    domain: 'General',
    controls: [
      {
        name: 'Case Management',
        checked: true,
      },
      {
        name: 'Notifications',
        checked: true,
      },
      {
        name: 'Map Timeline',
        checked: true,
      },
      {
        name: 'Mass Communications',
        checked: true,
      },
      {
        name: 'Views & Briefings',
        checked: true,
      },
      {
        name: 'Traffic Cameras',
        checked: true,
      },
    ],
  },
  {
    domain: 'Settings',
    groups: ['Audit log', 'Users'],
    controls: [
      {
        name: 'Audit log',
        checked: false,
      },
      {
        name: 'Users',
        checked: false,
        subOptions: [
          {
            name: 'Users Add',
            checked: false,
          },
          {
            name: 'Users Delete',
            checked: false,
          },
          {
            name: 'Users Edit',
            checked: false,
          },
          {
            name: 'Max Users',
            checked: false,
            additionalInput: {
              min: 1,
              max: 10,
              value: undefined,
            },
          },
        ],
      },
    ],
  },
  {
    domain: 'Alerts',
    groups: ['Alert Manager', 'Alert Rules'],
    controls: [
      {
        name: 'Alert Manager',
        checked: true,
      },
      {
        name: 'Alert Rules',
        checked: true,
        additionalInput: {
          min: 1,
          max: 10,
          value: undefined,
        },
      },
    ],
  },
];

export default function Index() {
  return (
    <Fragment>
      <Head>
        <title>Settings | Dataminr</title>
      </Head>
      <StyledWrapper>
        <StyledMain>
          <StyledHeading>Welcome to Dataminr!</StyledHeading>
          <ControlPanel controls={controls} />
        </StyledMain>
      </StyledWrapper>
    </Fragment>
  );
}
