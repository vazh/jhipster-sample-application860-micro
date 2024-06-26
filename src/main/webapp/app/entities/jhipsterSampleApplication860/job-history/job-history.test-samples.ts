import dayjs from 'dayjs/esm';

import { IJobHistory, NewJobHistory } from './job-history.model';

export const sampleWithRequiredData: IJobHistory = {
  id: 25147,
};

export const sampleWithPartialData: IJobHistory = {
  id: 27866,
  endDate: dayjs('2024-06-25T23:13'),
};

export const sampleWithFullData: IJobHistory = {
  id: 1971,
  startDate: dayjs('2024-06-25T22:46'),
  endDate: dayjs('2024-06-25T18:55'),
  language: 'FRENCH',
};

export const sampleWithNewData: NewJobHistory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
