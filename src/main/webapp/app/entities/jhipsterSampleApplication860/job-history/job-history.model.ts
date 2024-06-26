import dayjs from 'dayjs/esm';
import { IJob } from 'app/entities/jhipsterSampleApplication860/job/job.model';
import { IDepartment } from 'app/entities/jhipsterSampleApplication860/department/department.model';
import { IEmployee } from 'app/entities/jhipsterSampleApplication860/employee/employee.model';
import { Language } from 'app/entities/enumerations/language.model';

export interface IJobHistory {
  id: number;
  startDate?: dayjs.Dayjs | null;
  endDate?: dayjs.Dayjs | null;
  language?: keyof typeof Language | null;
  job?: Pick<IJob, 'id'> | null;
  department?: Pick<IDepartment, 'id'> | null;
  employee?: Pick<IEmployee, 'id'> | null;
}

export type NewJobHistory = Omit<IJobHistory, 'id'> & { id: null };
