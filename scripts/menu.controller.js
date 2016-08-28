app.controller('MenuCtrl', function ($scope) {

    $scope.getClass = function (view) {
        if (window.location.hash === view) {
            return 'active';
        }
        else {
            return ';'
        }
    };

    $('.nav a').on('click', function(){
        $('.navbar-toggle').click() //bootstrap 3.x by Richard
    });

});
