import React from 'react';
import glamorous from 'glamorous';

import Background from 'react-present/components/content/Background';
import Title from 'react-present/components/content/Title';

import bitSrc from '../images/bitcoin.png';
import etherSrc from '../images/ether.png';

const HBox = glamorous.div({
  display: 'flex'
});

const Logo = glamorous.img({
  height: 500,
  width: 500,
  marginRight: 25
});

export default function () {
  return (
    <Background>
      <Title>"Cryptocurrency"</Title>
      <HBox>
        <Logo src={ bitSrc } alt="bitcoin" />
        <Logo src={ etherSrc } alt="ethereum" />
      </HBox>
    </Background>);
}
