var keystone = require("keystone");
var Types = keystone.Field.Types;

// Create a new Keystone list called Photo
var Photo = new keystone.List("Photo", {
  autokey: { path: "slug", from: "name", unique: true },
  defaultSort: "-createdAt"
});

// Adding the option to add an image
var imgStorage = new keystone.Storage({
  adapter: keystone.Storage.Adapters.FS,
  fs: {
    // required; path where the files should be stored
    path: keystone.expandPath("server/public/img"),
    generateFilename: function(file, index) {
      return file.originalname;
    },
    whenExists: "error",
    // path where files will be served
    publicPath: "/public/img"
  }
});

// Finally we are gonna add the fields for our Photo
Photo.add({
  name: {
    type: String,
    required: true
  },
  state: {
    type: Types.Select,
    options: "draft, published, archived",
    default: "draft"
  },
  author: {
    type: String
  },
  photographer: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  publishedAt: Date,
  img: {
    label: "Image",
    type: Types.CloudinaryImage,
    autoCleanup: true
  },
  caption: {
    type: String
  }
});

// Setting the default order of the columns on the admin tab
Photo.defaultColumns = "name, state|20%, author, publishedAt|15%";
Photo.register();
