## api-kardex : Simple API solution to handle products stock using event handling aproach  
```
API solution that handles SQL requests
```
![kardex-api-simple](https://user-images.githubusercontent.com/24611413/77263533-ff152680-6c6e-11ea-9f49-c2bf94bb11cc.jpg)

---
## Installing

1. Download the code
3. To install **MySQL** database:
*  Download the **kardex-dump.sql** dump file from database/kardex-dump.sql
*  Run the following command:
```
mysql -u <user> -p < kardex-dump.sql
```
5. Run the following command:
```
    npm install
```
6. Run the following commnad to start the node server (default port 9000):
```
    npm start
```
![npm-start](https://user-images.githubusercontent.com/24611413/77260158-a9d01980-6c5c-11ea-8ccd-f6a6901f07eb.jpg)
---
## Available APIs

* GET     /kardex/precio/producto?id={idProducto}

![get-request](https://user-images.githubusercontent.com/24611413/77260218-13502800-6c5d-11ea-8621-9d1628157517.jpg)

* POST    /kardex/item/add

![post-request](https://user-images.githubusercontent.com/24611413/77260271-4eeaf200-6c5d-11ea-9b69-4fd11f424b46.jpg)

* PUT     /kardex/{timestamp}/update

![put-request](https://user-images.githubusercontent.com/24611413/77260325-8d80ac80-6c5d-11ea-9b44-7572df843847.jpg)

Full api documentation is available at [api-docs](https://github.com/mclaure/kardex-event/tree/master/src/api-docs)

---
## Author

* **Marcelo Claure** - *Initial work*
