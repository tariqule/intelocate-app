import React from 'react';

interface Context {
  toggleConnection: () => void;
  pingUrl: string;
}

const NetworkContext = React.createContext<Context>({
  pingUrl: 'https://mobile.intelocate.com/',
  toggleConnection: () => {},
});
export default NetworkContext;
