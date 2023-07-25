export async function getJobs() {
  const response = await fetch(`http://localhost:8000/jobs`);
  const jobs = await response.json();
  return jobs;
}
