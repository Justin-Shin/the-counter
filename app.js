angular
    .module("counterApp", ["firebase"])
    .controller("CounterController", [
      "$firebaseArray",
      CounterControllerFunction
    ])

  function CounterControllerFunction($firebaseArray){
    let ref = firebase.database().ref().child("counter");
    this.counter = $firebaseArray(ref);
    this.addToCounter = function(){
      let x = this.counter[0]
      x.counter++
      this.counter.$save(x)
    }
  }
