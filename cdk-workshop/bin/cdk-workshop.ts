#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkWorkshopStack } from '../lib/cdk-workshop-stack';

const app = new cdk.App();

new CdkWorkshopStack(app, `CdkWorkshopStack${getEnvName()}`);

function getEnvName() {
  const fromEnv = process.env.deployment_environment;
  if (fromEnv === 'main') {
    return '';
  } else if (fromEnv) {
    return `-${fromEnv}`;
  }
  return '-dev';
}
