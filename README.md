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

- `GET` all articles
  - [http://localhost:3010/api/articles]()
- `GET` article by ID
  - [http://localhost:3010/api/articles/:id]()
