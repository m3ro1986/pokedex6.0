import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const trainerNameSlice = createSlice({
    name: 'trainerName',
    initialState: '',
    reducers: {
        getName: ( state, action ) => {
            const name = action.payload;
            return name;
        }
    }
})

export const { getName } = trainerNameSlice.actions;

export default trainerNameSlice.reducer;