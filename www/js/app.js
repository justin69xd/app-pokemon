
var app = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

app.config(function($stateProvider, $urlRouterProvider){

  $stateProvider.state("Agua" , {
    url:"/Agua/:id" ,
    templateUrl:"templates/Agua.html"

    });



      $urlRouterProvider.otherwise("/List");
});




app.controller("ListCtrl", function($scope){
  $scope.notas = [
     { titulo:"Agua", descripcion:"Ver"},
     { titulo:"Video", descripcion:"Ver"},


   ];
});
app.controller("AguaCtrl", function($scope, $state){
  $scope.id = $state.params.id;
});
app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.Keyboard) {
      window.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if (window.StatusBar) {

      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {


  $stateProvider


    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
  .state("Pokedex",{
    url: '/Pokedex',
    templateUrl:'templates/Pokedex.html'
  })
  .state("adn",{
    url: '/adn',
    templateUrl:'templates/adn.html'
  })
  .state("agua",{
    url: '/agua',
    templateUrl:'templates/agua.html'
  })
  .state("video",{
    url: '/video',
    templateUrl:'templates/video.html'
  })
  .state("login",{
    url: '/login',
    templateUrl:'templates/login.html'
  })
  .state("registro",{
    url: '/registro',
    templateUrl:'templates/registro.html'
  })
  .state("nutricion",{
    url: '/nutricion',
    templateUrl:'templates/nutricion.html'
  })
  .state("tabla",{
    url: '/tabla',
    templateUrl:'templates/tabla.html'
  })
  .state("info",{
    url: '/info',
    templateUrl:'templates/info.html'
  })
  .state("memoria",{
    url: '/memoria',
    templateUrl:'templates/memoria.html'
    })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/adn.html');

});
