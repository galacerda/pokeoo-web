import { createContext, useContext, useEffect, useState } from 'react';
import { AttemptLettersType } from '../components/AttemptLetters';
import { setItemsAtLocalStorage } from '../utils/functions/setItemnsAtLocalStorage';
import { startEndTime } from '../utils/functions/startEndTime';

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
  const [data, setData] = useState<any>(null);
  const [attemptValues, setAttemptValues] = useState<AttemptLettersType[][]>(
    []
  );

  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    const dataLocalStorage = localStorage.getItem('data');
    console.log(dataLocalStorage);

    if (dataLocalStorage) {
      const dataLocalStorageParsed = JSON.parse(dataLocalStorage as string);
      const { end } = dataLocalStorageParsed.time;

      if (Date.now() >= end) {
        setItemsAtLocalStorage(attemptValues, states, control, stats);
      } else {
        setAttemptValues(dataLocalStorageParsed.attemptValues);
        setStates(dataLocalStorageParsed.states);
        setControl(dataLocalStorageParsed.control);
        setStats(dataLocalStorageParsed.stats);
      }
    } else setItemsAtLocalStorage(attemptValues, states, control, stats);
  }, []);

  useEffect(() => {
    if (!firstRender) {
      console.log('aaa');
      setItemsAtLocalStorage(attemptValues, states, control, stats);
    } else setFirstRender(false);
  }, [attemptValues, states, control, stats]);

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
