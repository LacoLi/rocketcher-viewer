/*------------------------------------------------------------------------------------------------------------------------------------------
 * Main.tsx
 * WRITER : 최정근
 * DATE : 2022-09-01
 * DISCRIPTION : 
 * TYPE : Page
 * 개정이력 :
--------------------------------------------------------------------------------------------------------------------------------------------*/
import React from 'react';
import axios from 'axios';
import { Button } from 'antd';

type InfoType = {
  result: 'ok' | 'fail';
  data?: object;
};

interface MainProps {}
function Main(props: MainProps) {
  /* ――――――――――――――― Variable ――――――――――――――― */
  /* ===== Props ===== */
  const {} = props;
  /* ===== State ===== */
  const [username, setUsername] = React.useState<string>('LacoLico');
  const [info, setInfo] = React.useState<InfoType>();
  /* ===== Const ===== */
  /* ====== API ====== */
  const getInfo = () => {
    const url = 'http://localhost:9999';

    axios
      .get(`${url}/show/${username}`)
      .then((response) => {
        setInfo(response.data);
      })
      .catch((e) => {
        console.log('[Error] ', e);
      });
  };

  /* ―――――――――――――――― Method ―――――――――――――――― */

  /* ―――――――――――――― Use Effect ―――――――――――――― */

  /* ―――――――――――――――― Return ―――――――――――――――― */
  return (
    <div data-page="main">
      <em>{info?.result}</em>
      <Button onClick={() => getInfo()}>클릭</Button>
    </div>
  );
}

namespace Main {}

export default Main;
