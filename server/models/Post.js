var keystone = require("keystone");
var Types = keystone.Field.Types;

// Create a new Keystone list called Post
var Post = new keystone.List("Post", {
  autokey: { path: "slug", from: "name", unique: true },
  defaultSort: "-createdAt"
});

// Adding the option to add an image to our Post from
var postImgStorage = new keystone.Storage({
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

// Finally we are gonna add the fields for our Post
Post.add({
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
  transcriber: {
    type: String,
    required: false
  },
  category: {
    type: Types.Select,
    options:
      "None, Show Review, Music Review, Interview, Sports, News, Entertainment, Comedy, UCLA Radio",
    default: "None"
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  publishedAt: Date,
  img1: {
    label: "Image1",
    type: Types.CloudinaryImage,
    autoCleanup: true
  },
  img2: {
    label: "Image2",
    type: Types.CloudinaryImage,
    autoCleanup: true
  },
  img3: {
    label: "Image3",
    type: Types.CloudinaryImage,
    autoCleanup: true
  },
  img4: {
    label: "Image4",
    type: Types.CloudinaryImage,
    autoCleanup: true
  },
  img5: {
    label: "Image5",
    type: Types.CloudinaryImage,
    autoCleanup: true
  },
  content: {
    type: Types.Html,
    wysiwyg: true,
    height: 500
  }
});

// Setting the default order of the columns on the admin tab
Post.defaultColumns = "name, state|20%, author, publishedAt|15%";
Post.register();
