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
import Eevee from 'component/Eevee';
import PokemonFriends from 'component/PokemonFriends';
import MysteriousGarden from 'component/MysteriousGarden';
import Pikaboo from 'component/Pikaboo';
import PumpkinPikachu from 'component/PumpkinPikachu';

type InfoType = {
  result: 'ok' | 'fail';
  data?: object;
};

interface MainProps { }
function Main(props: MainProps) {
  /* ――――――――――――――― Variable ――――――――――――――― */
  /* ===== Props ===== */
  const { } = props;
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
    // <div data-page="main" className='mint-grad-bg'>
    <div data-page="main">
      <em>{info?.result}</em>
      {/* <Eevee />
      <PokemonFriends />
      <MysteriousGarden />
      <PumpkinPikachu /> */}
      <Pikaboo />
      <Button onClick={() => getInfo()}>클릭</Button>
    </div>
  );
}

namespace Main { }

export default Main;
