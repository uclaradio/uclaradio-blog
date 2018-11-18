var keystone = require("keystone");
var Types = keystone.Field.Types;

var User = new keystone.List("User");

User.add({
  displayName: { type: String },
  password: { type: Types.Password },
  email: { type: Types.Email, unique: true }
});
User.schema.virtual("canAccessKeystone").get(function() {
  return true;
});
User.defaultColumns = "id, displayName, email";
User.register();
