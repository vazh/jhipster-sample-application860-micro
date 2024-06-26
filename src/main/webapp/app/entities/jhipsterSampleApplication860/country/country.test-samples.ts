import { ICountry, NewCountry } from './country.model';

export const sampleWithRequiredData: ICountry = {
  id: 14434,
};

export const sampleWithPartialData: ICountry = {
  id: 6563,
};

export const sampleWithFullData: ICountry = {
  id: 5329,
  countryName: 'speedy despite midst',
};

export const sampleWithNewData: NewCountry = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
