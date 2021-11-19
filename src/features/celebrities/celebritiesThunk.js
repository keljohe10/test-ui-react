import { createAsyncThunk } from '@reduxjs/toolkit';
import request from '../../api/requests';

const getCelebrities = createAsyncThunk(
  'celebrities/getCelebrities',
  async (url = '/celebrities', { rejectWithValue }) => {
    try {
      const res = await request.get(url);
      return res;
    } catch (error) {
      const message = 'Opps there seems to be an error';
      return rejectWithValue(message);
    }
  },
);

export default getCelebrities;
