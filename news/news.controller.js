app.controller('NewsCtrl', function ($scope, newsProvider) {
    $scope.articles = newsProvider;
});
