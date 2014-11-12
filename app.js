angular.module('News', []).controller('MainCtrl', ['$scope',function($scope){
	$scope.posts = [
    {title: 'Obama', votes: 5},
    {title: 'Bush Jr', votes: 2},
    {title: 'Clinton', votes: 9},
    {title: 'Bush Sr', votes: 15},
    {title: 'Reagan', votes: 27}
  ];

  $scope.sortOrder = [
    {name:'Asc', key: '+votes'},
    {name:'Desc', key: '-votes'}
  ];
  $scope.defaultSort = '';

	$scope.addPost = function(){
  		if(!$scope.title || $scope.title === '') { return window.alert('Name required!'); }
  		$scope.posts.push({
    		title: $scope.title,
    		link: $scope.link,
    		votes: 0
  		});
  		$scope.title = '';
  		$scope.link = '';
	};

	$scope.incrementvotes = function(post) {
  		post.votes += 1;
	};

	$scope.incrementDownvotes = function(post) {
  		post.votes -= 1;
	};

}]);
