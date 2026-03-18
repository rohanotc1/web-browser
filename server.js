const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.post("/fetch", async (req, res) => {
  let { url } = req.body;

  try {

    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = "https://" + url;
    }

    res.json({
      success: true,
      url: url
    });

  } catch (error) {
    res.json({
      success: false,
      message: "Invalid URL"
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
