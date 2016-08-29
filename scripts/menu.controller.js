app.controller('MenuCtrl', function ($scope) {

    $scope.getClass = function (view) {
        if (window.location.hash === view) {
            return 'active';
        }
        else {
            return ';'
        }
    };

    function clickInMenu () {
        $('.navbar-toggle').click();
    }

    function bindMenuToggle() {
        if (window.innerWidth <= 767) {
            $('.nav a').bind('click', clickInMenu);
        } else {
            $('.nav a').unbind('click', clickInMenu);
        }
    }

    $(window).resize(bindMenuToggle);
    bindMenuToggle();
    
});
