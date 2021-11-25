import React, { Fragment, ReactElement, useReducer } from 'react';
import { Control, TControl } from '@latitude55/components';

import {
  ControlActions,
  ControlPanelProperties,
  UpdateAdditionalInput,
} from './control-panel.types';
import {
  StyledWrapper,
  StyledHeading,
  StyledControl,
  StyledControlGroup,
} from './control-panel.styled';
import { updateControl, updateAdditionalInput } from './control-panel.logic';

function reducer(state, action: ControlActions) {
  switch (action.type) {
    case 'updateControls':
      return updateControl(state, action.value);
    case 'updateAdditionalInput':
      return updateAdditionalInput(state, action.value);
    default:
      return state;
  }
}

export function ControlPanel({
  controls,
}: ControlPanelProperties): ReactElement {
  const [state, dispatch] = useReducer(reducer, controls);

  function handleControlToggles(control: string): void {
    dispatch({ type: 'updateControls', value: control });
  }

  function handleAdditionInputUpdate(data: UpdateAdditionalInput): void {
    dispatch({ type: 'updateAdditionalInput', value: data });
  }

  function RenderControl(control: TControl): ReactElement {
    return (
      <Fragment key={`${control.name}-control`}>
        <Control
          {...control}
          onChange={handleControlToggles}
          onChangeAdditionalInputChange={handleAdditionInputUpdate}
        />
      </Fragment>
    );
  }

  return (
    <StyledWrapper>
      {state.map(({ domain, controls, groups }) => (
        <StyledControl key={`${domain}-control`}>
          <StyledHeading>{domain}</StyledHeading>
          {groups ? (
            <StyledControlGroup>
              {controls.map(RenderControl)}
            </StyledControlGroup>
          ) : (
            controls.map(RenderControl)
          )}
        </StyledControl>
      ))}
    </StyledWrapper>
  );
}
