const express = require('express');
const cors = require('cors');

// 파일 시스템 모듈. 파일을 불러올 수 있도록 합니다.
const fs = require('fs');

// express 의 여러 기능을 담고있는 객체
const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// 클라이언트의 post 요청을 처리하는 함수
app.post('/login', (req, res) => {
    const { userName, password } = req.body;

    try {
        const data = JSON.parse(fs.readFileSync('db.json', 'utf-8'));
        const user = data.user.find((item) => {
            return item.userName === userName && item.password === password
        })

        if (user) {
            res.json({ success: true, message: '로그인 성공!', user: { userName: user.userName } });
        } else {
            res.status(401).json({ success: false, message: '로그인 실패! : 아이디나 비밀번호를 확인해주세요!' });
        }

    } catch (error) {
        console.error('데이터를 처리하는 도중 문제가 발생했습니다.: ', error);
        res.status(500).json({ success: false, message: '로그인 실패! : 서버 내부 오류가 발생했습니다!' });
    }
});

// 서버를 실행해서 특정 포트에서 클라이언트의 요청을 받을 수 있도록 합니다.
app.listen(3001, () => {
    console.log('서버가 3001번에서 대기중입니다.');
});