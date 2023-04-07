import React from 'react';
import glamorous from 'glamorous'
import { renderPresentation } from 'react-present';
import {
  Attribution,
  Code,
  Delay,
  Highlight,
  List,
  Slide,
  Statement,
  Title,
  Top
} from 'react-present/components/content';

const HBox = glamorous.span({
  display: 'flex',
  'flex-direction': 'row',
  'align-content': 'flex-start'
});

import ivoryTowerSrc from './images/ivory-tower.jpg'
import architectureGoalsSrc from './images/architecture-goals.png'
import improveSrc from './images/improve.png'
import agileSrc from './images/agile.png'
import dxSrc from './images/dx.png'
import testTypesSrc from './images/test-types.jpg'
import opsPlatformSrc from './images/ops-platform.png'

renderPresentation({
  title: 'Shortening the Feedback Loop',
  align: 'top',
  slides: [
    <Slide>
      <Title>Shortening the Feedback Loop</Title>
      <Statement>Dave Thompson</Statement>
    </Slide>,
    <Slide>
      <Title>What is software architecture?</Title>
      <img src={ivoryTowerSrc} alt="ivory-tower" />
    </Slide>,
    <Slide>
      <Statement>Architecture is the process used to design systems and structure software.</Statement>
    </Slide>,
    <Slide>
      <List title="Responding to change">
        {[
          'systems evolve continuously',
          'adaptation is more important than individual decisions'
        ]}
      </List>
    </Slide>,
    <Slide>
      <Title>Tackling scalability, performance, and cost</Title>
      <img src={architectureGoalsSrc} alt="architecture-goals" />
    </Slide>,
    <Slide>
      <Title>Optimize the feedback loop first</Title>
      <img src={improveSrc} alt="improve" />
    </Slide>,
    <Slide>
      <Title>Case study: test tooling</Title>
      <img src={testTypesSrc} alt="test-types" />
    </Slide>,
    <Slide>
      <Title>This sounds a lot like developer experience</Title>
      <img src={agileSrc} alt="agile" />
    </Slide>,
    <Slide>
      <Title>Platforms, automation, and tooling</Title>
      <img src={dxSrc} alt="developer-experience" />
    </Slide>,
    <Slide>
      <Title>Case study: OPs platform</Title>
      <img src={opsPlatformSrc} alt="ops-platform" />
    </Slide>,
    <Slide>
      <Title>Action items</Title>
      <Delay><Statement>Tech leads should consider DX in system design</Statement></Delay>
      <Delay><Statement>System design should be optimized for continual change</Statement></Delay>
      <Delay><Statement>Add scalability and performance to your DX tools</Statement></Delay>
    </Slide>,
    <Slide>
      <Title>Contacts</Title>
      <Statement><a href="https://platformengineering.org/slack-rd"><Highlight>Platform Engineering Slack</Highlight></a></Statement>
      <Statement><a href="https://www.linkedin.com/in/dthompso/"><Highlight>Linked In</Highlight></a></Statement>
      <Statement><a href="https://github.com/limscoder/present"><Highlight>github.com/limscoder/present</Highlight></a></Statement>
    </Slide>,
  ]
});
