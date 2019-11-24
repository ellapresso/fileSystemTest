const router = require('express').Router();
const fs = require('fs');

router.post('/result',(req,res) => {

    fs.readFile('text.txt', (err,data)=>{
        console.log('data : ' + data)
        //데이터를 읽어온 후
        fs.writeFile('text.txt', 'data', 'utf8', function(err) {
            //파일을 저장한다.
            console.log('비동기적 파일 쓰기 완료');
        });
    });



    return res.send(200);
});

module.exports = router;
