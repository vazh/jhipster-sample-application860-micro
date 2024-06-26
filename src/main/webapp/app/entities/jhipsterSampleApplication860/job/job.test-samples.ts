import { IJob, NewJob } from './job.model';

export const sampleWithRequiredData: IJob = {
  id: 27562,
};

export const sampleWithPartialData: IJob = {
  id: 31956,
  minSalary: 17175,
  maxSalary: 17710,
};

export const sampleWithFullData: IJob = {
  id: 7374,
  jobTitle: 'Regional Metrics Engineer',
  minSalary: 31795,
  maxSalary: 7501,
};

export const sampleWithNewData: NewJob = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
