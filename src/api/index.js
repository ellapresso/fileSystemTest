const router = require('express').Router();
const fs = require('fs');

router.post('/result',(req,res) => {
    fs.writeFile('text.txt', 'data2', 'utf8', function(err) {
        console.log('비동기적 파일 쓰기 완료');
    });

    return res.send(200);
});

module.exports = router;
