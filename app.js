var app = angular.module("travelApp", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "views/home.html"
    })
    .when("/packages", {
        templateUrl: "views/packages.html",
        controller: "PackageController"
    })
    .when("/booking", {
        templateUrl: "views/booking.html",
        controller: "BookingController"
    });
});

app.controller("PackageController", function($scope){

    var db = firebase.database().ref("tourPackages");

    db.on("value", function(snapshot){
        $scope.packages = snapshot.val();
        $scope.$apply();
    });

    $scope.addPackage = function(){
        db.push($scope.package);
        $scope.package = {};
    };

    $scope.deletePackage = function(id){
        db.child(id).remove();
    };

    $scope.editPackage = function(id, p){
        var newPrice = prompt("Enter new price", p.price);
        if(newPrice){
            db.child(id).update({ price:newPrice });
        }
    };
});

app.controller("BookingController", function($scope){

    var db = firebase.database().ref("bookings");

    db.on("value", function(snapshot){
        $scope.bookings = snapshot.val();
        $scope.$apply();
    });

    $scope.bookTour = function(){
        db.push($scope.booking);
        $scope.booking = {};
    };
});
