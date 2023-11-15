// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "11psekb021r7dp843vo4os0m7f",     // CognitoClientID
  "api_base_url": "https://dmo8xj84ka.execute-api.us-east-1.amazonaws.com/{StageNameParam}",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-secure-serverless-app-stack.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d146c8v59hvblc.amplifyapp.com"                                      // AmplifyURL
};

export default config;
