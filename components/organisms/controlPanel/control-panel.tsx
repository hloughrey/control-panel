import React, { Fragment, ReactElement } from 'react';

import { ControlPanelProperties } from './control-panel.types';
import {
  StyledWrapper,
  StyledHeading,
  StyledControl,
  StyledControlGroup,
} from './control-panel.styled';
import { Control } from '@latitude55/components';

export function ControlPanel({
  controls,
}: ControlPanelProperties): ReactElement {
  return (
    <StyledWrapper>
      {controls.map(({ domain, controls, groups }) => (
        <StyledControl key={`${domain}-control`}>
          <StyledHeading>{domain}</StyledHeading>
          {groups ? (
            <StyledControlGroup>
              {controls.map(control => (
                <Fragment key={`${control.name}-control`}>
                  <Control {...control} />
                </Fragment>
              ))}
            </StyledControlGroup>
          ) : (
            controls.map(control => (
              <Fragment key={`${control.name}-control`}>
                <Control {...control} />
              </Fragment>
            ))
          )}
        </StyledControl>
      ))}
    </StyledWrapper>
  );
}
