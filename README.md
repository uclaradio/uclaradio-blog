# uclaradio-blog

Deployed at [https://uclaradio-blog.herokuapp.com/](https://uclaradio-blog.herokuapp.com/)

## Built With

- KeystoneJS: framework for developing database-driven websites, applications and APIs in Node.js.
- Node.js: JavaScript run-time environment. We'll be using it with KeystoneJS
- MongoDB: a document-oriented database program.
- KeystoneJS: framework for developing database-driven websites, applications and APIs in Node.js.

### Getting Started

1. Download [Node.js](https://nodejs.org/en/download/)
2. Download [MongoDB](https://www.mongodb.com/download-center)
3. Clone the repo
  - `git clone https://github.com/uclaradio/uclaradio-blog.git`
4. Install all the packages:
  - `npm install --save`
5. Add the configuration files to the repo
  - Message codeowners for access. 

### Setup Dev Environment

1. In one terminal
  - Run mongod: `mongod`
2. In a second terminal
  - Run keystone server: `npm start`
  - You'll know you've succeeded when you see:
  ```
  KeystoneJS v4.0.0 started:
  uclaradio-blog is ready on http://0.0.0.0:3010
  ```
3. The dev version is served at [localhost:3010](http://localhost:3010/).

### Deployment

We are currently deploying to Heroku with git.

- Setting up Heroku for the first time:

  1. Download the [Heroku CLI](https://devcenter.heroku.com/categories/command-line).
  2. Login to Heroku from your terminal.
    - `heroku login`
    - You'll be prompted to login with your heroku user credentials. Message the codeowners for access.
  3. Add Heroku's remote git repository. Now, local repository will have pushing access to both this github repo and to heroku's git repo.
    - `heroku git:remote -a uclaradio-blog`

- Deploying the app to Heroku:

  1. Ensure that you're on the master branch of this github.
    - `git checkout master`
  2. Push your app to Heroku
    - `git push heroku master`
  3. The production version is served at [uclaradio-blog.herokuapp.com/](https://uclaradio-blog.herokuapp.com/).

### Access Keystone

1. Navigate to the Admin UI [/keystone]()
2. Login with user credentials in `updates/0.0.1-admin.js`

### Use API

- `GET` all posts
  - [/api/posts]()
- `GET` post by ID
  - [/api/posts/:id]()

### Common Errors in Setup

- "Cannot find module './config.json'"
  - You don't have the `config.json` for authentication. Message the codeowners for it.
- "failed to connect to server [ds141924.mlab.com:41924] on first connect [MongoError: connection 0 to ds141924.mlab.com:41924 timed out]"
  - You're probably on lame wifi. Switch to a good one like `eduroam`.
- "Another mongod instance is already running on the /data/db directory, terminating"
  - You can only have (and need) 1 mongod instance running locally. Closing all your browsers won't close the instance.
  - Find the pid of the instance.
    `ps -ax | grep mongod`
  - Kill the pid of the mongod instance, which is listed in the first column.
    `kill <pid>`

### Helpful Resources

- [KeystoneJS: Getting Started](https://keystonejs.com/getting-started/)
- [Building A Node CMS With KeystoneJS, Mongo DB, React and Redux — Part I](https://itnext.io/building-a-node-cms-with-keystonejs-mongo-db-react-and-redux-part-i-ae5958496df2)
- [Keystone API Example](https://gist.github.com/JedWatson/9741171)
