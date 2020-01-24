var keystone = require("keystone");
var Types = keystone.Field.Types;

// Create a new Keystone list called Post
var Post = new keystone.List("Post", {
  autokey: { path: "slug", from: "name", unique: true },
  defaultSort: "-createdAt"
});

// Adding the option to add an image to our Post from
var postImgStorage = new keystone.Storage({
  adapter: require('keystone-storage-adapter-s3'),
  s3: {
    key: require('../../passwords').s3.id, // required; defaults to process.env.S3_KEY
    secret: require('../../passwords').s3.secret, // required; defaults to process.env.S3_SECRET
    bucket: 'radiophotobucket' // required; defaults to process.env.S3_BUCKET

  },
  schema: {
    bucket: true, // optional; store the bucket the file was uploaded to in your db
    etag: true, // optional; store the etag for the resource
    path: true, // optional; store the path of the file in your db
    url: true, // optional; generate & store a public URL
  },
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
    type: Types.File,
    storage: postImgStorage,
    autoCleanup: true
  },
  img2: {
    label: "Image2",
    type: Types.File,
    storage: postImgStorage,
    autoCleanup: true
  },
  img3: {
    label: "Image3",
    type: Types.File,
    storage: postImgStorage,
    autoCleanup: true
  },
  img4: {
    label: "Image4",
    type: Types.File,
    storage: postImgStorage,
    autoCleanup: true
  },
  img5: {
    label: "Image5",
    type: Types.File,
    storage: postImgStorage,
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
