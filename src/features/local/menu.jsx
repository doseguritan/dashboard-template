import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    drawerOpen: true,
    isOpen: []
}

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setDrawer:(state, action) => {
            console.log(action?.payload)
            state.drawerOpen = action?.payload === undefined ? !state.drawerOpen : action?.payload;
        },
        setOpen: (state, action) => {
            state.isOpen = [action.payload]
        }
    }
});
export const { setDrawer, setOpen } = menuSlice.actions;
export default menuSlice;