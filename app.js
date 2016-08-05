//From tutorial below address;
//https://scotch.io/tutorials/build-a-real-time-scheduling-app-using-angularjs-and-firebase
//google clientID: 323632638601-u6jpnbe1khbh46qidhmuke557p1sgslr.apps.googleusercontent.com
//google client secret: sNgl1BtQPBDyRtP8Kf7vCytH
// create our angular module and inject firebase
var app = angular.module('scheduleApp', ['firebase']);


// create our main controller and get access to firebase
app.controller('mainController', function($scope, $firebase) {
  
$scope.login = function(name){
  console.log(name);
  ref.authAnonymously(function(error, authData){

    if(error){
      console.log("Login Failed!", error);
    }else{
      console.log("Authenticated successfully with payload:", authData);
      authData.name = name;
      $scope.authData = authData;
    }
  },{
    remember: 'sessionOnly'
  })
  
}


  var ref = new Firebase("https://betting.firebaseio.com/scores");

  var fb = $firebase(ref);

  $scope.reset = function(){

     fb.$set({
      a: {
        name: '0',
        slots: {
          a: {
            time: '0-0',
            booked: false
          },
          b: {
            time: '1-0',
            booked: false
          },
          c: {
            time: '2-0',
            booked: false
          },
          d: {
            time: '3-0',
            booked: false
          },
          e: {
            time: '4-0',
            booked: false
          },
          f: {
            time: '5-0',
            booked: false
          },
          g: {
            time: '6-0',
            booked: false
          },
          h: {
            time: '7-0',
            booked: false
          },
          i: {
            time: '8-0',
            booked: false
          },
          j: {
            time: '9-0',
            booked: false
          }
        }
      },
      b: {
        name: '1',
        slots: {
          a: {
            time: '0-1',
            booked: false
          },
          b: {
            time: '1-1',
            booked: false
          },
          c: {
            time: '2-1',
            booked: false
          },
          d: {
            time: '3-1',
            booked: false
          },
          e: {
            time: '4-1',
            booked: false
          },
          f: {
            time: '5-1',
            booked: false
          },
          g: {
            time: '6-1',
            booked: false
          },
          h: {
            time: '7-1',
            booked: false
          },
          i: {
            time: '8-1',
            booked: false
          },
          j: {
            time: '9-1',
            booked: false
          }
        }
      },
      c: {
        name: '2',
        slots: {
          a: {
            time: '0-2',
            booked: false
          },
          b: {
            time: '1-2',
            booked: false
          },
          c: {
            time: '2-2',
            booked: false
          },
          d: {
            time: '3-2',
            booked: false
          },
          e: {
            time: '4-2',
            booked: false
          },
          f: {
            time: '5-2',
            booked: false
          },
          g: {
            time: '6-2',
            booked: false
          },
          h: {
            time: '7-2',
            booked: false
          },
          i: {
            time: '8-2',
            booked: false
          },
          j: {
            time: '9-2',
            booked: false
          }
        }
      },
      d: {
        name: '3',
        slots: {
          a: {
            time: '0-3',
            booked: false
          },
          b: {
            time: '1-3',
            booked: false
          },
          c: {
            time: '2-3',
            booked: false
          },
          d: {
            time: '3-3',
            booked: false
          },
          e: {
            time: '4-3',
            booked: false
          },
          f: {
            time: '5-3',
            booked: false
          },
          g: {
            time: '6-3',
            booked: false
          },
          h: {
            time: '7-3',
            booked: false
          },
          i: {
            time: '8-3',
            booked: false
          },
          j: {
            time: '9-3',
            booked: false
          }
        }
      },
      e: {
        name: '4',
        slots: {
          a: {
            time: '0-4',
            booked: false
          },
          b: {
            time: '1-4',
            booked: false
          },
          c: {
            time: '2-4',
            booked: false
          },
          d: {
            time: '3-4',
            booked: false
          },
          e: {
            time: '4-4',
            booked: false
          },
          f: {
            time: '5-4',
            booked: false
          },
          g: {
            time: '6-4',
            booked: false
          },
          h: {
            time: '7-4',
            booked: false
          },
          i: {
            time: '8-4',
            booked: false
          },
          j: {
            time: '9-4',
            booked: false
          }
        }
      },
      f: {
        name: '5',
        slots: {
          a: {
            time: '0-5',
            booked: false
          },
          b: {
            time: '1-5',
            booked: false
          },
          c: {
            time: '2-5',
            booked: false
          },
          d: {
            time: '3-5',
            booked: false
          },
          e: {
            time: '4-5',
            booked: false
          },
          f: {
            time: '5-5',
            booked: false
          },
          g: {
            time: '6-5',
            booked: false
          },
          h: {
            time: '7-5',
            booked: false
          },
          i: {
            time: '8-5',
            booked: false
          },
          j: {
            time: '9-5',
            booked: false
          }
        }
      },
      g: {
        name: '6',
        slots: {
          a: {
            time: '0-6',
            booked: false
          },
          b: {
            time: '1-6',
            booked: false
          },
          c: {
            time: '2-6',
            booked: false
          },
          d: {
            time: '3-6',
            booked: false
          },
          e: {
            time: '4-6',
            booked: false
          },
          f: {
            time: '5-6',
            booked: false
          },
          g: {
            time: '6-6',
            booked: false
          },
          h: {
            time: '7-6',
            booked: false
          },
          i: {
            time: '8-6',
            booked: false
          },
          j: {
            time: '9-6',
            booked: false
          }
        }
      },
      h: {
        name: '7',
        slots: {
          a: {
            time: '0-7',
            booked: false
          },
          b: {
            time: '1-7',
            booked: false
          },
          c: {
            time: '2-7',
            booked: false
          },
          d: {
            time: '3-7',
            booked: false
          },
          e: {
            time: '4-7',
            booked: false
          },
          f: {
            time: '5-7',
            booked: false
          },
          g: {
            time: '6-7',
            booked: false
          },
          h: {
            time: '7-7',
            booked: false
          },
          i: {
            time: '8-7',
            booked: false
          },
          j: {
            time: '9-7',
            booked: false
          }
        }
      },
      i: {
        name: '8',
        slots: {
          a: {
            time: '0-8',
            booked: false
          },
          b: {
            time: '1-8',
            booked: false
          },
          c: {
            time: '2-8',
            booked: false
          },
          d: {
            time: '3-8',
            booked: false
          },
          e: {
            time: '4-8',
            booked: false
          },
          f: {
            time: '5-8',
            booked: false
          },
          g: {
            time: '6-8',
            booked: false
          },
          h: {
            time: '7-8',
            booked: false
          },
          i: {
            time: '8-8',
            booked: false
          },
          j: {
            time: '9-8',
            booked: false
          }
        }
      },
      j: {
        name: '9',
        slots: {
          a: {
            time: '0-9',
            booked: false
          },
          b: {
            time: '1-9',
            booked: false
          },
          c: {
            time: '2-9',
            booked: false
          },
          d: {
            time: '3-9',
            booked: false
          },
          e: {
            time: '4-9',
            booked: false
          },
          f: {
            time: '5-9',
            booked: false
          },
          g: {
            time: '6-9',
            booked: false
          },
          h: {
            time: '7-9',
            booked: false
          },
          i: {
            time: '8-9',
            booked: false
          },
          j: {
            time: '9-9',
            booked: false
          }
        }
      }
    })
  }

  var syncObject = fb.$asObject();

  syncObject.$bindTo($scope, 'scores');


});