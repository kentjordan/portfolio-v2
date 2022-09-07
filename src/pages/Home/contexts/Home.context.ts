import { createContext   } from 'react';

import { ISwitchNav } from 'pages/Home/interfaces/ISwitchNav';

const InitSwitchNav: ISwitchNav = {
    switchNav: []
}

export const SwitchNavContext = createContext(InitSwitchNav)
