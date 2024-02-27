import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  labs: [],
  loading: false,
  error: null,
  lab: [],
  labType: []
};

// add a lab
export const addlabThunk = createAsyncThunk("labs/addLab", async (labs) => {
  try {
    const response = await fetch("http://localhost:8081/lab/v1/lab", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lab_item: labs.lab_item,
        lab_type: labs.lab_type,
        category: labs.category,
        sub_category: labs.sub_category,
        code: labs.code,
        price: labs.price,
      }),
    });
    const data = await response.json(labs);
    return data;
  } catch (error) {
    console.log(error);
  }
});

// fetch all labs
export const fetchLabsThunk = createAsyncThunk("labs/allLabs", async (labs) => {
  try {
    const response = await fetch("http://localhost:8081/lab/v1/labs");
    const data = await response.json(labs);
    return data;
  } catch (error) {
    console.log(error);
  }
});

// get lab type
export const fetchLabTypeThunk = createAsyncThunk(
  "labType/allLabType",
  async (labType) => {
    try {
      const response = await fetch("http://localhost:8081/lab/v1/labType");
      const data = await response.json(labType);
      return data;

    } catch (error) {
      console.log(error);
    }
  }
);

// fetch a single lab
export const fetchLabThunk = createAsyncThunk("lab/allLab", async (lab) => {
  try {
    const response = await fetch(`http://localhost:8081/lab/v1/lab/${lab}`);
    // eslint-disable-next-line no-unused-vars
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});

// delete a lab
export const deleteLabThunk = createAsyncThunk("labs/deleteLab", async (id) => {
  try {
    const response = await fetch(`http://localhost:8081/lab/v1/lab/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // eslint-disable-next-line no-unused-vars
    const deleteLab = await response.json();
    return id;
  } catch (error) {
    console.log(error);
  }
});

// update a lab
export const updateLabThunk = createAsyncThunk(
  "labs/updateLab",
  async (lab) => {
    try {
      const response = await fetch(
        `http://localhost:8081/lab/v1/lab/${lab._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            lab_item: lab.lab_item,
            lab_type: lab.lab_type,
            category: lab.category,
            sub_category: lab.sub_category,
            code: lab.code,
            price: lab.price,
          }),
        }
      );
      const labUpdate = await response.json();
      return labUpdate;
    } catch (error) {
      console.log(error);
    }
  }
);

const labSlice = createSlice({
  name: "labs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // adding a lab
      .addCase(addlabThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(addlabThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.labs.push(action.payload);
      })
      .addCase(addlabThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      //fetching all labs
      .addCase(fetchLabsThunk.pending, (state) => {
        state.loading = false;
      })
      .addCase(fetchLabsThunk.fulfilled, (state, action) => {
        state.loading = true;
        state.labs = action.payload;
      })
      .addCase(fetchLabsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // //fetching a single lab
      .addCase(fetchLabThunk.pending, (state) => {
        state.loading = false;
      })
      .addCase(fetchLabThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.labs = state.labs.map((lab) =>
          lab._id === action.payload._id ? action.payload : lab
        );
        state.lab = action.payload;
      })
      .addCase(fetchLabThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // fetching lab type
      .addCase(fetchLabTypeThunk.pending, (state) => {
        state.loading = false;
      })
      .addCase(fetchLabTypeThunk.fulfilled, (state, action) => {
        state.loading = true;
        state.labType = action.payload;
      })
      .addCase(fetchLabTypeThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // deleting a lab
      .addCase(deleteLabThunk.pending, (state) => {
        state.loading = false;
      })
      .addCase(deleteLabThunk.fulfilled, (state, action) => {
        state.loading = true;
        state.labs = state.labs.filter((lab) => lab._id !== action.payload);
      })
      .addCase(deleteLabThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // updating a lab
      .addCase(updateLabThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateLabThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.labs = state.labs.map((lab) =>
          lab._id === action.payload._id ? action.payload : lab
        );
      })
      .addCase(updateLabThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default labSlice.reducer;
