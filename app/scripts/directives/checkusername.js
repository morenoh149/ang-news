'use strict';

app.directive('checkUsername', function(User) {
  var usernameRegexp = /^[^.$\[\]#\/\s]+$/;

  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$parsers.unshift(function(viewValue) {
        if (usernameRegexp.test(viewValue)) {
          if (User.findByUsername(viewValue).$getIndex().length === 0) {
            ctrl.$setValidity('taken', true);
            ctrl.$setValidity('invalid', true);

            return viewValue;
          } else {
            ctrl.$setValidity('taken', false);
            ctrl.$setValidity('invalid', true);

            return undefined;
          }
        } else {
          ctrl.$setValidity('taken', true);
          ctrl.$setValidity('invalid', false);

          return undefined;
        }
      });
    }
  };
});
