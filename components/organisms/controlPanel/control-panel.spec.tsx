import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

import { darkTheme } from '@latitude55/theme';
import { setTestProperties } from '@latitude55/libs';
import { ControlPanelProperties } from './control-panel.types';
import { ControlPanel } from '.';

describe(`ControlPanel`, () => {
  const partialProperties = setTestProperties<ControlPanelProperties>({
    controls: [
      {
        domain: 'General',
        controls: [
          {
            name: 'Case Management',
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
    ],
  });

  it('should do something', () => {
    const properties = partialProperties();

    render(
      <ThemeProvider theme={darkTheme}>
        <ControlPanel {...properties} />
      </ThemeProvider>
    );

    expect(
      screen.getByText(`Hello, I'm your new Control component 👋!`)
    ).toBeInTheDocument();
  });
});
