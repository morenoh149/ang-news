'use strict';

app.controller('PostViewCtrl', function ($scope, $routeParams, Post) {

  $scope.post = Post.find($routeParams.postId);

  $scope.addComment = function () {
    Post.addComment($routeParams.postId, $scope.comment);
    $scope.comment = '';
  };

  $scope.removeComment = function (comment, commentId) {
    Post.deleteComment($scope.post, comment, commentId);
  };
});
