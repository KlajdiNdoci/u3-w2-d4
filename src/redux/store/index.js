const initialState = {
  jobs: {
    content: [],
  },
  savedJobs: {
    content: [],
  },
  query: {
    content: "",
  },
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_JOBS":
      return {
        ...state,
        jobs: {
          ...state.jobs,
          content: action.payload,
        },
      };
    case "QUERY":
      return {
        ...state,
        query: {
          ...state.query,
          content: action.payload,
        },
      };
    case "SAVE_JOB":
      return {
        ...state,
        savedJobs: {
          ...state.savedJobs,
          content: [...state.savedJobs.content, action.payload],
        },
      };

    case "REMOVE_JOB":
      return {
        ...state,
        savedJobs: {
          ...state.savedJobs,
          content: [
            ...state.savedJobs.content.slice(0, action.payload),
            ...state.savedJobs.content.slice(action.payload + 1),
          ],
        },
      };
    default:
      return state;
  }
};

export default myReducer;
