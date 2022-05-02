import { Stack, StackProps } from 'aws-cdk-lib';
import { SPADeploy, SPADeploymentWithCloudFront } from 'cdk-spa-deploy';
import { Construct } from 'constructs';

export interface SpaProps = {

}

export class Spa extends Construct {
  public readonly siteWithCf: SPADeploymentWithCloudFront;
  constructor(scope: Construct, id: string) {
    super(scope, id);

    // new SPADeploy(this, 'spaDeploy').createBasicSite({
    //   indexDoc: 'index.html',
    //   websiteFolder: '../blog/dist/blog',
    // });

    const siteWithCf = new SPADeploy(this, 'cfDeploy').createSiteWithCloudfront(
      {
        indexDoc: 'index.html',
        websiteFolder: '../spa/build',

      }
    );

    this.siteWithCf = siteWithCf;
  }
}
