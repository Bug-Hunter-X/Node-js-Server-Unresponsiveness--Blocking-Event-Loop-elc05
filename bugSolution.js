const http = require('http');

const server = http.createServer(async (req, res) => {
  // Simulate a long-running task asynchronously
  const count = await longRunningTask();
  
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Hello World! Count: ${count}`);
});

async function longRunningTask() {
  let count = 0;
  for (let i = 0; i < 1000000000; i++) {
    count += i;
  }
  return count;
}

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});