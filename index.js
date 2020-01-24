var keystone = require("keystone");

if (keystone.get("env") == "production") {
  console.log("PRODUCTION");
  keystone.init({
    "cookie secret": "secure string goes here",
    name: "uclaradio-blog",
    "user model": "User",
    "auto update": true,
    auth: true,
    static: ["./server/public/js/", "./server/public/img/"],
    mongo: process.env.MONGODB_URI,
    "cloudinary config": process.env.CLOUDINARY_URL
  });
} else {
  console.log("DEV");
  var config = require("./config.json");
  keystone.init({
    "cookie secret": "secure string goes here",
    name: "uclaradio-blog",
    "user model": "User",
    "auto update": true,
    auth: true,
    static: ["./server/public/js/", "./server/public/img/"],
    mongo: `mongodb://${config.DB_USER}:${
      config.DB_PASSWORD
    }@ds141924.mlab.com:41924/uclaradio-blog`,
    "cloudinary config": `cloudinary://${config.CLOUD_API_KEY}:${
      config.CLOUD_API_SECRET
    }@${config.CLOUD_NAME}`
  });
}

keystone.import("./server/models");
keystone.set("port", process.env.PORT || 3010);
keystone.set("routes", require("./server/routes"));
keystone.set('cors allow origin', true);
keystone.set('cors allow methods', true);
keystone.set('cors allow headers', true);

keystone.start();
