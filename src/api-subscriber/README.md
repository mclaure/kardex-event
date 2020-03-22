## api-subscriber : Simple API solution that register requests into RabbitMQ queue  
```
API solution that handles HTTP request into a RabbitMQ queue
```
![full-architecture-subs](https://user-images.githubusercontent.com/24611413/77262474-477f1500-6c6c-11ea-9ebb-628d71372ae3.jpg)

---
## Installing

1. Download the code
2. Run the following command:
```
    npm install
```
6. Run the following commnad to start the node server (default port 8000):
```
    npm start
```
![npm-start-8000](https://user-images.githubusercontent.com/24611413/77261271-b9069580-6c63-11ea-9513-f6c4b072e471.jpg)
---
## Available APIs

* GET     /kardex/precio/producto?id={idProducto}

![get-request-subs](https://user-images.githubusercontent.com/24611413/77261516-5adab200-6c65-11ea-8e93-82d991c0251a.jpg)

* POST    /kardex/item/add

![post-request-ads](https://user-images.githubusercontent.com/24611413/77261521-65954700-6c65-11ea-82a4-a211efdf0948.jpg)

* PUT     /kardex/{timestamp}/update

![put-request-subs](https://user-images.githubusercontent.com/24611413/77261532-734acc80-6c65-11ea-8358-397b478051cd.jpg)

## Messages

* send messages

![send-messages](https://user-images.githubusercontent.com/24611413/77261583-e48a7f80-6c65-11ea-8143-41108a663221.jpg)

* receive messages on listener

![receive-messages](https://user-images.githubusercontent.com/24611413/77261598-fbc96d00-6c65-11ea-8ce5-8068f25e126f.jpg)

* api-kardex response

![api-kardex-response](https://user-images.githubusercontent.com/24611413/77261793-8bbbe680-6c67-11ea-94ee-d01e77a25449.jpg)
---
## Author

* **Marcelo Claure** - *Initial work*
