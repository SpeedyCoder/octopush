app.controller('HomeCtrl', function ($scope, newsProvider) {
    $scope.article = newsProvider[0];
});
