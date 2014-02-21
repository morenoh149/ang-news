'use strict';

app.controller('AuthCtrl',
  function ($scope, $location, Auth) {
    if (Auth.signedIn()) {
      $location.path('/');
    }

    $scope.register = function() {
      Auth.register($scope.user).then(function (authUser) {
        console.log(authUser);
        $location.path('/');
      });
    };
  }
);
