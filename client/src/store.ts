import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
// Слайсы - это отдельные модули нашего приложения. У каждого слайса - свой редьюсер.  import tasksSlice from './features/tasks/tasksSlice';
import projectsSlice from './components/Projects/projectsSlice';
import filterSlice from './components/Projects/filterSlice';
import { houseSlice } from './slice/houseSlice';

const store = configureStore({
  reducer: {
    projects: projectsSlice, 
    houses: houseSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type RootState = ReturnType<typeof store.getState>;
export default store;
