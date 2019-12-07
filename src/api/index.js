/* 서버 시작 명령어 node index */
const router = require("express").Router();
const fs = require("fs");

/* routing  game/result */
router.post("/result", (req, res) => {
  let { point } = req.query;
  const name = req.query.name + "#" + `${new Date().getTime()}`;

  fs.readFile("rank.json", "utf8", (err, data) => {
    data = JSON.parse(data);
    // 불러온 data와, 입력받은 point 를 sorting한 다음, 새 배열에 상위 10개만 저장후 writeFile에 넘긴다.
    //TODO: 불러온 데이터와 입력받은 데이터를 비교후, 상위 10개만 남긴다.
    data.push({ name, point });

    data = data.sort(function(a, b) {
      return parseInt(b["point"]) - parseInt(a["point"]);
    });
    /* 배열 메소드가 적용이.. 안 된다...는 무슨... 서버... 재실행 해...  */
    const result = data.slice(0, 10);
    fs.writeFile("rank.json", JSON.stringify(result), "utf8", function(err) {
      console.log("비동기적 파일 쓰기 완료");
      return res.send(result);
    });
  });
});

module.exports = router;
