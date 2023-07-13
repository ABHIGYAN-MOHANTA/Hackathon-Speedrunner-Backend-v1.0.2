# HackathonSpeedrunner - Backend
Check out the actual project in this youtube video: https://www.youtube.com/watch?v=Q0Yls0L_T8g&t=28s
## Getting Started

To get started with the HackathonSpeedrunner Backend, please follow these steps:

1. Clone the repository by running the following command in your terminal:
   ```
   git clone https://github.com/ABHIGYAN-MOHANTA/Hackathon-Speedrunner-Backend-v1.0.2.git
   ```

2. Install the project dependencies by running the following command in the project directory:
   ```
   npm install
   ```

3. Start the development server by running the following command:
   ```
   npm start
   ```

4. Create a `.env` file inside the `config` folder and enter the following details:
   ```
   PORT
   DATABASE_URI
   CLOUD_NAME
   API_KEY
   API_SECRET
   ACCESS_TOKEN_SECRET
   REFRESH_TOKEN_SECRET
   ```

5. In the `config` folder, inside the `allowedOrigins.js` file, enter the URL of the frontend website where you want to access the backend.

That's it! You should now have the HackathonSpeedrunner Backend up and running locally on your machine.

## What It Does

The HackathonSpeedrunner Backend is a Node.js and Express.js server that serves as the backend for the HackathonSpeedrunner project. It provides a one-stop solution for tracking hackathons and team building. The backend web scrapes data from various hackathon sites in real-time and displays them in a centralized location. It also implements JWT (Json Web Token) for authentication, allowing users to log in and upload their own hackathons or hackathons that are not tracked by the server. Image uploads are handled using Cloudinary and Multer. Additionally, there is a team-building section where students can chat with each other and form teams. All necessary details are encrypted and stored in a MongoDB database using Mongoose for schema management.

## What I Learned

During the development of the HackathonSpeedrunner Backend, I gained valuable knowledge and experience in the following areas:

- Model-View-Controller (MVC) architecture: I learned how to structure code using the MVC pattern, separating concerns and improving code maintainability.
- Web scraping challenges: I encountered difficulties when web scraping Devpost due to its client-side rendering. I researched and discovered Puppeteer, which enabled me to handle client-side rendered pages successfully.
- JWT implementation: It was my first time implementing JWT for authentication. I learned about the concepts and best practices for using JWT in secure and efficient ways.
- Image uploads using Cloudinary and Multer: I acquired knowledge on handling image uploads and integration with third-party services like Cloudinary and Multer.
- Troubleshooting and error handling: Throughout the development process, I faced challenges with libraries like Axios and learned how to troubleshoot issues and find alternative solutions, such as using the Fetch API as a replacement.
- Handling multi-form data: I learned how to handle and process multipart form data, as users would be uploading both images and hackathon details in the same request.

## Screenshots

Here are some screenshots showcasing the HackathonSpeedrunner Backend in action:

![Screenshot 1](https://github.com/ABHIGYAN-MOHANTA/Hackathon-Speedrunner-Backend-v1.0.2/assets/110360901/2d7aa60a-6796-4deb-b31f-6c66654a3c11)
![Screenshot 2](https://github.com/ABHIGYAN-MOHANTA/Hackathon-Speedrunner-Backend-v1.0.2/assets/110360901/1a780c9c-0b6d-45e7-8280-a226b27f394c)
![Screenshot 3](https://github.com/ABHIGYAN-MOHANTA/Hackathon-Speedrunner-Backend-v1.0.2/assets/110360901/36bcbe13-84b2-44e7-94fb-53442aa2969c)
![Screenshot 4](https://github.com/ABHIGYAN-MOHANTA/Hackathon-Speedrunner-Backend-v1.0.2/assets/110360901/897ae292-b16e-4f55-a70d-035ffd5cfb8c)
![Screenshot 5](https://github.com/ABHIGYAN-MOHANTA/Hackathon-Speedrunner-Backend-v1.0.2/assets/110360901/dc42d70f-526b-4709-b2da-c4ce81418082)
![Screenshot 6](https://github.com/ABHIGYAN-MOHANTA/Hackathon-Speedrunner-Backend-v1.0.2/assets/110360901/08b47ada-fd54-49e1-849a-885517c45f83)
![Screenshot 7](https://github.com/ABHIGYAN-MOHANTA/Hackathon-Speedrunner-Backend-v1.0.2/assets/110360901/6683c54f-b401-4932-9c20-c8984f86c76b)
![Screenshot 8](https://github.com/ABHIGYAN-MOHANTA/Hackathon-Speedrunner-Backend-v1.0.2/assets/110360901/cbacb329-6883-4c6a-b6b4-2d4dffd19ff6)
![Screenshot 9](https://github.com/ABHIGYAN-MOHANTA/Hackathon-Speedrunner-Backend-v1.0.2/assets/110360901/b7a27ea8-5aa3-426c-b8a0-3674440e874d)
![Screenshot 10](https://github.com/ABHIGYAN-MOHANTA/Hackathon-Speedrunner-Backend-v1.0.2/assets/110360901/29117dad-ecc8-478b-a742-dde7fb48978e)

Feel free to explore the project and contribute to its development!

## Contributing

We welcome contributions from the open-source community to improve the HackathonSpeedrunner Backend project. If you'd like to contribute, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch with a descriptive name for your feature or bug fix.
3. Make your changes and commit them with clear commit messages.
4. Push your changes to your forked repository.
5. Submit a pull request, explaining the changes you've made and why they should be merged.

Please ensure that you adhere to our code style guidelines and write appropriate tests for your changes.

For more details and updates, please check out the [YouTube video](https://www.youtube.com/watch?v=Q0Yls0L_T8g&t=28s).

If you encounter any issues or have any questions regarding the HackathonSpeedrunner Backend project, please feel free to [open an issue](https://github.com/ABHIGYAN-MOHANTA/Hackathon-Speedrunner-Backend-v1.0.2/issues) on GitHub. We'll

 be happy to assist you!

Happy hacking!
```
