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

import gitopsSrc from './images/gitops.png'
import kubernetesSrc from './images/kubernetes.png'
import kustomizeSrc from './images/kustomize.png'
import helmSrc from './images/helm.png'
import prSrc from './images/pr.png'
import prValidateSrc from './images/pr-validate.png'
import fluxSrc from './images/flux.png'
import scaleSrc from './images/scale.png'
import clockSrc from './images/clock.png'
import deploySrc from './images/deploy-types.png'
import syncStateSrc from './images/sync-state.png'
import bikeSrc from './images/bikes.gif'
import metricSrc from './images/metrics.png'

const helmReleaseCode = `apiVersion: helm.toolkit.fluxcd.io/v2beta1
kind: HelmRelease
metadata:
  name: appdeploy
  namespace: myapp
spec:
  interval: 5m
  chart:
    spec:
      chart: myapp
      version: '4.0.x'
      interval: 1m
  values:
    environment: development
    region: us-west
    replicaCount: 2`

const envPatch = `apiVersion: helm.toolkit.fluxcd.io/v2beta1
kind: HelmRelease
metadata:
  name: appdeploy
  namespace: myapp
spec:
  values:
    environment: production
    region: us-east
    replicaCount: 4`

const clusterConfig = `- base
 -- release.yaml
- development
 -- release-patch.yaml
- production
 -- release-patch.yaml`

const providerCfg = `apiVersion: notification.toolkit.fluxcd.io/v1beta1
kind: Provider
metadata:
  name: alertmanager
  namespace: flux
spec:
  type: alertmanager
  address: "<alertmanager-url>/api/v2/alerts/"`

const alertCfg = `apiVersion: notification.toolkit.fluxcd.io/v1beta1
kind: Alert
metadata:
  name: helm-errors
  namespace: flux
spec:
  providerRef: 
    name: alertmanager
  eventSeverity: error
  eventSources:
    - kind: HelmRelease
      name: '*'`

const bootstrapCode = `flux bootstrap github \
--owner=$GITHUB_USER \
--repository=gitops-demo \
--branch=main \
--path=./clusters/demo \
--personal`

const podInfoForward = `kubectl port-forward svc/podinfo 9898:9898`

const jobCfg = `apiVersion: batch/v1
kind: Job
metadata:
  name: fetch-thread-dump-1
spec:
  template:
    spec:
      containers:
      - name: thread-dumper
        image: debug
        command: ["thread-dumper", "fetch"]
      restartPolicy: Never
  backoffLimit: 4`

const operatorCfg = `apiVersion: custom.component/v1alpha1
kind: CustomRelease
metadata:
  name: custom-deploy
spec:
  deployStage: apps
  effectiveFrom: "2022-03-28T19:37:59Z"
  forceStatefulsets: true
  rollback: true
  targetState: Present
  timeout: 600
  ...`

const cliTool = `gitopsctl restart
gitopsctl uninstall
gitopsctl logdump
...`

renderPresentation({
  title: 'Real Life Gitops',
  align: 'top',
  slides: [
    <Slide>
      <Title>Real Life Gitops</Title>
      <Statement>- Dave Thompson</Statement>
    </Slide>,
    <Slide>
      <Title>What the heck is gitops?</Title>
      <img src={gitopsSrc} alt="gitops" />
    </Slide>,
    <Slide>
      <List title="Why should you use gitops?">
        {['Declarative deployments', 'Pull request workflow', 'Simple scaling']}
      </List>
    </Slide>,
    <Slide>
      <Title>Gitops implementations</Title>
      <img src={kubernetesSrc} alt="kubernetes" />
      <br />
      <br />
      <Delay>
        <a href="https://fluxcd.io/"><Highlight>Flux CD</Highlight></a>
        <br />
        <br />
        <a href="https://argo-cd.readthedocs.io/en/stable/"><Highlight>Argo CD</Highlight></a>
      </Delay>
    </Slide>,
    <Slide>
      <Title>Kubernetes application components</Title>
      <List>
        {[
          'Workloads (deployment, statefulset, job)',
          'Configmaps',
          'Services',
          'Network Policies'
        ]}
      </List>
    </Slide>,
    <Slide>
      <Title>Packaging gitops deployments</Title>
      <img src={helmSrc} alt="helm" />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img src={kustomizeSrc} alt="kustomize" />
    </Slide>,
    <Slide>
      <List title="Why Helm?">
        {[
          'Versioned deployments',
          'Deploy hooks',
          'Post-deploy tests',
          'Rollback configuration',
          'Tooling and documentation ecosystem'
        ]}
      </List>
    </Slide>,
    <Slide>
      <Title>Declarative deployment yaml</Title>
      <Code>{helmReleaseCode}</Code>
    </Slide>,
    <Slide>
      <Title>Pull request workflow</Title>
      <img src={prSrc} alt="pr" />
      <br />
      <br />
      <img src={prValidateSrc} alt="pr" />
    </Slide>,
    <Slide>
      <img src={fluxSrc} alt="flux" />
      <Attribution><a href="https://fluxcd.io/docs/components/">diagram taken from fluxcd.io</a></Attribution>
    </Slide>,
    <Slide>
      <Title>Simple scaling</Title>
      <img src={scaleSrc} alt="scale" />
      <Attribution><a href="https://aws.amazon.com/about-aws/global-infrastructure/">diagram taken from aws.amazon.com</a></Attribution>
    </Slide>,
    <Slide>
      <Title>Configuring multiple clusters</Title>
      <Code>{clusterConfig}</Code>
    </Slide>,
    <Slide>
      <Title>Cluster patch</Title>
      <HBox>
        <div>
          <p>release.yaml</p>
          <Code>{helmReleaseCode}</Code>
        </div>
        <div>
          <p>production/release-patch.yaml</p>
          <Code>{envPatch}</Code>
        </div>
      </HBox>
    </Slide>,

    <Slide>
      <Title>It's DEMO time!</Title>
      <Delay><iframe src="http://localhost:9898/" width="600" height="600" /></Delay>
    </Slide>,

    <Slide>
      <Title>What are the tricky parts?</Title>
    </Slide>,
    <Slide>
      <Title>Observability</Title>
      <Code>{alertCfg}</Code>
    </Slide>,
    <Slide>
      <Title>Scheduling</Title>
      <img src={clockSrc} alt="clock" />
    </Slide>,
    <Slide>
      <Title>Manual changes and failed syncs</Title>
      <img src={syncStateSrc} alt="sync state" />
    </Slide>,
    <Slide>
      <Title>Multiple deploy types</Title>
      <img src={deploySrc} alt="deploy types" />
    </Slide>,
    <Slide>
      <Title>Customize the operator/controller</Title>
      <Code>{operatorCfg}</Code>
    </Slide>,
    <Slide>
      <Title>Operations + debugging</Title>
      <Code>{jobCfg}</Code>
    </Slide>,
    <Slide>
      <Title>Complexity and availability</Title>
      <Statement>git <Highlight>-&gt;</Highlight> pr validator <Highlight>-&gt;</Highlight> source controller <Highlight>-&gt;</Highlight> helm controller <Highlight>-&gt;</Highlight> release</Statement>
    </Slide>,
    <Slide>
      <Title>Build your own CLI</Title>
      <Code>{cliTool}</Code>
    </Slide>,

    <Slide>
      <a href="https://limscoder.github.io/present/gitops/index.html#/1"><Highlight>https://limscoder.github.io/present/gitops</Highlight></a>
      <br />
      <br />
      <img src={bikeSrc} alt="image" />
    </Slide>,
  ]
});
