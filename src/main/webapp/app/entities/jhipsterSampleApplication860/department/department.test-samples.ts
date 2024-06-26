import { IDepartment, NewDepartment } from './department.model';

export const sampleWithRequiredData: IDepartment = {
  id: 29390,
  departmentName: 'blah',
};

export const sampleWithPartialData: IDepartment = {
  id: 2248,
  departmentName: 'near yield bar',
};

export const sampleWithFullData: IDepartment = {
  id: 24347,
  departmentName: 'gah sic',
};

export const sampleWithNewData: NewDepartment = {
  departmentName: 'woot that whoever',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
