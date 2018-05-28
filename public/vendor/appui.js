var app = angular.module("AnonymousBlog", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "components/posts/list.htm",
      controller: "homeController"
    })
    .when("/:postid/:postslug", {
      templateUrl : "components/posts/single.htm",
      controller: "postController"
    });
});

app.controller('postForm', function($scope, $http, $route) {
    $scope.submitPost = function() {
      let posttitle = $scope.posttitle;
      let postcontent = document.getElementById("document");

      $http({
        method: "POST",
        url: "/api/v1/submit",
        data: {'posttitle': posttitle, 'postcontent': postcontent.innerHTML} 
      }).then(function mySuccess(response) {
        $scope.posttitle = "";
        postcontent.innerHTML = "";
        alert('Successfully posted on the blog :)');
        //console.log(response.data);
        $route.reload();
      }, function myError(response) {
        console.log(response.data);
      });
    };
});

app.controller('homeController', function($scope, $http) {
  $http({
    method: "GET",
    url: "/api/v1/posts"
  }).then(function mySuccess(response) {
    $scope.posts = response.data.posts;
  }, function(response) {
    console.log(response.data);
  });
});

app.controller('postController', function($scope, $http, $route, $routeParams) {
  let post_id = $routeParams.postid.split('-')[1];
  $http({
    method: "GET",
    url: "/api/v1/post/"+post_id
  }).then(function mySuccess(response) {
    $scope.posts = response.data.posts;
    $scope.comments = response.data.comments;
  }, function(response) {
    console.log(response.data);
  });

  /*Post comment*/
  $scope.submitComment = function() {
    let cmntcontent = $scope.cmntcontent;

    $http({
      method: "POST",
      url: "/api/v1/submit-comment",
      data: {'postid': post_id, 'cmntcontent': cmntcontent} 
    }).then(function mySuccess(response) {
      $scope.cmntcontent = "";
      alert('Successfully posted a comment on this post :)');
      //console.log(response.data);
      $route.reload();
    }, function myError(response) {
      console.log(response.data);
    });
  };
});