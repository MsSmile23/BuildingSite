import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './type';
import * as api from './api';

// начальный state
const initialState: State = { projects: [], error: '' };

export const projectsInit = createAsyncThunk('projects/init', () =>
  api.getProjects()
);

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    // отдельные кейсы редьюсера записываются в отдельные функции
    // здесь можно мутировать state, RTK создаст копию state автоматически
    // plus: (state) => {
    //   state.count += 1;
  },

  extraReducers: (builder) => {
    builder

      .addCase(projectsInit.fulfilled, (state, action) => {
        state.projects = action.payload;
      })

      .addCase(projectsInit.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default projectsSlice.reducer;
