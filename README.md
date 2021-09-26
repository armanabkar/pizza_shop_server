# Pizza Shop Server and Website

The REST API and website for the pizza ordering application. Built with Node.js, Express, and Vue. The server is currently using lowdb as a database solution and new data won't persist.

- 🌎 [Website](https://pizzashop-server.herokuapp.com/)
- 📱 [iOS Application](https://github.com/armanabkar/pizzashop)

## Configuration

### Server

Create a `.env` file in the root directory of the project:

```
NODE_ENV = development
JWT_SECRET = secret
PORT = 5000
```

And then you can run the development server with this command:

```
npm run dev:server
```

### Client

```
npm run dev:client
```