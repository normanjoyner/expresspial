expresspial
===========

##About

###Description
Express middleware for Espial

###Author
* Norman Joyner - <norman.joyner@gmail.com>

##Getting Started

###Installation
```npm install expresspial```

##Methods

###redirect_to_master
Redirects request to the master node using a 307 temporary redirect. Returns a 503 if no master node is found.

```javascript
var expresspial = require("expresspial");

app.use(expresspial.redirect_to_master);
```

###redirect_to_slave
Redirects request to a random slave node using a 307 temporary redirect. Returns a 503 if no slave nodes are found.
```javascript
var expresspial = require("expresspial");

app.use(expresspial.redirect_to_slave);
```
