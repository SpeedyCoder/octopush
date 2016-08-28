app.controller('MenuCtrl', function ($scope) {

    $scope.getClass = function (view) {
        if (window.location.hash === view) {
            return 'active';
        }
        else {
            return ';'
        }
    };

});
