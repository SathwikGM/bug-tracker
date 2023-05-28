
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../../store/store';
import { IDefect } from '../../Types/DefectTypes';



interface DefectsState {
  defects: IDefect[];
}

const initialState: DefectsState = {
  defects: [
    {
      _id: "",
      defectId: "",
      title: "",
      description: "",
      owners: [],
      status: "",
      priority: "",
      environment: "",
      createdBy: "",
      createdDate: "",
    }
  ]
}


const defectsSlice = createSlice({
  name: 'defects',
  initialState,
  reducers: {
    setDefects: (state, action:  PayloadAction<IDefect[]>) => {
      state.defects = action.payload;
    }
  }
})
export const {setDefects}= defectsSlice.actions;
export default defectsSlice.reducer;
