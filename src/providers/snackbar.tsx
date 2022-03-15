import { createContext, useContext, useEffect, useState } from 'react';
import { AttemptLettersType } from '../components/AttemptLetters';
import { setItemsAtLocalStorage } from '../utils/functions/setItemnsAtLocalStorage';
import { startEndTime } from '../utils/functions/startEndTime';

export const SnackbarContext = createContext({});

type ProviderProps = {
  children: React.ReactNode;
};

const SnackbarProvider = ({ children }: ProviderProps) => {
  const [messages, setMessages] = useState();

  useEffect(() => {});

  return (
    <SnackbarContext.Provider
      value={{
        letter,
        setLetter,
      }}
    >
      {children}
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
