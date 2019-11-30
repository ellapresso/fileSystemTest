const router = require('express').Router();
const fs = require('fs');

router.post('/result',(req,res) => {
const { point } = req.query;
const name = req.query.name + '#' + `${new Date().getTime()}`;
    
    fs.readFile('rank.json','utf8', (err, data)=>{
        data = JSON.parse(data);
        data.push({name,point})
        //데이터를 읽어온 후
        fs.writeFile('rank.json', JSON.stringify(data), 'utf8', function(err) {
            //파일을 저장한다.
            console.log('비동기적 파일 쓰기 완료');
        });
    });

    return res.send(200);
});


module.exports = router;