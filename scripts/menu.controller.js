app.controller('MenuCtrl', function ($scope) {

    $scope.getClass = function (view) {
        if (window.location.hash === view) {
            return 'active';
        }
        else {
            return ';'
        }
    };

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('.nav a').on('click', function(){
            $('.navbar-toggle').click()
        });
    }
});
