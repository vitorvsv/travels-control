const express = require('express');
const path = require('path');

const app = express();

// Configs
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', 'views');

//Routes
const basicRoutes = require('./routes/basic.routes');
app.use(basicRoutes);

const authRoutes = require('./routes/auth.routes')
app.use(authRoutes);

app.listen(3000);