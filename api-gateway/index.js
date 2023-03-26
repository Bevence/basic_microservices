import gateway from "fast-gateway";

const server = gateway({
  routes: [
    {
      prefix: "/user",
      target: "http://localhost:8001/",
    },
    {
      prefix: "/product",
      target: "http://localhost:8002/",
    },
  ],
});

server.get("/ping", (req, res) => {
  res.send("Pong");
});

server.start(8003, () => {
  console.log("Gateway server start in port 8003");
});
