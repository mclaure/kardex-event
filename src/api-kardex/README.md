## api-kardex : Simple API solution to handle products stock using event handling aproach  
```
API solution that handles SQL requests
```
![kardex-api](https://user-images.githubusercontent.com/24611413/77260002-7e98fa80-6c5b-11ea-9efb-591173cb121e.jpg)

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

**MySQL**
* GET     /kardex/precio/producto?id={idProducto}
* POST    /kardex/item/add
* PUT     /kardex/{timestamp}/update
---
## Author

* **Marcelo Claure** - *Initial work*
