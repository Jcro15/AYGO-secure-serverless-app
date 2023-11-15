// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "1aajt370k4md9f2aqjgvos62eb",     // CognitoClientID
  "api_base_url": "https://rvqm50lsk5.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-secure-serverless-app-stack.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "http://localhost:8080"                                      // AmplifyURL
};

export default config;
