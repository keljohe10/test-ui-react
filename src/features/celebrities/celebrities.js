import { createSlice } from '@reduxjs/toolkit';
import getCelebrities from './celebritiesThunk';

export const celebritiesSlice = createSlice({
  name: 'celebrities',
  initialState: {
    entities: [],
    loading: false,
  },
  reducers: {
    votePostive: (state, { payload }) => {
      const { id } = payload;
      const { entities } = state;
      const newState = {
        ...state,
        entities: entities.map((entity) => {
          const { votes } = entity;
          const { positive } = votes;
          return entity.id === id
            ? { ...entity, votes: { ...votes, positive: positive + 1 } }
            : entity;
        }),
      };

      return newState;
    },
    voteNegative: (state, { payload }) => {
      const { id } = payload;
      const { entities } = state;
      const newState = {
        ...state,
        entities: entities.map((entity) => {
          const { votes } = entity;
          const { negative } = votes;
          return entity.id === id
            ? { ...entity, votes: { ...votes, negative: negative + 1 } }
            : entity;
        }),
      };

      return newState;
    },
  },
  extraReducers: {
    [getCelebrities.pending]: (state) => ({
      ...state,
      loading: true,
    }),
    [getCelebrities.fulfilled]: (state, { payload }) => {
      const { celebrities } = payload;
      return {
        ...state,
        loading: false,
        entities: celebrities,
      };
    },
    [getCelebrities.rejected]: (state, { payload }) => ({
      ...state,
      loading: false,
      errorMessage: payload,
    }),
  },
});

export const { votePostive, voteNegative } = celebritiesSlice.actions;

export default celebritiesSlice.reducer;
