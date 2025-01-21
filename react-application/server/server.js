const http = require('http');
const url = require('url');

const data = {
  "details" : [
        {
            "id": 1,
            "title": "Flower",
            "price":  "127.00",
            "currency": "$",
            "originalPrice": "$127.00.",
            "currentPrice": "$86.00.",
            "description": "Custom Floral Designs",
            "category": "",
            "image": "flower-product-1.jpg",
            "rating": {
                "rate": 3.9,
                "count": 120
            }
        },
        {
            "id": 2,
            "title": "Bouquet",
            "price": "79.00",
            "currency": "$",
            "originalPrice": "$79.00.",
            "currentPrice": "$56.00.",
            "description": "Periwinkle Flowers Bouquet",
            "category": "",
            "image": "flower-product-2.jpg",
            "rating": {
                "rate": 4.1,
                "count": 259
            }
        },
        {
            "id": 3,
            "title": "Bouquet",
            "price":  "239.00",
            "currency": "$",
            "originalPrice": "$239.00.",
            "currentPrice": "@199.00.",
            "description": "Periwinkle Flower",
            "category": "men's clothing",
            "image": "flower-product-3.jpg",
            "rating": {
                "rate": 4.7,
                "count": 500
            }
        },
        {
            "id": 4,
            "title": "Bouquet",
            "price":  "210.00",
            "currency": "$",
            "originalPrice": "$210.00",
            "currentPrice": "$199.00",
            "description": "Rose Flower Bouquet",
            "category": "men's clothing",
            "image": "flower-product-4.jpg",
            "rating": {
                "rate": 2.1,
                "count": 430
            }
        },
        {
            "id": 5,
            "title": "Flower",
            "price": "159.00",
            "currency": "$",
            "originalPrice": "$159.00.",
            "currentPrice": "$129.00.",
            "description": "Tulip Custom Flower",
            "category": "jewelery",
            "image": "flower-product-5.jpg",
            "rating": {
                "rate": 4.6,
                "count": 400
            }
        },
        {
            "id": 6,
            "title": "Bouquet",
            "price":  "129.00",
            "currency": "$",
            "originalPrice": "$129.00.",
            "currentPrice": "$100.00.",
            "description": "Tulip Flower",
            "category": "jewelery",
            "image": "flower-product-6.jpg",
            "rating": {
                "rate": 3.9,
                "count": 70
            }
        }
    ]
}
var options = {
    hostname: '0.0.0.0',
    port: 5000,
    path: 'http://localhost:3000/api',
    method: 'GET',                
  };


function request(req, res) {
    if (req.url == "/api" && req.method == 'GET') {
        res.writeHead(200, {'Content-Type' : 'application/json'})
        res.write(JSON.stringify(data));
        res.end();
    } else if(req.url.match(/\api\/([0-9]+)/) && req.method == 'GET') {
        const id = +(req.url.split('/')[2])
        const productDetails = data.details.find(p => p.id === id)
        res.writeHead(200, {'Content-Type' : 'application/json'})
        res.write(JSON.stringify(productDetails));
        res.end();
    }
    console.log("req", req.url)
    console.log("url/id", req.url.match(/\api\/([0-9]+)/))
    console.log("res", res)
}



http.request(options);

http.createServer(request).listen(5000);

