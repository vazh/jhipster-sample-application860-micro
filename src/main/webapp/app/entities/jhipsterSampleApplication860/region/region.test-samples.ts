import { IRegion, NewRegion } from './region.model';

export const sampleWithRequiredData: IRegion = {
  id: 9105,
};

export const sampleWithPartialData: IRegion = {
  id: 1184,
  regionName: 'beyond',
};

export const sampleWithFullData: IRegion = {
  id: 28702,
  regionName: 'what eek',
};

export const sampleWithNewData: NewRegion = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
