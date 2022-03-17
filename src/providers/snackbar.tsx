import { createContext, useContext, useEffect, useState } from 'react';
import { AttemptLettersType } from '../components/AttemptLetters';
import SnackbarContainer from '../components/SnackbarContainer';
import { setItemsAtLocalStorage } from '../utils/functions/setItemnsAtLocalStorage';
import { startEndTime } from '../utils/functions/startEndTime';

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
