# uclaradio-blog

### Setup Environment

- Compile the jsx files: `npm run compile`
- In one terminal
  - Run mongo: `mongo`
- In a second terminal
  - Run keystone server: `npm start`
  - You'll know you've succeeded when you see:
  ```
  KeystoneJS v4.0.0 started:
  uclaradio-blog is ready on http://0.0.0.0:3010
  ```

### Access Keystone

- Navigate to [localhost:3010/keystone]()
- Login with user credentials in `updates/0.0.1-admin.js`

### Use API

- `GET` all posts
  - [http://localhost:3010/api/posts]()
- `GET` post by ID
  - [http://localhost:3010/api/posts/:id]()

### Common Errors in Setup

- "Cannot find module './config.json'"
  - You don't have the `config.json` for authentication. Message the codeowners for it.
- "failed to connect to server [ds141924.mlab.com:41924] on first connect [MongoError: connection 0 to ds141924.mlab.com:41924 timed out]"
  - You're probably on lame wifi. Switch to a good one like `eduroam`.
- "Another mongod instance is already running on the /data/db directory, terminating"
  - You can only have (and need) 1 mongod instance running locally. Closing all your browsers won't close the instance.
  - Find the pid of the instance:
    `ps -ax | grep mongod`
  - Kill the pid of the mongod instance, which is listed in the first column
    `kill <pid>`

### Helpful Resources

- [KeystoneJS: Getting Started](https://keystonejs.com/getting-started/)
- [Building A Node CMS With KeystoneJS, Mongo DB, React and Redux — Part I](https://itnext.io/building-a-node-cms-with-keystonejs-mongo-db-react-and-redux-part-i-ae5958496df2)
- [Keystone API Example](https://gist.github.com/JedWatson/9741171)
