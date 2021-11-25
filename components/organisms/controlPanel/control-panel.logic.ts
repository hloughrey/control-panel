import {
  ControlPanelProperties,
  UpdateAdditionalInput,
} from '@latitude55/components';

export function updateControl(state, controlName): ControlPanelProperties {
  const newState = JSON.parse(JSON.stringify(state));

  newState.forEach(domain => {
    domain.controls.forEach(control => {
      if (control.name === controlName) {
        control.checked = !control.checked;
      }
      if (Object.keys(control).includes('subOptions')) {
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

  return newState;
}

export function updateAdditionalInput(
  state,
  value: UpdateAdditionalInput
): ControlPanelProperties {
  state.forEach(domain => {
    domain.controls.forEach(control => {
      if (
        Object.keys(control).includes('additionalInput') &&
        control.name === value.name
      ) {
        control.additionalInput.value = value.value;
      }

      if (Object.keys(control).includes('subOptions')) {
        control.subOptions.forEach(subOption => {
          if (
            Object.keys(subOption).includes('additionalInput') &&
            subOption.name === value.name
          ) {
            subOption.additionalInput.value = value.value;
          }
        });
      }
    });
  });

  return state;
}
