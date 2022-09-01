import { Reducer } from 'redux';
import GlobalData from './GlobalData';

const removeIPayload = <T extends GlobalData.IPayload>(t: T): T => {
  return t;
};

export const initGlobalState: GlobalData.IPayload = Object.freeze(
  removeIPayload({
    login: {
      token: '',
    },
  }),
);

const GlobalReducer: Reducer<GlobalData.IPayload, GlobalData.IReducer> = (
  state = initGlobalState,
  { type, payload }: GlobalData.IReducer,
): GlobalData.IPayload => {
  switch (type) {
    case GlobalData.ActionType.SET:
      return { ...state, ...payload };

    case GlobalData.ActionType.CLEAR:
      return { ...initGlobalState };

    case GlobalData.ActionType.LOGIN:
      return {
        ...state,
        login: {
          token: payload.login.token,
        },
      };

    case GlobalData.ActionType.LOGOUT:
      return {
        ...state,
        login: {
          token: '',
        },
      };

    default:
      return state;
  }
};

export default GlobalReducer;
