import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 835,
};

export const sampleWithPartialData: ITask = {
  id: 14884,
  title: 'including',
};

export const sampleWithFullData: ITask = {
  id: 2761,
  title: 'snappy',
  description: 'instead silt imaginary',
};

export const sampleWithNewData: NewTask = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
