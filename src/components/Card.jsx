/* eslint-disable react/prop-types */
import timeAgo from "../helpers/timestampConverter";

const Card = ({ job }) => {
  return (
    <div className="bg-lessDark text-lightGray rounded-lg p-5 space-y-2 min-h-[150px] flex flex-col justify-between">
      <p className="space-x-2 text-sm tracking-wide">
        <span>{timeAgo(job.timestamp)}</span>
        <span>&#x2022;</span>
        <span className="capitalize">{job.employment_type}</span>
      </p>
      <p className="font-semibold tracking-wide text-xl">{job.job_position}</p>
      <p className="text-sm text-[#778]">{job.company_name}</p>
      <p className="mt-5 text-indigo font-semibold tracking-wide">
        {job.country_name}
      </p>
    </div>
  );
};

export default Card;
