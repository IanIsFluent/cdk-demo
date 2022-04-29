import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigw from 'aws-cdk-lib/aws-apigateway';

export class CdkWorkshopStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // defines an AWS Lambda resource
    // first parameter - scope: almost always this (create child in the context of this stack)
    // second parameter - id: unique (in the stack) local identity of the construct
    const hello = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset('lambda'), // this is a path!
      handler: 'hello.handler', // entrypoint
    });

    // defines a Lambda Rest Api Gateway in front of the Lambda resource defined above
    new apigw.LambdaRestApi(this, 'Endpoint', {
      handler: hello,
    });
  }
}
