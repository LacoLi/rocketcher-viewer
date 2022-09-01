/*------------------------------------------------------------------------------------------------------------------------------------------
 * GlobalAction.tsx
 * WRITER : 모시깽이
 * DATE : 20XX-XX-XX
 * DISCRIPTION : 
 * TYPE : Redux Action
 * 개정이력 :
--------------------------------------------------------------------------------------------------------------------------------------------*/
import GlobalData from './GlobalData';

namespace GlobalAction {
  export const set = (payload: GlobalData.IPayload): GlobalData.IReducerDeepPartial => {
    return {
      type: GlobalData.ActionType.SET,
      payload: payload,
    };
  };

  export const clear = (): GlobalData.IReducerDeepPartial => {
    return {
      type: GlobalData.ActionType.CLEAR,
      payload: {},
    };
  };

  export const login = (token: GlobalData.IPayload['login']['token']): GlobalData.IReducerDeepPartial => {
    return {
      type: GlobalData.ActionType.LOGIN,
      payload: {
        login: {
          token,
        },
      },
    };
  };

  export const logout = (): GlobalData.IReducerDeepPartial => {
    localStorage.removeItem('login-token');

    return {
      type: GlobalData.ActionType.LOGOUT,
      payload: {},
    };
  };
}

export default GlobalAction;
