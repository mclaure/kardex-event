## Artillery Load Test  
```
Loading Test api-kardex API using Artillery
```
---

## Pre-requisites

1. api-kardex API must be installed and running from [here](https://github.com/mclaure/kardex-event/tree/master/src/api-kardex)

![swagger](https://user-images.githubusercontent.com/24611413/77260845-c53d2380-6c60-11ea-935f-a622ca7064df.jpg)

2. RabbitMQ Queue listener must be installed and running from [here](https://github.com/mclaure/kardex-event/tree/master/src/queue-listener)

![queue-listener-start](https://user-images.githubusercontent.com/24611413/77261128-a8095480-6c62-11ea-91d9-5cdd994c12b6.jpg)

3. API subscriber must be installed and running from [here](https://github.com/mclaure/kardex-event/tree/master/src/api-subscriber)

![npm-start-8000](https://user-images.githubusercontent.com/24611413/77261271-b9069580-6c63-11ea-9513-f6c4b072e471.jpg)

4. Artillery module must be installed
```
    npm i -g artillery
```
Some windows OS requires an environment variables to properly work:

![env-variable](https://user-images.githubusercontent.com/24611413/77265136-55d02f80-6c72-11ea-97fc-70337cb12185.jpg)

Check artillery version (prompt on administrative mode is recommended):

![artillery-v](https://user-images.githubusercontent.com/24611413/77264481-cbd39700-6c70-11ea-8b99-f4892e4c2720.jpg)
---

## Installing

1. Download the code

## Run artillery Test

1. Go to 'test' folder
2. Run the following command:
```
    artillery run -o reports\kardex-add.json config\kardex-add.yaml
    or
    artillery run -o reports\kardex-update.json config\kardex-update.yaml
```
output command:

![command-run](https://user-images.githubusercontent.com/24611413/77265920-697c9580-6c74-11ea-975f-bff497ef0f25.jpg)

running tests:

![tests-running](https://user-images.githubusercontent.com/24611413/77265015-fd009700-6c71-11ea-961f-73c8923cd0b8.jpg)

3. Generate the ouput report with the following command:
```
    artillery report reports\kardex-add.json
    or
    artillery report reports\kardex-update.json
```
![report-output](https://user-images.githubusercontent.com/24611413/77265385-f32b6380-6c72-11ea-8871-6dcdb598796d.jpg)

4. You can edit payload values into the file helpers/kardex-payload.js

![edit-payload](https://user-images.githubusercontent.com/24611413/77266011-ad6f9a80-6c74-11ea-99bf-408284ad13a7.jpg)

## Author

* **Marcelo Claure** - *Initial work*
