# Todos App InfraStructure

- open the front end site via link provided by S3 bucket
  for example http://todos2022.s3-website-us-east-1.amazonaws.com

- the client will interact with app in front end side and then
  the request will be sent to back end in ElasticBeanstalk Enviroment.

- the back end will fetch data from AWS RDS database and get the
  data back to ElasticBean as response.

- Backend server will send response as json to Front End wich in this case will
  be S3 bucket and the response will be handled to show data in client screen.

  ![Untitled Diagram drawio](https://user-images.githubusercontent.com/85784627/211214609-e6de4bcf-af00-407b-98cd-36101fd0f31c.png)
