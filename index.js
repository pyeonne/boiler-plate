const express = require('express');
const app = express();
const port = 5000;

// mongoDB 연결
const mongoose = require('mongoose');
mongoose
    .connect(
        'mongodb+srv://pyeonne:djfuqek114@boilerplate.6uycn.mongodb.net/boilerplate?retryWrites=true&w=majority',
        {
            // mongoose 6.0 이상에서는 기본값이므로 더이상 지원하지 않는다.
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true,
            // useFindAndModify: false,
        },
    )
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Hello World!~~안녕하세요 ~ ');
});

app.listen(port, () => {
    console.log(`Example app listening at port ${port}!`);
});
