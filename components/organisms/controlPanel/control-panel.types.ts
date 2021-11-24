import { ControlProperties } from '@latitude55/components';

export type ControlPanelProperties = {
  controls: DomainControl[];
};

type DomainControl = {
  domain: string;
  groups: string[];
  controls: ControlProperties[];
};
