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

//   function checkFontSize() {
//     console.log(123);
//   }
// $(document).ready(function() {
//   $(' #buton ').on("change", function() {
//     console.log(13)
//   })
//
function checkFontSize(){
  length = $('button').html().length - 2
  $("button").css("font-size",`calc((50vw * .42)/ ${length-3})`);
}
