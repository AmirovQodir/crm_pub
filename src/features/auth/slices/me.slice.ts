import { createSlice } from '@reduxjs/toolkit';
import { IMe } from '../models';
import { fetchMe } from '../thunks';

interface InitialStateProps {
  isLoading: boolean;
  result: IMe | null;
  error: any;
}

const initialState: InitialStateProps = {
  isLoading: false,
  result: null,
  error: null,
};

export const meSlice = createSlice({
  name: 'me',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(fetchMe.pending, (state) => ({
      ...state,
      isLoading: true,
      result: null,
      error: null,
    }));

    builder.addCase(fetchMe.fulfilled, (state, { payload }) => ({
      ...state,
      isLoading: false,
      result: payload,
      error: null,
    }));

    builder.addCase(fetchMe.rejected, (state, { payload }) => ({
      ...state,
      isLoading: false,
      result: null,
      error: payload,
    }));
  }
});
