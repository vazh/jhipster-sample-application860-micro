import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'region',
    data: { pageTitle: 'Regions' },
    loadChildren: () => import('./jhipsterSampleApplication860/region/region.routes'),
  },
  {
    path: 'country',
    data: { pageTitle: 'Countries' },
    loadChildren: () => import('./jhipsterSampleApplication860/country/country.routes'),
  },
  {
    path: 'location',
    data: { pageTitle: 'Locations' },
    loadChildren: () => import('./jhipsterSampleApplication860/location/location.routes'),
  },
  {
    path: 'department',
    data: { pageTitle: 'Departments' },
    loadChildren: () => import('./jhipsterSampleApplication860/department/department.routes'),
  },
  {
    path: 'task',
    data: { pageTitle: 'Tasks' },
    loadChildren: () => import('./jhipsterSampleApplication860/task/task.routes'),
  },
  {
    path: 'employee',
    data: { pageTitle: 'Employees' },
    loadChildren: () => import('./jhipsterSampleApplication860/employee/employee.routes'),
  },
  {
    path: 'job',
    data: { pageTitle: 'Jobs' },
    loadChildren: () => import('./jhipsterSampleApplication860/job/job.routes'),
  },
  {
    path: 'job-history',
    data: { pageTitle: 'JobHistories' },
    loadChildren: () => import('./jhipsterSampleApplication860/job-history/job-history.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
