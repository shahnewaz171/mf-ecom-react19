import { PropsWithChildren, useEffect } from 'react';
import { logger } from '@mf-ecom-react19/logger';

const Layout = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    return logger.subscribe((event) => {
      console.log('Host event received:', event.message);
    });
  }, []);

  return children;
};

export default Layout;
