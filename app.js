const http = require('http');
const express = require('express');

// create server
const app = express();
const server = http.createServer(app);


app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`); // client1
});

/**
 * 처리하지 못한 예외 로그 기록
 */
process.on('uncaughtException', (err) => {
  console.log('UncaughtException', `[${err.name}] ${err.message}`);
  console.log('UncaughtException', err.stack);
});

/**
 * 서버 종료시 후처리
 *  - 소켓서버 종료
 *  - 실시간 서버 연결 종료
 *  - 데이터베이스 커넥션 종료
 */
process.on('SIGINT', () => {
    server.close(() => {
      console.info('APP', 'close.');
      process.exit(0);
  });
});

server.listen( 3000, () => {
  console.info('APP', `listening on port 3000, in local mode.`);
});

module.exports = server;
