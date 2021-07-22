import axios from "axios";

export const filterjobSrvc = async ({
  job_types,
  experience_levels,
  salary_range,
  Job_posting_category,
  job_title,
  salary_frequency,
  industry_categories,
}) => {
  const url = `https://hired-api.herokuapp.com/api/findJobs?job_types=${job_types}&experience_levels=${experience_levels}&salary_range=${salary_range}&Job_posting_category=ne${Job_posting_category}&job_title=${job_title}&salary_frequency=${salary_frequency}&industry_categories=${industry_categories}`;
  const response = await axios.get(url);
  console.log("response axios", response);
  return response;
};
