const router = require('express').Router();
const fs = require('fs');

router.post('/result',(req,res) => {
const { point } = req.query;
const name = req.query.name + '#' + `${new Date().getTime()}`;
    
    fs.readFile('rank.json','utf8', (err, data)=>{
        data = JSON.parse(data);
        // 불러온 data와, 입력받은 point 를 sorting한 다음, 새 배열에 상위 10개만 저장후 writeFile에 넘긴다.
        //TODO: 불러온 데이터와 입력받은 데이터를 비교후, 상위 10개만 남긴다.
        data.push({name,point})

        fs.writeFile('rank.json', JSON.stringify(data), 'utf8', function(err) {
            console.log('비동기적 파일 쓰기 완료');
            return res.send(data);
        });
    });

});


module.exports = router;