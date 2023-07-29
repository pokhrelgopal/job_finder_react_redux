import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "./store/reducers/jobSlice";
import { CiSearch, CiLocationOn } from "react-icons/ci";
import Card from "./components/Card";
const App = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [fullTime, setFullTime] = useState(false);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const jobs = useSelector((state) => state.jobs.jobs);

  const filteredJobs = jobs.filter((job) =>
    job.job_position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredJobsByLocation = jobs.filter((job) =>
    job.country_name.toLowerCase().includes(searchLocation.toLowerCase())
  );

  const filteredJobsByFullTime = fullTime
    ? filteredJobs.filter((job) => job.employment_type === "full-time")
    : filteredJobs;

  const finalFilteredJobs = filteredJobsByLocation.filter((job) =>
    filteredJobsByFullTime.includes(job)
  );

  return (
    <main className="bg-dark min-h-screen md:px-20">
      <section className="container px-4 md:px-0 mx-auto py-10">
        <form
          action=""
          className="flex flex-col md:flex-row items-center justify-center bg-lessDark rounded text-white w-fit"
        >
          <div className="relative border-r border-lightGray">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              name="search"
              id="search"
              className="bg-lessDark pl-8 py-3 w-80 rounded  outline-0"
              placeholder="Filter by title"
            />
            <CiSearch className="absolute top-3 left-1 text-2xl" />
          </div>
          <div className="relative border-r border-lightGray">
            <input
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              type="text"
              name="search"
              id="search"
              className="bg-lessDark pl-8 py-3 w-80 rounded  outline-0"
              placeholder="Filter by location"
            />
            <CiLocationOn className="absolute top-3 left-1 text-2xl" />
          </div>
          <div className="px-4 flex items-center space-x-2">
            <input
              value={fullTime}
              onChange={(e) => setFullTime(e.target.checked)}
              type="checkbox"
              name="fulltime"
              id="fulltime"
              className="text-lg"
            />
            <p>Full Time Only</p>
          </div>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
          {finalFilteredJobs.map((job) => (
            <Card key={job.id} job={job} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default App;
