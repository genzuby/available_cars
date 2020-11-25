import moxios from 'moxios';
import { store, notfountStore, providerValue } from '../../testUtil';
import {
  getColorsList,
  getManufaturersList,
  getAvailableCarList,
  getDetailInfo,
} from './index';

describe('Test actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('stores correctly from getUserList', () => {
    const expectState = ['red'];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectState,
      });
    });

    return store.dispatch(getColorsList()).then(() => {
      const newState = store.getState();
      expect(newState.colorFilter).toStrictEqual(expectState);
    });
  });

  it('stores correctly from getManufaturersList', () => {
    const expectState = [{ name: 'Audi' }];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectState,
      });
    });

    return store.dispatch(getManufaturersList()).then(() => {
      const newState = store.getState();
      expect(newState.manufacturersFilter).toStrictEqual(expectState);
    });
  });

  it('stores correctly from getAvailableCarList', () => {
    const expectState = {
      cars: [providerValue],
      totalPageCount: 10,
      totalCarsCount: 100,
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectState,
      });
    });

    return store.dispatch(getAvailableCarList({ color: 'black' })).then(() => {
      const newState = store.getState();
      expect(newState.carList).toStrictEqual(expectState);
    });
  });

  it('stores correctly from getDetailInfo', () => {
    const expectState = providerValue;

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectState,
      });
    });

    return store.dispatch(getDetailInfo(10907)).then(() => {
      const newState = store.getState();
      expect(newState.carDetailInfo).toStrictEqual(expectState);
    });
  });

  it('stores correctly from 404 error from getDetailInfo', () => {
    const expectState = { stockNumber: 'notfound' };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectState,
      });
    });

    return notfountStore.dispatch(getDetailInfo(10907)).then(() => {
      const newState = notfountStore.getState();
      expect(newState.carDetailInfo.stockNumber).toStrictEqual('notfound');
    });
  });
});
