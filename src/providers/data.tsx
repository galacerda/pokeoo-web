import { createContext, useContext, useEffect, useState } from 'react';
import { AttemptLettersType } from '../components/AttemptLetters';

export const DataContext = createContext({});

type DataProvider = {
  children: React.ReactNode;
};

const DataProvider = ({ children }: DataProvider) => {
  const [states, setStates] = useState([
    'writable',
    'hidden',
    'hidden',
    'hidden',
    'hidden',
    'hidden',
    'hidden',
  ]);
  const [stats, setStats] = useState<any>([
    { title: 'jogos', data: 0 },
    { title: 'vitórias', data: 0 },
    { title: 'melhor sequência', data: 0 },
  ]);
  const [control, setControl] = useState<any>({ over: false, win: false });
  const [attemptValues, setAttemptValues] = useState<AttemptLettersType[][]>(
    []
  );

  return (
    <DataContext.Provider
      value={{
        states,
        setStates,
        stats,
        setStats,
        control,
        setControl,
        attemptValues,
        setAttemptValues,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

function useData() {
  const context = useContext<any>(DataContext);

  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }

  return context;
}

export { DataProvider, useData };
