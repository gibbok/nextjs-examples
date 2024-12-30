const express = require("express");

const PORT = 3001;

const app = express();

app.get("/", (request, response) => {
  response.status(200).send("Hello World");
});

app.get("/todos", function (_req, res) {
  console.log(`xxx income request todos ${new Date().toISOString()}`);
  res.json([
    {
      userId: 1,
      id: 1,
      title: "molestiae perspiciatis ipsa",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "illo est ratione doloremque quia maiores aut",
      completed: true,
    },
    {
      userId: 1,
      id: 3,
      title: "vero rerum temporibus dolor",
      completed: true,
    },
    {
      userId: 1,
      id: 4,
      title: "ipsa repellendus fugit nisi",
      completed: true,
    },
  ]);
});

app
  .listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
  })
  .on("error", (error) => {
    // gracefully handle error
    throw new Error(error.message);
  });
