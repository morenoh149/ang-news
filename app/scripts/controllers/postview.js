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

  $scope.upVotePost = function (upVoted) {
    if (upVoted) {
      Post.clearVote($routeParams.postId, true);
    } else {
      Post.upVote(routeParams.postId);
    }
  };

  $scope.downVotePost = function (downVoted) {
    if (downVoted) {
      Post.clearVote($routeParams.postId, false);
    } else {
      Post.downVote(routeParams.postId);
    }
  };

  $scope.upVoted = function () {
    return Post.upVoted($scope.post);
  };

  $scope.downVoted = function () {
    return Post.downVoted($scope.post);
  };

});
