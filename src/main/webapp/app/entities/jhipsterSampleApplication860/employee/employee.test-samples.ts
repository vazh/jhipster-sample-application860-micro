import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 205,
};

export const sampleWithPartialData: IEmployee = {
  id: 32743,
  email: 'Kyleigh2@yahoo.com',
  phoneNumber: 'weighty fictionalise',
  salary: 14494,
  commissionPct: 3686,
};

export const sampleWithFullData: IEmployee = {
  id: 8808,
  firstName: 'Neal',
  lastName: 'Kassulke',
  email: 'Delmer.Crooks55@yahoo.com',
  phoneNumber: 'till',
  hireDate: dayjs('2024-06-26T02:37'),
  salary: 89,
  commissionPct: 4245,
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
