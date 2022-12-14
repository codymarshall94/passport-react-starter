# Passport React Starter ![run](https://user-images.githubusercontent.com/43764448/192065217-3789790c-b8a5-4dca-a680-635cf0cd7dac.png)


## About the Project   ![information](https://user-images.githubusercontent.com/43764448/192064555-7b4b82b5-8618-49c5-900f-fca9c5bc3a8a.png) 

This is a starter project that provides an example of how to use React with Express and incorporate an authentication system that uses Passport with it Local Strategy

This project exists to make it easier to get started a creating production app in React. You are invited to use it as a reference or to copy it and use it as a base for your own projects. 


### Tech Stack  ![settings](https://user-images.githubusercontent.com/43764448/192064589-bb41a8b7-9220-48ba-b7ec-d95f90fde13d.png)

- React
- Passport Local Strategy
- Mongoose
- Express & Express Session

### Features  ![stars](https://user-images.githubusercontent.com/43764448/192064659-fb6a9c1c-e2d2-473c-ad84-e0089ff4c45c.png)

- clone and install ready code ready for use ASAP
- Custom fields
- Nodemon to watch and run server

### Configuring

When you configure the .ENV file you can configure your options for your database and sessions secret key.
There are fields in database.js and server.js that are commented out that require your own database and secret key.
In this project, Passport Local is configured to an email authentification. If you would like to use a username please convert email fields to username

## Getting started  ![toolbox](https://user-images.githubusercontent.com/43764448/192064727-6b5094a2-6650-4be4-9f1c-1e3e46ee030f.png)

### Prerequisites  ![danger](https://user-images.githubusercontent.com/43764448/192064860-706b96c6-b55d-487e-9ab7-081b448dac0a.png)

This project uses Yarn as package-manager

```npm install --global yarn```

### Installation  ![settings (1)](https://user-images.githubusercontent.com/43764448/192064827-5517c09b-b548-4596-99bc-4bbe6a3f6a9d.png) 

```yarn install pkfit```

```cd passport-react-starter```

### Run Locally  ![run (2)](https://user-images.githubusercontent.com/43764448/192065513-0fa22318-c75e-4d59-a760-0af1c4baf5a7.png)

Clone the project

```https://github.com/codymarshall94/pkfit.git```

Go to the project directory

```cd passport-react-starter```

Install dependencies

```yarn install```

Run project
This project uses nodemon as a dependency to watch and start the server

```yarn devStart```
