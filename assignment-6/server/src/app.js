const express = require('express');
const { products } = require('./products');
const cors = require('cors');
const app = express();
app.use(cors());

express.json();
const port = 3000;

app.get('/product', (req, res) => {
    try {
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

app.get('/product/:id', (req, res) => {
    try {
        const productId = parseInt(req.params.id, 10);    
        const product = products.find(p => p.id === productId);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product Not Found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});
app.post('/product', (req, res) => {
    try {
        const newProduct = req.body;
        products.push(newProduct);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }       
});
app.put('/product/:id', (req, res) => {
    try {
        const productId = parseInt(req.params.id, 10);  
        const productIndex = products.findIndex(p => p.id === productId);
        if (productIndex !== -1) {
            products[productIndex] = { ...products[productIndex], ...req.body };
            res.json(products[productIndex]);
        } else {
            res.status(404).json({ message: 'Product Not Found' });
        }   
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});
app.delete('/product/:id', (req, res) => {
    try {
        const productId = parseInt(req.params.id, 10);
        const productIndex = products.findIndex(p => p.id === productId);
        if (productIndex !== -1) {
            const deletedProduct = products.splice(productIndex, 1);
            res.json(deletedProduct[0]);
        } else {
            res.status(404).json({ message: 'Product Not Found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

app.use('/login', (req, res) => {
    try {
        const { username, password } = req.body;
        if (username === 'admin' && password === 'password') {
            res.json({ message: 'Login Successful' });
        } else {
            res.status(401).json({ message: 'Invalid Credentials' });
        }

        
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
        
    }
}
);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});