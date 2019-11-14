import React from 'react';

import Background from 'react-present/components/content/Background';
import Title from 'react-present/components/content/Title';
import Atribution from 'react-present/components/content/Attribution';

import imgSrc from '../images/peer_to_peer.png';

export default function () {
  return (
    <Background>
      <Title>Peer-to-Peer Distributed Ledger</Title>
      <img src={ imgSrc } alt="peer to peer" />
      <Atribution>Satoshi Nakamoto: Oct 2008/Jan 2009</Atribution>
    </Background>);
}
