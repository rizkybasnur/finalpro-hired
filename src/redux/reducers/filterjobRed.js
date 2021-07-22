const initialState = {
  filteredJobs: [],
  job_types: [],
  experience_levels: [],
  salary_range: "",
  Job_posting_category: "",
  job_title: [],
  salary_frequency: "",
  industry_categories: [],
  loading: false,
  error: false,
  error_message: "",
};

const filterjobRed = (state = initialState, action) => {
  switch (action.type) {
    case "FILTERJOB/START":
      return {
        ...state,
        loading: true,
      };
    case "FILTERJOB/SUCCESS":
      return {
        ...state,
        filteredJobs: action.payload.filteredJobs,
        loading: false,
      };
    case "FILTERJOB/ERROR":
      return {
        ...state,
        loading: false,
        error: true,
        // error_message: action.payload.error_message,
      };

    case "FILTERJOBCHANGECATEGORY/START":
      return {
        ...state,
        industry_categories: action.payload.industry_categories,
        loading: false,
      };

    default:
      return { ...state };
  }
};

export default filterjobRed;
