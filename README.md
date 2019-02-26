# uclaradio-blog

### Setup Environment

- Compile the jsx files: `npm run compile`
- In one terminal
  - Run mongo: `mongo`
- In a second terminal
  - Run keystone server: `npm start`

### Access Keystone

- Navigate to [localhost:3010/keystone]()
- Login with user credentials in `updates/0.0.1-admin.js`

### Use API

- `GET` all posts
  - [http://localhost:3010/api/posts]()
- `GET` post by ID
  - [http://localhost:3010/api/posts/:id]()

### Helpful Resources

- [KeystoneJS: Getting Started](https://keystonejs.com/getting-started/)
- [Building A Node CMS With KeystoneJS, Mongo DB, React and Redux — Part I](https://itnext.io/building-a-node-cms-with-keystonejs-mongo-db-react-and-redux-part-i-ae5958496df2)
- [Keystone API Example](https://gist.github.com/JedWatson/9741171)
