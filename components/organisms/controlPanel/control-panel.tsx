import React, { Fragment, ReactElement, useReducer } from 'react';

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
import { Control, TControl } from '@latitude55/components';

const INITIAL_STATE = {};

function updateControl(state, controlName): ControlPanelProperties {
  state.forEach(domain => {
    domain.controls.forEach(control => {
      if (control.name === controlName) {
        control.checked = !control.checked;
      }
      if (Object.keys(control).indexOf('subOptions') !== -1) {
        if (!control.checked) {
          control.subOptions.forEach(subOption => {
            subOption.checked = false;
          });
        }

        if (control.checked) {
          control.subOptions.forEach(subOption => {
            if (subOption.name === controlName) {
              subOption.checked = !subOption.checked;
            }
          });
        }
      }
    });
  });

  return state;
}

function updateAdditionalInput(
  state,
  value: UpdateAdditionalInput
): ControlPanelProperties {
  state.forEach(domain => {
    domain.controls.forEach(control => {
      if (Object.keys(control).indexOf('additionalInput') !== -1) {
        if (control.name === value.name) {
          control.additionalInput.value = value.value;
        }
      }

      if (Object.keys(control).indexOf('subOptions') !== -1) {
        control.subOptions.forEach(subOption => {
          if (Object.keys(subOption).indexOf('additionalInput') !== -1) {
            if (subOption.name === value.name) {
              subOption.additionalInput.value = value.value;
            }
          }
        });
      }
    });
  });

  console.log(state);
  return state;
}

function reducer(state, action: ControlActions) {
  let newState: ControlPanelProperties = state.map(x => ({ ...x }));
  switch (action.type) {
    case 'updateControls':
      return updateControl(newState, action.value);
    case 'updateAdditionalInput':
      return updateAdditionalInput(newState, action.value);
    default:
      return INITIAL_STATE;
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
      {controls.map(({ domain, controls, groups }) => (
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
