const express = require('express');
const app = express();
const port = 5000;
const { User } = require('./models/User');

// application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// application/json
app.use(express.json());

// mongo DB 연결
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
    res.send('Hello World!~~안녕하세요 ~ ㅇ.ㅇ');
});

// 회원가입을 위한 라우터
app.post('/register', (req, res) => {
    // 회원가입할 때 필요한 정보들을 client에서 가져오면
    // 그것들을 데이터 베이스에 넣어준다.
    const user = new User(req.body);

    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true,
        });
    });
});

app.listen(port, () => {
    console.log(`Example app listening at port ${port}!`);
});
