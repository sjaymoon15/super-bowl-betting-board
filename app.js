//From tutorial below address;
//https://scotch.io/tutorials/build-a-real-time-scheduling-app-using-angularjs-and-firebase
//google clientID: 323632638601-u6jpnbe1khbh46qidhmuke557p1sgslr.apps.googleusercontent.com
//google client secret: sNgl1BtQPBDyRtP8Kf7vCytH
// create our angular module and inject firebase
var app = angular.module('scheduleApp', ['firebase']);

app.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    var ref = new Firebase("https://betting.firebaseio.com");
    return $firebaseAuth(ref);
  }
]);

app.controller('mainController', function($scope, $firebaseObject, Auth) {

  $scope.createUser = function() {
    $scope.signUpMessage = null;
    $scope.signUpError = null;

    Auth.$createUser({
      email: $scope.email,
      password: $scope.password
    }).then(function(userData) {
      userData.email = $scope.email;
      $scope.signUpMessage = "User created with email: " + userData.email;
      $scope.userEmail = userData.email;
      userData.userName = userData.email.split('@')[0];
      $scope.userName =  userData.userName;

      // console.log(userData);

    }).catch(function(error) {
      $scope.signUpError = error;
    });
  };

  $scope.removeUser = function() {
    $scope.message = null;
    $scope.error = null;

    Auth.$removeUser({
      email: $scope.email,
      password: $scope.password
    }).then(function() {
      $scope.message = "User removed";
    }).catch(function(error) {
      $scope.error = error;
    });
  };
  
  $scope.login = function(){
    var loginRef = new Firebase("https://betting.firebaseio.com");
    $scope.loginMessage = null;
    $scope.loginError = null;

    loginRef.authWithPassword({
      email    : $scope.loginemail,
      password : $scope.loginpassword
    }, function(error, authData) {
      if (error) {
        $scope.loginError = "Login Failed!" + error;
        console.log("Login Failed!", error);
      } else {
        $scope.loginMessage = "Logged in with email: "+ authData.password.email;
        $scope.userName = authData.password.email.split('@')[0];
        console.log("Authenticated successfully with payload:" , authData);
      }
    },{
       remember: "sessionOnly"
    })
  };

  $scope.auth = Auth;

    // any time auth status updates, add the user data to scope
  $scope.auth.$onAuth(function(authData) {
    console.log('authData', authData);
    $scope.authData = authData;
  });

  var scoresRef = new Firebase("https://betting.firebaseio.com/scores");
  console.log(scoresRef);
  $scope.reset = function(){

     scoresRef.set({
      a: {
        name: '0',
        slots: {
          a: {
            time: '0-0',
            booked: false,
            user: null
          },
          b: {
            time: '1-0',
            booked: false,
            user: null
          },
          c: {
            time: '2-0',
            booked: false,
            user: null
          },
          d: {
            time: '3-0',
            booked: false,
            user: null
          },
          e: {
            time: '4-0',
            booked: false,
            user: null
          },
          f: {
            time: '5-0',
            booked: false,
            user: null
          },
          g: {
            time: '6-0',
            booked: false,
            user: null
          },
          h: {
            time: '7-0',
            booked: false,
            user: null
          },
          i: {
            time: '8-0',
            booked: false,
            user: null
          },
          j: {
            time: '9-0',
            booked: false,
            user: null
          }
        }
      },
      b: {
        name: '1',
        slots: {
          a: {
            time: '0-1',
            booked: false,
            user: null
          },
          b: {
            time: '1-1',
            booked: false,
            user: null
          },
          c: {
            time: '2-1',
            booked: false,
            user: null
          },
          d: {
            time: '3-1',
            booked: false,
            user: null
          },
          e: {
            time: '4-1',
            booked: false,
            user: null
          },
          f: {
            time: '5-1',
            booked: false,
            user: null
          },
          g: {
            time: '6-1',
            booked: false,
            user: null
          },
          h: {
            time: '7-1',
            booked: false,
            user: null
          },
          i: {
            time: '8-1',
            booked: false,
            user: null
          },
          j: {
            time: '9-1',
            booked: false,
            user: null
          }
        }
      },
      c: {
        name: '2',
        slots: {
          a: {
            time: '0-2',
            booked: false,
            user: null
          },
          b: {
            time: '1-2',
            booked: false,
            user: null
          },
          c: {
            time: '2-2',
            booked: false,
            user: null
          },
          d: {
            time: '3-2',
            booked: false,
            user: null
          },
          e: {
            time: '4-2',
            booked: false,
            user: null
          },
          f: {
            time: '5-2',
            booked: false,
            user: null
          },
          g: {
            time: '6-2',
            booked: false,
            user: null
          },
          h: {
            time: '7-2',
            booked: false,
            user: null
          },
          i: {
            time: '8-2',
            booked: false,
            user: null
          },
          j: {
            time: '9-2',
            booked: false,
            user: null
          }
        }
      },
      d: {
        name: '3',
        slots: {
          a: {
            time: '0-3',
            booked: false,
            user: null
          },
          b: {
            time: '1-3',
            booked: false,
            user: null
          },
          c: {
            time: '2-3',
            booked: false,
            user: null
          },
          d: {
            time: '3-3',
            booked: false,
            user: null
          },
          e: {
            time: '4-3',
            booked: false,
            user: null
          },
          f: {
            time: '5-3',
            booked: false,
            user: null
          },
          g: {
            time: '6-3',
            booked: false,
            user: null
          },
          h: {
            time: '7-3',
            booked: false,
            user: null
          },
          i: {
            time: '8-3',
            booked: false,
            user: null
          },
          j: {
            time: '9-3',
            booked: false,
            user: null
          }
        }
      },
      e: {
        name: '4',
        slots: {
          a: {
            time: '0-4',
            booked: false,
            user: null
          },
          b: {
            time: '1-4',
            booked: false,
            user: null
          },
          c: {
            time: '2-4',
            booked: false,
            user: null
          },
          d: {
            time: '3-4',
            booked: false,
            user: null
          },
          e: {
            time: '4-4',
            booked: false,
            user: null
          },
          f: {
            time: '5-4',
            booked: false,
            user: null
          },
          g: {
            time: '6-4',
            booked: false,
            user: null
          },
          h: {
            time: '7-4',
            booked: false,
            user: null
          },
          i: {
            time: '8-4',
            booked: false,
            user: null
          },
          j: {
            time: '9-4',
            booked: false,
            user: null
          }
        }
      },
      f: {
        name: '5',
        slots: {
          a: {
            time: '0-5',
            booked: false,
            user: null
          },
          b: {
            time: '1-5',
            booked: false,
            user: null
          },
          c: {
            time: '2-5',
            booked: false,
            user: null
          },
          d: {
            time: '3-5',
            booked: false,
            user: null
          },
          e: {
            time: '4-5',
            booked: false,
            user: null
          },
          f: {
            time: '5-5',
            booked: false,
            user: null
          },
          g: {
            time: '6-5',
            booked: false,
            user: null
          },
          h: {
            time: '7-5',
            booked: false,
            user: null
          },
          i: {
            time: '8-5',
            booked: false,
            user: null
          },
          j: {
            time: '9-5',
            booked: false,
            user: null
          }
        }
      },
      g: {
        name: '6',
        slots: {
          a: {
            time: '0-6',
            booked: false,
            user: null
          },
          b: {
            time: '1-6',
            booked: false,
            user: null
          },
          c: {
            time: '2-6',
            booked: false,
            user: null
          },
          d: {
            time: '3-6',
            booked: false,
            user: null
          },
          e: {
            time: '4-6',
            booked: false,
            user: null
          },
          f: {
            time: '5-6',
            booked: false,
            user: null
          },
          g: {
            time: '6-6',
            booked: false,
            user: null
          },
          h: {
            time: '7-6',
            booked: false,
            user: null
          },
          i: {
            time: '8-6',
            booked: false,
            user: null
          },
          j: {
            time: '9-6',
            booked: false,
            user: null
          }
        }
      },
      h: {
        name: '7',
        slots: {
          a: {
            time: '0-7',
            booked: false,
            user: null
          },
          b: {
            time: '1-7',
            booked: false,
            user: null
          },
          c: {
            time: '2-7',
            booked: false,
            user: null
          },
          d: {
            time: '3-7',
            booked: false,
            user: null
          },
          e: {
            time: '4-7',
            booked: false,
            user: null
          },
          f: {
            time: '5-7',
            booked: false,
            user: null
          },
          g: {
            time: '6-7',
            booked: false,
            user: null
          },
          h: {
            time: '7-7',
            booked: false,
            user: null
          },
          i: {
            time: '8-7',
            booked: false,
            user: null
          },
          j: {
            time: '9-7',
            booked: false,
            user: null
          }
        }
      },
      i: {
        name: '8',
        slots: {
          a: {
            time: '0-8',
            booked: false,
            user: null
          },
          b: {
            time: '1-8',
            booked: false,
            user: null
          },
          c: {
            time: '2-8',
            booked: false,
            user: null
          },
          d: {
            time: '3-8',
            booked: false,
            user: null
          },
          e: {
            time: '4-8',
            booked: false,
            user: null
          },
          f: {
            time: '5-8',
            booked: false,
            user: null
          },
          g: {
            time: '6-8',
            booked: false,
            user: null
          },
          h: {
            time: '7-8',
            booked: false,
            user: null
          },
          i: {
            time: '8-8',
            booked: false,
            user: null
          },
          j: {
            time: '9-8',
            booked: false,
            user: null
          }
        }
      },
      j: {
        name: '9',
        slots: {
          a: {
            time: '0-9',
            booked: false,
            user: null
          },
          b: {
            time: '1-9',
            booked: false,
            user: null
          },
          c: {
            time: '2-9',
            booked: false,
            user: null
          },
          d: {
            time: '3-9',
            booked: false,
            user: null
          },
          e: {
            time: '4-9',
            booked: false,
            user: null
          },
          f: {
            time: '5-9',
            booked: false,
            user: null
          },
          g: {
            time: '6-9',
            booked: false,
            user: null
          },
          h: {
            time: '7-9',
            booked: false,
            user: null
          },
          i: {
            time: '8-9',
            booked: false,
            user: null
          },
          j: {
            time: '9-9',
            booked: false,
            user: null
          }
        }
      }
    }, function(error){
      if(error){
        console.log("Error: ", error);
      } else {
        console.log("Scores set successfully!");
      }
    })
  }
  
  $scope.putUser = function(userName){
    console.log('this', this);
    console.log('userName', userName);
    this.slot.user = userName;   //set
    
  }
  

  var syncObject = $firebaseObject(scoresRef);
  console.log(syncObject); //$id: scores obj.

  syncObject.$bindTo($scope, 'scores');
  // console.log($scope);//$scope has scores obj. 

});
