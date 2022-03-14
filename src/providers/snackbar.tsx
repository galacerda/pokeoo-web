import { createContext, useContext, useState } from 'react';
import SnackbarContainer from '../components/SnackbarContainer';

export const SnackbarContext = createContext({});

type ProviderProps = {
  children: React.ReactNode;
};

export type MessageType = {
  message: string;
  key: number;
};

const SnackbarProvider = ({ children }: ProviderProps) => {
  const [messages, setMessages] = useState<MessageType[]>([]);

  return (
    <SnackbarContext.Provider
      value={{
        messages,
        setMessages,
      }}
    >
      {children}
      <SnackbarContainer messages={messages} setMessages={setMessages} />
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
