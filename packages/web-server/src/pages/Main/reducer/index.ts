import { Reducer } from 'redux';
import MainData from './MainData';

const removeIPayload = <T extends MainData.IPayload>(t: T): T => {
  return t;
};

export const initMainState: MainData.IPayload = Object.freeze(removeIPayload({}));

const MainReducer: Reducer<MainData.IPayload, MainData.IReducer> = (
  state = initMainState,
  { type, payload }: MainData.IReducer,
): MainData.IPayload => {
  switch (type) {
    case MainData.ActionType.SET:
      return { ...state, ...payload };

    case MainData.ActionType.CLEAR:
      return { ...initMainState };

    default:
      return state;
  }
};

export default MainReducer;
