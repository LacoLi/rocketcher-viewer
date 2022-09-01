/*------------------------------------------------------------------------------------------------------------------------------------------
 * MainAction.tsx
 * WRITER : 모시깽이
 * DATE : 20XX-XX-XX
 * DISCRIPTION : 
 * TYPE : Redux Action
 * 개정이력 :
--------------------------------------------------------------------------------------------------------------------------------------------*/
import MainData from './MainData';

namespace MainAction {
  export const set = (payload: MainData.IPayload): MainData.IReducerDeepPartial => {
    return {
      type: MainData.ActionType.SET,
      payload: payload,
    };
  };

  export const clear = (): MainData.IReducerDeepPartial => {
    return {
      type: MainData.ActionType.CLEAR,
      payload: {},
    };
  };
}

export default MainAction;
