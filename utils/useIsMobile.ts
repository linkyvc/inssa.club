import isMobile from 'ismobilejs';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export const useIsMobile = (): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [value, setValue] = useState<boolean>(false);

  useEffect(
    // Only iOS for now
    () => setValue(isMobile(window.navigator).apple.device), //
    [],
  );

  return [value, setValue];
};
