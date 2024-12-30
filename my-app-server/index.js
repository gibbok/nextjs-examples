import express from "express";

const PORT = 3001;

const app = express();

export function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

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

app.get("/temperatures", function (_req, res) {
  console.log(`xxx income request temperatures ${new Date().toISOString()}`);

  setTimeout(() => {
    res.json([
      {
        id: 1,
        city: "Milan",
        temperature: 20,
      },
      {
        id: 2,
        city: "London",
        temperature: 16,
      },
      {
        id: 3,
        city: "Boston",
        temperature: 19,
      },
    ]);
  }, 3000);
});

app.get("/pollutions", function (_req, res) {
  console.log(`xxx income request pollutions ${new Date().toISOString()}`);

  setTimeout(() => {
    res.json([
      {
        id: 1,
        city: "Milan",
        polution: 20,
      },
      {
        id: 2,
        city: "London",
        polution: 10,
      },
      {
        id: 3,
        city: "Boston",
        polution: 100,
      },
    ]);
  }, 8000);
});

app
  .listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
  })
  .on("error", (error) => {
    // gracefully handle error
    throw new Error(error.message);
  });

app.all("/chunks", function (_req, res, next) {
  console.log(`xxx income request chunks ${new Date().toISOString()}`);

  res.writeHead(200, {
    "Content-Type": "text/plain",
    "Transfer-Encoding": "chunked",
  });

  var chunks = 10;

  if (chunks > 100) {
    chunks = 100;
  }

  var count = 1;
  let lastTick = Date.now();

  while (count <= chunks) {
    const timeNow = Date.now();
    const diff = timeNow - lastTick;

    if (diff >= 1000) {
      console.log("xx ", count);
      res.write(
        JSON.stringify({
          type: "stream",
          chunk: count++,
        }) + "\n"
      );
      lastTick = timeNow;
    }
  }

  res.end();
  next();
});
