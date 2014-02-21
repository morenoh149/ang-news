'use strict';

app.controller('NavCtrl', function ($scope, $location, Post) {
  $scope.post = { url: 'http://', title: ''};

//  $scope.submitPost = function () {
//    var urlPrefix = 'http://';
//    if ($scope.post.url.toString().slice(0,7) !== urlPrefix) {
//      window.alert('invalid url format!');
//    } else {
//      Post.create($scope.post).then(function (ref) {
//        $location.path('/posts/' + ref.name());
//        $scope.post = { url: 'http://', title: ''};
//      });
//    }
//  };
  $scope.submitPost = function () {
    Post.create($scope.post).then(function (ref) {
      $location.path('/posts/' + ref.naem());
      $scope.post = { url: 'http://', title: ''};
    });
  };
});
