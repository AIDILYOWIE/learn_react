import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginService } from "../../services/api";

export const handleLogin = createAsyncThunk(
  "login/handleLogin",
  async (credential, thunkAPI) => {
    try {
      const token = await new Promise((resolve, reject) => {
        loginService(credential, (success, result) => {
          if (success) {
            resolve(result);
          } else {
            reject(result);
          }
        });
      });

      localStorage.setItem("token", token);
      return token;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    token: null,
    status: "idle",
    error: null,
  },
  reducers: {
    logout(state) {
      (state.token = null), (state.status = "idle"), (state.error = null);
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleLogin.pending, (state) => {
        (state.status = "loading"), (state.error = null);
      })
      .addCase(handleLogin.fulfilled, (state, action) => {
        (state.status = "succeded"), (state.token = action.payload);
      })
      .addCase(handleLogin.rejected, (state, action) => {
        (state.status = "failed"), (state.error = action.payload);
      });
  },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;