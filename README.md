## Get Started 
Make a .env file inside the config folder\
    and enter the following details:\
        PORT\
        DATABASE_URI\
        CLOUD_NAME\
        API_KEY\
        API_SECRET\
        ACCESS_TOKEN_SECRET\
        REFRESH_TOKEN_SECRET

In the config folder inside the allowedOrigins.js, enter the url of the frontend website where you want to access it

npm install

npm start

** Please check out how it works at: https://www.youtube.com/watch?v=Q0Yls0L_T8g&t=28s

## What It Does
Basically built a one stop solution for tracking all hackathons and team building!
It is a node and express js server which web scrapes data from a number of hackathon sites and displays them at one place in real-time, has JWT(Json Web Token) for auth and users can log in to upload their
own hackathons or the hackathons that are not tracked by our server! We are using Cloudinary and Multer for image uploads! There is also a team-building section where
students can chat with each other and form teams! And all the necessary details are encrypted and stored in a Mongo DB database using Mongoose to make schema!

## What I learned
I learned the Model View Controller architecture of writing code! Apart from that there were a lot of errors, in web scrapping, since devpost is a client-side rendered website, so Cherrio was unable to web scrape it! I was stuck in there for a while, figuring out what went wrong! Later when I found out what the issue was, I researched what could be used to handle client side rendered pages, and puppeteer came up! I learned puppeteer to handle it and finally made it work! I also learned about JWT, since it was my first time implementing it! Apart from that I learned about image uploads using Cloudinary and Multer! There were also some errors for using axios, since axios headers were later blocked by a number of sites, I was stuck in there for a while, but later figured it out and replaced it with fetch! I also learnt how to handle multi-form data, since users will be uploading an image and details of the hackathon to the same post request! That took some time to figure out and when it was done, I was greatly overjoyed! 

![Screenshot from 2023-07-13 05-45-56](https://github.com/ABHIGYAN-MOHANTA/Hackathon-Speedrunner-Backend-v1.0.2/assets/110360901/2d7aa60a-6796-4deb-b31f-6c66654a3c11)
![Screenshot from 2023-07-13 05-46-08](https://github.com/ABHIGYAN-MOHANTA/Hackathon-Speedrunner-Backend-v1.0.2/assets/110360901/1a780c9c-0b6d-45e7-8280-a226b27f394c)
![Screenshot from 2023-07-13 05-46-17](https://github.com/ABHIGYAN-MOHANTA/Hackathon-Speedrunner-Backend-v1.0.2/assets/110360901/36bcbe13-84b2-44e7-94fb-53442aa2969c)
![Screenshot from 2023-07-13 05-46-48](https://github.com/ABHIGYAN-MOHANTA/Hackathon-Speedrunner-Backend-v1.0.2/assets/110360901/897ae292-b16e-4f55-a70d-035ffd5cfb8c)
![Screenshot from 2023-07-13 05-46-58](https://github.com/ABHIGYAN-MOHANTA/Hackathon-Speedrunner-Backend-v1.0.2/assets/110360901/dc42d70f-526b-4709-b2da-c4ce81418082)
![Screenshot from 2023-07-13 05-47-17](https://github.com/ABHIGYAN-MOHANTA/Hackathon-Speedrunner-Backend-v1.0.2/assets/110360901/08b47ada-fd54-49e1-849a-885517c45f83)
![Screenshot from 2023-07-13 05-47-23](https://github.com/ABHIGYAN-MOHANTA/Hackathon-Speedrunner-Backend-v1.0.2/assets/110360901/6683c54f-b401-4932-9c20-c8984f86c76b)
![Screenshot from 2023-07-13 05-47-31](https://github.com/ABHIGYAN-MOHANTA/Hackathon-Speedrunner-Backend-v1.0.2/assets/110360901/cbacb329-6883-4c6a-b6b4-2d4dffd19ff6)
![Screenshot from 2023-07-13 05-48-33](https://github.com/ABHIGYAN-MOHANTA/Hackathon-Speedrunner-Backend-v1.0.2/assets/110360901/b7a27ea8-5aa3-426c-b8a0-3674440e874d)
![Screenshot from 2023-07-13 05-48-55](https://github.com/ABHIGYAN-MOHANTA/Hackathon-Speedrunner-Backend-v1.0.2/assets/110360901/29117dad-ecc8-478b-a742-dde7fb48978e)
![Screenshot from 2023-07-13 05-49-32](https://github.com/ABHIGYAN-MOHANTA/Hackathon-Speedrunner-Backend-v1.0.2/assets/110360901/be17b0ae-ad8c-48bf-b229-e333f30c0bfa)
