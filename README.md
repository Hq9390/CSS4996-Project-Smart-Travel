# SMART TRAVEL WEB APPLICATION  
The Smart Travel web application is meant to make the lives of people who want to travel easier. The overall goal of this project is to make picking a location to travel to easy for the user whether they are an experienced traveler or not. The users of this application will be able to view flights, hotels, and car rentals and continue to purchase them on an external website. Users who choose to create an account with the Smart Travel website will have the option to save the cities that they wish to visit as well as receive recommendations on which cities to travel to. 

## Pre-Requisites
    1. NodeJS Installation
    2. NPM Installation
    
### NodeJS Installation
Smart Travel application is written in JavaScript using VueJS framework. To be able to run the application locally you would need to install NodeJS first.
1. Visit https://nodejs.org/en/download/ 
2. Download NodeJS v16.16.0 or later versions installer
4. After the installer has finished downloading, launch it

### Verify Installation
Open your command prompt and enter
node -v  
If NodeJS was successfully installed, the system would display the version you your NodeJS

### NPM Installation
NPM is a package manager for NodeJS 
1. On your command prompt, run the command “npm install” to install it on your computer

### Verify Installation
Open your command prompt and enter
npm -v  
If NPM was successfully installed, the system would display the version you your NPM

### Firebase Setup
Since this project utilizes Firebase as it's storage system as well as it’s authentication system, Firebase API must be installed within the project. This allows for seamless communication between web application and the Firestore database. You will also need to create a serviceAccountjson.file. The instructions to do so are provided in the link Add the Firebase Admin SDK to your server. 

### Firebase API Installation Steps
1. Open the project in the current IDE (WebStorm IDE is recommended for JavaScript projects)
2. From within the IDE open the command terminal
3. enter CD (file folder), this allows you to install it where you would like
4. After you are in the folder you want enter NPM I or Install firebase
5. Check for it to ensure it's been installed using dpkg-query -I firebase
6. Ensure you are running the latest version of Firebase by entering $ firebase –v
7. Once firebase is installed, you will need to create an account with firebase
8. Finally you must use the key provided to the account to access the database

## Running Locally
To be able to run the project locally you would need to do the following:
1. Clone the repository by entering the following on your command prompt
Git clone https://github.com/Hq9390/CSS4996-Project-Smart-Travel.git
2. Open the project on your desired IDE (WebStorm IDE is recommended for JavaScript projects)
3. cd Smart-Travel
4. Run the command “npm install” on your IDE terminal (This is only done the first time you clone the project)

### Run the Application
1. Open your console and cd Smart-Travel on your IDE Terminal
2. run the command
npm run dev 
3. Visit the local host 

## Contributors

- [Fatima Hashmi ](https://github.com/eu6179)
- [Hilda Qardagh ](https://github.com/Hq9390)
- [Brian Hohentanner ](https://github.com/bhohentanner)
- [Yolanda Mason ](https://github.com/ymason48)

## User Agreement
All contributors to this project have the right to modify this project. This project is for academic purposes only and for this reason it cannot be sold or distributed without the expressed written permission of all contributors. 



