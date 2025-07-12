import { TfiFilter } from "react-icons/tfi";

const jobs = [
  {
    id: '001 AAA AA01',
    time: '4:00 PM, 12 May',
    status: 'Waiting Technician',
    color: 'bg-orange-400',
    avatar: 'https://i.pravatar.cc/100?u=1',
    name: 'John Doe',
    phone: '+91 9876543210',
  },
  {
    id: '007 AAA AA02',
    time: '4:00 PM, 12 May',
    status: 'Waiting Technician',
    color: 'bg-blue-400',
    avatar: 'https://i.pravatar.cc/100?u=2',
    name: 'Alice Smith',
    phone: '+91 8765432109',
  },
  {
    id: '008 AAA AA03',
    time: '4:00 PM, 12 May',
    status: 'Waiting Technician',
    color: 'bg-cyan-400',
    avatar: 'https://i.pravatar.cc/100?u=3',
    name: 'Bob Johnson',
    phone: '+91 7654321098',
  },
];

const UpcomingJobs = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow h-[350px] w-full text-sm flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-neutral">Upcoming Jobs</h3>
          <TfiFilter size={20} className="text-neutral" />
        </div>

        <hr />
        <div className="space-y-3 mt-4">
          {jobs.map((job, id) => (
            <div
              key={id}
              className={`p-3 rounded-lg text-white ${job.color} min-h-[70px] flex items-center justify-between`}
            >
              <div>
                <h4 className="font-semibold text-sm mb-1">{job.id}</h4>
                <p className="text-xs">{job.time}</p>
              </div>

              <div className="flex items-center gap-2 text-xs">

                <div className="flex flex-col leading-tight">
                  <span className="font-semibold text-center">{job.name}</span>
                  <span className="text-[11px]">{job.phone}</span>
                </div>
                <img
                  src={job.avatar}
                  alt="Avatar"
                  className="w-8 h-8 rounded-full border border-white shadow"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="text-primary text-sm hover:underline mt-2">View All</button>
    </div>
  );
};

export default UpcomingJobs;
