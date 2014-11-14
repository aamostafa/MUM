var app = angular.module('app', ['ionic']);
app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
});


app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: "/home",
            abstract: true,
            templateUrl: "templates/home.html"
        })
        .state('home.main', {
                    url: "/main",
                    abstract: false,
                    views: {
                        "content": {
                            templateUrl: "templates/main.html"
                        }
                    }
                }) 
        .state('home.selectPrefrences', {
                   url: "/select-prefrences",
                   abstract: false,
                   views: {
                       "content": {
                           templateUrl: "templates/select-prefrences.html"
                       }
                   }
               })
        .state('home.priority', {
            url: "/priority",
            abstract: false,
            views: {
                "content": {
                    templateUrl: "templates/priority.html"
                }
            }
        })
        .state('home.waivers', {
                    url: "/waivers",
                    abstract: false,
                    templateUrl: "templates/waivers.html",
                    views: {
                        "content": {
                            templateUrl: "templates/waivers.html"
                        }
                    }
                })
        .state('home.unsatisfiedPrerequisites', {
                    url: "/unsatisfied-prerequisites",
                    abstract: false,
                    views: {
                        "content": {
                            templateUrl: "templates/unsatisfied-prerequisites.html"
                        }
                    }
                })
        .state('home.enrolled', {
                    url: "/enrolled",
                    abstract: false,
                    views: {
                        "content": {
                            templateUrl: "templates/enrolled.html"
                        }
                    }
                })        
        .state('login', {
                    url: "/login",
                    abstract: false,
                    templateUrl: "templates/login.html",
                })        
        


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');
});