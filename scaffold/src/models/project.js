import { queryProjectNotice } from '../services/api';

export default {
  namespace: 'project',

  state: {
    notice: [],
    loading: true,
  },

  effects: {
    *fetchNotice({ payload }, { call, put }) {
      yield put({
        type: 'changeLoading',
        payload: true,
      });
      const response = yield call(queryProjectNotice);
      yield put({
        type: 'saveNotice',
        payload: response.data,
      });
      yield put({
        type: 'changeLoading',
        payload: false,
      });
    },
  },

  reducers: {
    saveNotice(state, action) {
      return {
        ...state,
        notice: action.payload,
      };
    },
    changeLoading(state, action) {
      return {
        ...state,
        loading: action.payload,
      };
    },
  },
};
