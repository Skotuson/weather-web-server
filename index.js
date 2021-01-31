const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const fetch = require('node-fetch');
const cheerio = require('cheerio');
app.use(cors());

app.listen(port);

/*app.get("/humpolec", async (req, res) => {
    const response = await fetch("https://www.yr.no/en/forecast/daily-table/2-3074723/Czech%20Republic/Kraj%20Vyso%C4%8Dina/Pelh%C5%99imov%20District/Humpolec");
    const html = await response.text();
    const $ = cheerio.load(html);
    console.log($('.temperature').text())
})*/

app.get("/humpolec", async (req, res) => {
    const response = await fetch("https://www.in-pocasi.cz/predpoved-pocasi/cz/vysocina/humpolec-124/");
    const html = await response.text();
    const $ = cheerio.load(html);
    res.send({ temperature: $('.alfa').text().trim() })
    console.log($('.alfa').text().trim())
})

app.get("/pelhrimov", async (req, res) => {
    const response = await fetch("https://www.in-pocasi.cz/predpoved-pocasi/cz/vysocina/pelhrimov-303/");
    const html = await response.text();
    const $ = cheerio.load(html);
    res.send({ temperature: $('.alfa').text().trim() })
    console.log($('.alfa').text().trim())
})

app.get("/jihlava", async (req, res) => {
    const response = await fetch("https://www.in-pocasi.cz/predpoved-pocasi/cz/vysocina/jihlava-153/");
    const html = await response.text();
    const $ = cheerio.load(html);
    res.send({ temperature: $('.alfa').text().trim() })
    console.log($('.alfa').text().trim())
})
