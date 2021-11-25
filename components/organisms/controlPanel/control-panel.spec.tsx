import { updateControl, updateAdditionalInput } from './control-panel.logic';

const mockState = [
  {
    domain: 'Settings',
    groups: ['Audit log', 'Users'],
    controls: [
      {
        name: 'Users',
        checked: true,
        subOptions: [
          {
            name: 'Users Add',
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
];

describe(`ControlPanel`, () => {
  describe('reducers', () => {
    describe('updateControls', () => {
      it.each`
        scenario                                                            | control        | checked  | expected
        ${'should update control'}                                          | ${'Users'}     | ${false} | ${[{ domain: 'Settings', groups: ['Audit log', 'Users'], controls: [{ name: 'Users', checked: false, subOptions: [{ name: 'Users Add', checked: false }, { name: 'Max Users', checked: false, additionalInput: { min: 1, max: 10, value: undefined } }] }] }]}
        ${'should update nested control'}                                   | ${'Users Add'} | ${true}  | ${[{ domain: 'Settings', groups: ['Audit log', 'Users'], controls: [{ name: 'Users', checked: true, subOptions: [{ name: 'Users Add', checked: true }, { name: 'Max Users', checked: false, additionalInput: { min: 1, max: 10, value: undefined } }] }] }]}
        ${'should set all nested controls to "false" if parent is "false"'} | ${'Users'}     | ${false} | ${[{ domain: 'Settings', groups: ['Audit log', 'Users'], controls: [{ name: 'Users', checked: false, subOptions: [{ name: 'Users Add', checked: false }, { name: 'Max Users', checked: false, additionalInput: { min: 1, max: 10, value: undefined } }] }] }]}
      `('$scenario', ({ control, expected }) => {
        expect(updateControl(mockState, control)).toEqual(expected);
      });

      it('should "NOT" update nested control if parent is "false', () => {
        const mockStateScenario = JSON.parse(JSON.stringify(mockState));
        mockStateScenario[0].controls[0].checked = false;
        expect(updateControl(mockStateScenario, 'Users Add')).toEqual([
          {
            domain: 'Settings',
            groups: ['Audit log', 'Users'],
            controls: [
              {
                name: 'Users',
                checked: false,
                subOptions: [
                  {
                    name: 'Users Add',
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
        ]);
      });
    });
    describe('updateAdditionalInput', () => {
      it('should update additionalInput', () => {
        const mockStateScenario = JSON.parse(JSON.stringify(mockState));
        mockStateScenario.push({
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
        });
        expect(
          updateAdditionalInput(mockStateScenario, {
            name: 'Alert Rules',
            value: 3,
          })
        ).toEqual([
          {
            domain: 'Settings',
            groups: ['Audit log', 'Users'],
            controls: [
              {
                name: 'Users',
                checked: true,
                subOptions: [
                  { name: 'Users Add', checked: false },
                  {
                    name: 'Max Users',
                    checked: false,
                    additionalInput: { max: 10, min: 1 },
                  },
                ],
              },
            ],
          },
          {
            domain: 'Alerts',
            groups: ['Alert Manager', 'Alert Rules'],
            controls: [
              { name: 'Alert Manager', checked: true },
              {
                name: 'Alert Rules',
                checked: true,
                additionalInput: { max: 10, min: 1, value: 3 },
              },
            ],
          },
        ]);
      });

      it('should update additionalInput in nested control', () => {
        expect(
          updateAdditionalInput(mockState, { name: 'Max Users', value: 3 })
        ).toEqual([
          {
            domain: 'Settings',
            groups: ['Audit log', 'Users'],
            controls: [
              {
                name: 'Users',
                checked: true,
                subOptions: [
                  { name: 'Users Add', checked: false },
                  {
                    name: 'Max Users',
                    checked: false,
                    additionalInput: { min: 1, max: 10, value: 3 },
                  },
                ],
              },
            ],
          },
        ]);
      });
    });
  });
});
