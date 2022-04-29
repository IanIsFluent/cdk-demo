import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class CdkWorkshopStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
  }

  // defines an AWS Lambda resource
  // first parameter - scope: almost always this (create child in the context of this stack)
  // second parameter - id: unique (in the stack) local identity of the construct
  hello = new lambda.Function(this, 'HelloHandler', {
    runtime: lambda.Runtime.NODEJS_14_X,
    code: lambda.Code.fromAsset('lambda'), // this is a path!
    handler: 'hello.handler', // entrypoint
  });
}
