import 'styled-components';
import { Theme } from '@latitude55/theme';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/naming-convention,@typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
