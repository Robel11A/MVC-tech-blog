const Poster = require("./poster");
const User = require("./user");
const Comment = require("./comment");

User.hasMany(Poster, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

User.hasMany(Comment, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

Comment.belongsTo(User, {
    foreignKey: "user_id"
});

Comment.belongsTo(Poster, {
    foreignKey: "poster_id",
    onDelete: "CASCADE"
});

Poster.hasMany(Comment, {
    foreignKey: "poster_id",
    onDelete: "CASCADE"
});

Poster.belongsTo(User, {
    foreignKey: "user_id"
});

module.exports = { User, Poster, Comment };
