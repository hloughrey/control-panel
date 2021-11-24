export type ControlProperties = {
  name: string;
  checked: boolean;
  additionalInput?: {
    min: number;
    max: number;
    value: number | undefined;
  };
  subOptions?: ControlProperties[];
};
