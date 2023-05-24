## Get Started 
make a .env file inside the config folder
    and enter the following details:
        PORT
        DATABASE_URI
        CLOUD_NAME
        API_KEY
        API_SECRET
        ACCESS_TOKEN_SECRET
        REFRESH_TOKEN_SECRET

In the config folder inside the allowedOrigins.js, enter the url of the frontend website where you want to access it

npm install

npm start

**For now you can use Postman to check it out, frontend coming very soon in React JS!

## What It Does: 
Built a node and express js server which web scrapes data from a number of hackathon sites and displays them at one place in real-time, has JWT(Json Web Token) for auth and users can log in to upload their
own hackathons or the hackathons that are not tracked by our server! We are using Cloudinary and Multer for image uploads! There is also a team-building section where
students can chat with each other and form teams! And all the necessary details are encrypted and stored in a Mongo DB database using Mongoose to make schema!

## What I learned
I learned the Model View Controller architecture of writing code! Apart from that there were a lot of errors, in web scrapping, since devpost is a client-side rendered website, so Cherrio was unable to web scrape it! I was stuck in there for a while, figuring out what went wrong! Later when I found out what the issue was, I researched what could be used to handle client side rendered pages, and puppeteer came up! I learned puppeteer to handle it and finally made it work! I also learned about JWT, since it was my first time implementing it! Apart from that I learned about image uploads using Cloudinary and Multer! There were also some errors for using axios, since axios headers were later blocked by a number of sites, I was stuck in there for a while, but later figured it out and replaced it with fetch! I also learnt how to handle multi-form data, since users will be uploading an image and details of the hackathon to the same post request! That took some time to figure out and when it was done, I was greatly overjoyed! 
