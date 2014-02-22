'use strict';

app.factory('Post',
  function($firebase, FIREBASE_URL, User) {
    var ref = new Firebase(FIREBASE_URL + 'posts');
    var posts = $firebase(ref);

    var Post = {
      all: posts,
      create: function (post) {
        if (User.signedIn()) {
          var user = User.getCurrent();

          post.owner = user.username;

          return posts.$add(post).then(function (ref) {
            var postId = ref.name();

            user.$child('posts').$child(postId).$set(postId);

            return postId;
          });
        }
      },
      find: function (postId) {
        return posts.$child(postId);
      },
      delete: function (postId) {
        if (User.signedIn()) {
          var post = Post.find(postId);

          post.$on('loaded', function () {
            var user = User.findByUsername(post.owner);

            posts.$remove(postId).then(function () {
              user.$child('posts').$remove(postId);
            });
          });
        }
      }
    };
    return Post;
  }
);
