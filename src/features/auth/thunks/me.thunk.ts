import { createAsyncThunk } from '@reduxjs/toolkit';


import { ENDPOINT_AUTH_ME } from '../endpoints';
import { RoleTypeEnums } from '../../../common/constants';

export const fetchMe = createAsyncThunk('auth/fetchMe', async (_, { rejectWithValue }) => {
  try {
    // get user ENDPOINT_AUTH_ME
    return await Promise.resolve({first_name: 'Kodir', role: RoleTypeEnums.SuperAdmin});
  } catch (error) {
    return rejectWithValue(error);
  }
});
