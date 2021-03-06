# CDK

[Features](https://aws.amazon.com/cdk/features/?refid=ce1f55b8-6da8-4aa2-af36-3f11e9a449ae)

Allows you to define your cloud resources using 'familiar programming languages'.

Programmable infrastructure as code.

'Constructs' cloud components that encode configuration, detail, boilerplate and glue logic. Adjustable and composable.

Creates AWS CloudFormation 'Stack's. Each CDK stack maps 1:1 with a CloudFormation stack. CDK Provides CFN Resources for all base-level AWS CloudFormation resources.

AWS CloudFormation: easy way to create a collection of related AWS and third-party resources, and provision and manage them in an orderly and predictable fashion.

Because it creates required sub-resources with sensible defaults, you can write a small amount of code to create large Cloud Formation definitions, and reuse without copy+paste+modify.

- CDK Toolkit (CLI)
- Construct Library
- [Construct Hub](https://constructs.dev/) (community constructs)

[CDK Workshop](https://cdkworkshop.com/)

## AWS Construct library

The SDK for creating AWS resources using CDK. One _module_ for each AWS service. [AWS CDK API Reference (v2)](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-construct-library.html)

## CDK CLI commands (I have known)

- bootstrap
- update
- destroy

The deployment stack code is TS, so needs to be compiled before running CDK CLI commands. `npm run watch` in another terminal.

### `cdk synth`

Generates and outputs the CloudFormation template. Usually not used by the end user use use use.

### `cdk bootstrap`

Run once before first deployment, or when upgrading the CDK itself.

Creates a stack including resources that are used in the toolkit’s operation - e.g. an S3 bucket to store templates and assets during deployment.

### `cdk deploy`

The good stuff!

1. Synthesizes the CloudFormation template from code
1. Uploads it to the CDK bootstrap stack
1. Works out the differences between the previous template and the new one
1. Creates any required archives and uploads them to the bootstrap stack
1. Applies the diff to update resources to satisfy the new template

### `cdk diff`

Shows what will happen when you run `cdk deploy`. Good to check - especially if you're expecting resources to be destroyed.

### `cdk deploy --hotswap` 🤯⏰⚠

Inspects changes and works out if a small change can be made instead - introducing 'drift' into the CF stack to let you debug changes more quickly.

Importantly the deploy time can go from >1m to 3s.

Will call `cdk deploy` itself if needed.

Don't use in production!

### `cdk watch` 🤯🤯

Calls `cdk deploy --hotswap` automatically on changes. So you can work on code, and have it deployed to the cloud ASAP (Added December 2021).

Files to watch controlled by `cdk.json` `watch` param.
