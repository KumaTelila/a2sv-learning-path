import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jobsApi = createApi({
  reducerPath: "opportunities/search",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://akil-backend.onrender.com",
  }),
  endpoints: (builder) => ({
    // get all jobs post
    getAllJobs: builder.query({
      query: () => "/opportunities/search",
    }),
    //get job post by id
    getJobById: builder.query({
      query: (id) => `/opportunities/${id}`,
    }),
  }),
});

export const { useGetAllJobsQuery, useGetJobByIdQuery } = jobsApi;
