import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  drugs: [],
  loading: false,
  error: null,
  drug: [],
};

// add a drug
export const addDrugThunk = createAsyncThunk("drugs/addDrug", async (drugs) => {
  try {
    const response = await fetch("http://localhost:8081/pharm/v1/drug", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        drug_name: drugs.drug_name,
        description: drugs.description,
        drug_code: drugs.drug_code,
        unit_of_pricing: drugs.unit_of_pricing,
        price: drugs.price,
      }),
    });
    const data = await response.json(drugs);
    return data;

  } catch (error) {
    console.log(error);
  }
});

// fetch all drugs
export const fetchDrugsThunk = createAsyncThunk(
  "drugs/allDrugs",
  async (drugs) => {
    try {
      const response = await fetch("http://localhost:8081/pharm/v1/drugs");
      const data = await response.json(drugs);
      return data;

    } catch (error) {
      console.log(error);
    }
  }
);

// fetch a single drug
export const fetchDrugThunk = createAsyncThunk("drug/allDrug", async (drug) => {
  try {
    const response = await fetch(`http://localhost:8081/pharm/v1/drug/${drug}`);
    // eslint-disable-next-line no-unused-vars
    const data = await response.json();
    return data;

  } catch (error) {
    console.log(error);
  }
});

// delete a drug
export const deleteDrugThunk = createAsyncThunk(
  "drugs/deleteDrug",
  async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8081/pharm/v1/drug/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // eslint-disable-next-line no-unused-vars
      const deleteDrug = await response.json();
      return id;

    } catch (error) {
      console.log(error);
    }
  }
);

// update a drug
export const updateDrugThunk = createAsyncThunk(
  "drugs/updateDrug",
  async (drug) => {
    try {
      const response = await fetch(
        `http://localhost:8081/pharm/v1/drug/${drug._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            drug_name: drug.drug_name,
            description: drug.description,
            drug_code: drug.drug_code,
            unit_of_pricing: drug.unit_of_pricing,
            price: drug.price,
          }),
        }
      );
      const drugUpdate = await response.json();
      return drugUpdate;

    } catch (error) {
      console.log(error);
    }
  }
);

const pharmacySlice = createSlice({
  name: "drugs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // adding a drug
      .addCase(addDrugThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(addDrugThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.drugs.push(action.payload);
      })
      .addCase(addDrugThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      //fetching all drugs
      .addCase(fetchDrugsThunk.pending, (state) => {
        state.loading = false;
      })
      .addCase(fetchDrugsThunk.fulfilled, (state, action) => {
        state.loading = true;
        state.drugs = action.payload;
      })
      .addCase(fetchDrugsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // //fetching a single drug
      .addCase(fetchDrugThunk.pending, (state) => {
        state.loading = false;
      })
      .addCase(fetchDrugThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.drugs = state.drugs.map((drug) =>
          drug._id === action.payload._id ? action.payload : drug
        );
        state.drug = action.payload;

      })
      .addCase(fetchDrugThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // deleting a drug
      .addCase(deleteDrugThunk.pending, (state) => {
        state.loading = false;
      })
      .addCase(deleteDrugThunk.fulfilled, (state, action) => {
        state.loading = true;
        state.drugs = state.drugs.filter((drug) => drug._id !== action.payload);
      })
      .addCase(deleteDrugThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // updating a drug
      .addCase(updateDrugThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateDrugThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.drugs = state.drugs.map((drug) =>
          drug._id === action.payload._id ? action.payload : drug
        );
      })
      .addCase(updateDrugThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});


export default pharmacySlice.reducer;
