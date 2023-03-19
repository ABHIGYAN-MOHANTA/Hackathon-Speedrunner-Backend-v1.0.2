const puppeteer = require('puppeteer');
const asyncHandler = require('express-async-handler')

// @desc Get all posts from devpost
// @route GET /devpost
// @access Private
const getAllPosts = asyncHandler(async (req, res) => {
    const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();

  await page.goto('https://devpost.com/hackathons?open_to[]=public&page=7&status[]=upcoming&status[]=open');
  await page.evaluate(async () => {
    const scrollInterval = setInterval(() => {
      window.scrollBy(0, 500);
    }, 1000);

  
    await new Promise(resolve => setTimeout(resolve, 10000));
  
    clearInterval(scrollInterval);
  });
   await page.waitForSelector('.main-content',{timeout:0});

  
  // Wait for the page to load
  // await page.waitForSelector('.upcoming');

  // Scrape the hackathon data
  const data = await page.evaluate(() => {
    const hackathons = [];
    const hackathonElements = document.querySelectorAll('.main-content');

    for (let i = 0; i < hackathonElements.length; i++) {
      const hackathonElement = hackathonElements[i];

      // Check if hackathonElement exists before accessing its properties
      if (hackathonElement) {
        const title = hackathonElement.querySelector('h3').innerHTML;
        const imagesrc = hackathonElement.querySelector('img').src;
        const prizehtml = hackathonElement.querySelector('.prize-amount').innerHTML;
        const span = document.createElement('span');
        span.innerHTML = prizehtml;
        const currencySymbol = prizehtml.charAt(0);
        const numberString = span.querySelector('span').textContent;
        const prize = currencySymbol + numberString.replace(/,/g, '');
        const date = hackathonElement.querySelector('.submission-period').innerHTML;
        const location = hackathonElement.querySelector('.info span').innerHTML;

        hackathons.push({
          title,
          imagesrc,
          prize,
          date,
          location,
        });
      }
    }

    return hackathons;
  });


  // Close the browser
  await browser.close();

  // Respond with the data as a JSON file
  res.json(data);
})

module.exports = {
    getAllPosts
}