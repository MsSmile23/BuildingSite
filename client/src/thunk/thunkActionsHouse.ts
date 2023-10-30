import { createAsyncThunk } from "@reduxjs/toolkit";


export const getHouses = createAsyncThunk("houses/all", async () => {
    try { 
        const result = await fetch("http://localhost:3000/api/houses");
        return result.json(); 
    }
    catch(err){console.log(err)}
});
