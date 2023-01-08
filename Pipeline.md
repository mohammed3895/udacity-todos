# Todos CircleCi PipeLine Diagram

### Before All you have to create RDS Database in Aws and set up in your code , and create empty S3 Bucket

## Build

    1. SetUp Enviroment
    2. Install Nodejs 16.10
    3. Check the Code
    4. Install Front End dependencies
    5. Install Api dependencies
    6. Build Front End
    7. Build Api

## Hold

    - in this step between build and deploy need to manual approve

## Deploy

    1. preparing Enviroment Variables (set your enviroment via set_env.sh to help circleCi send the variables to ElasticBeanstalk automatically via Eb Cli).
    2. Setting Eb Cli and run deployment Commands
    3. Installing Up AWS Cli
    4. Configuer AWS Access Key (You Have to add AWS IAM access key and secret key manually on circleCi Enviroment Variable).
    5. after success of all steps deployment will start sending api build folder to EB, and FrontEnd folder to S3.
