import { ILocation, NewLocation } from './location.model';

export const sampleWithRequiredData: ILocation = {
  id: 4975,
};

export const sampleWithPartialData: ILocation = {
  id: 11171,
  streetAddress: 'crossly so',
};

export const sampleWithFullData: ILocation = {
  id: 10191,
  streetAddress: 'atop',
  postalCode: 'between save before',
  city: 'Twin Falls',
  stateProvince: 'hollow fret unscramble',
};

export const sampleWithNewData: NewLocation = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
