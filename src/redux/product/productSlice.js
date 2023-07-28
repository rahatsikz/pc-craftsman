import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: {
    cpu: null,
    motherboard: null,
    ram: null,
    psu: null,
    storage: null,
    monitor: null,
    // others: null,
  },
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCpu: (state, action) => {
      state.product.cpu = action.payload;
    },
    setMotherboard: (state, action) => {
      state.product.motherboard = action.payload;
    },
    setRam: (state, action) => {
      state.product.ram = action.payload;
    },
    setPsu: (state, action) => {
      state.product.psu = action.payload;
    },
    setStorage: (state, action) => {
      state.product.storage = action.payload;
    },
    setMonitor: (state, action) => {
      state.product.monitor = action.payload;
    },
    // setOthers: (state, action) => {
    //   state.product.others = action.payload;
    // },
  },
});

export const {
  setCpu,
  setMotherboard,
  setRam,
  setPsu,
  setStorage,
  setMonitor,
  //   setOthers,
} = productSlice.actions;

export default productSlice.reducer;
