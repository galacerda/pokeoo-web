import { createContext, useContext, useEffect, useState } from 'react';
import { AttemptLettersType } from '../components/AttemptLetters';
import { setItemsAtLocalStorage } from '../utils/functions/setItemnsAtLocalStorage';
import { startEndTime } from '../utils/functions/startEndTime';

export const KeyboardContext = createContext({});

type ProviderProps = {
  children: React.ReactNode;
};

const KeyboardProvider = ({ children }: ProviderProps) => {
  const [letter, setLetter] = useState<string>('');

  return (
    <KeyboardContext.Provider
      value={{
        letter,
        setLetter,
      }}
    >
      {children}
    </KeyboardContext.Provider>
  );
};

function useKeyboard() {
  const context = useContext<any>(KeyboardContext);

  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }

  return context;
}

export { KeyboardProvider, useKeyboard };
