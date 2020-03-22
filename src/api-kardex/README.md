## api-kardex : Simple API solution to handle products stock using event handling aproach  
```
API solution that handles SQL requests
```

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
---
## Available APIs

**MySQL**
* GET     /kardex/precio/producto?id={idProducto}
* POST    /kardex/item/add
* PUT     /kardex/{timestamp}/update
---
## Author

* **Marcelo Claure** - *Initial work*
