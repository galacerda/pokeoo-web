import { createContext, useCallback, useContext, useState } from 'react';
import SnackbarContainer from '../components/SnackbarContainer';
import { v4 as uuid } from 'uuid';

export const SnackbarContext = createContext({});

type ProviderProps = {
  children: React.ReactNode;
};

export type MessageType = {
  message: string;
  key: string;
};

const SnackbarProvider = ({ children }: ProviderProps) => {
  const [message, setMessage] = useState<string | null>(null);

  const showMessage = useCallback((message: string) => {
    setMessage(message);
  }, []);

  const hideMessage = useCallback(() => {
    setMessage(null);
  }, []);

  return (
    <SnackbarContext.Provider
      value={{
        showMessage,
      }}
    >
      {children}
      <SnackbarContainer message={message} hideMessage={hideMessage} />
    </SnackbarContext.Provider>
  );
};

function useSnackbar() {
  const context = useContext<any>(SnackbarContext);

  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }

  return context;
}

export { SnackbarProvider, useSnackbar };
