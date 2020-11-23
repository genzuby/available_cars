import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

export const providerValue = {
  color: 'red',
  fuelType: 'Diesel',
  manufacturerName: 'Dodge',
  mileage: { number: 138210, unit: 'km' },
  modelName: 'Caliber',
  pictureUrl: 'car.svg',
  stockNumber: 10907,
};

const initialState = {
  carDetailInfo: providerValue,
  manufacturersFilter: [{ name: 'Audi' }],
  colorFilter: ['red'],
  carList: { cars: [providerValue], totalPageCount: 10, totalCarsCount: 100 },
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

export const store = mockStore(initialState);

export const localStorageMock = {
  getItem: jest.fn().mockImplementation(key => localStorageItems[key]),
  setItem: jest.fn().mockImplementation((key, value) => {
    localStorageItems[key] = value;
  }),
  clear: jest.fn().mockImplementation(() => {
    localStorageItems = {};
  }),
  removeItem: jest.fn().mockImplementation(key => {
    localStorageItems[key] = undefined;
  }),
};

export let localStorageItems = {};
