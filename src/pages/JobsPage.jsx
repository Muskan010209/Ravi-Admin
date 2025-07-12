import React, { useState } from 'react';
import JobsComponent from '../components/JobsComponent';
import ContactForm from '../components/ContactForm';

const JobsPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const unassignedJobs = [
    { id: '101 BNG X01', time: '9:30 AM, 11 July', task: 'Air Conditioner Repair', status: 'unassigned' },
    { id: '102 BNG X02', time: '11:00 AM, 12 July', task: 'Refrigerator Gas Filling', status: 'unassigned' },
    { id: '103 BNG X03', time: '2:00 PM, 12 July', task: 'Ceiling Fan Installation', status: 'unassigned' },
    { id: '104 BNG X04', time: '5:30 PM, 13 July', task: 'Geyser Leakage Check', status: 'unassigned' },
  ];

  const assignedJobs = [
    { id: '201 BNG Y01', time: '10:00 AM, 9 July', task: 'Washing Machine Not Draining', technician: 'Anjali Verma', phone: '9876543210', status: 'assigned' },
    { id: '202 BNG Y02', time: '1:00 PM, 9 July', task: 'Gas Stove Ignition Issue', technician: 'Ravi Mehra', phone: '9876543211', status: 'assigned' },
    { id: '203 BNG Y03', time: '3:30 PM, 10 July', task: 'Oven Not Heating', technician: 'Deepak Rana', phone: '9876543212', status: 'assigned' },
    { id: '204 BNG Y04', time: '6:00 PM, 10 July', task: 'LED TV Wall Mounting', technician: 'Sonia Gupta', phone: '9876543213', status: 'assigned' },
  ];

  const finishedJobs = [
    { id: '301 BNG Z01', time: '8:00 AM, 8 July', task: 'Washing Machine Vibration', technician: 'Anjali Verma', phone: '9876543210', status: 'finished' },
    { id: '302 BNG Z02', time: '12:00 PM, 7 July', task: 'Microwave Door Not Closing', technician: 'Ravi Mehra', phone: '9876543211', status: 'finished' },
    { id: '303 BNG Z03', time: '4:00 PM, 6 July', task: 'Cooler Motor Replacement', technician: 'Sonia Gupta', phone: '9876543213', status: 'finished' },
  ];

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-semibold text-neutral">Thursday, 11 July</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <JobsComponent title="Unassigned Jobs" jobs={unassignedJobs} filter onJobClick={setSelectedJob} />
        <JobsComponent title="Assigned Jobs" jobs={assignedJobs} filter onJobClick={setSelectedJob} />
        <JobsComponent title="Finished Jobs" jobs={finishedJobs} filter onJobClick={setSelectedJob} />
      </div>

      {selectedJob && <ContactForm job={selectedJob} onClose={() => setSelectedJob(null)} />}
    </div>
  );
};

export default JobsPage;
