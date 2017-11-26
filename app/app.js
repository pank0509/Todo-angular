
var app = angular.module('todo', []);
    app.controller("TODOController", TODOFunction);
    function TODOFunction() {
        console.log("this is inside the function")

        this.list1 = []
        this.count;
        this.handleClick = function(){

                console.log("button is clicked")


                this.list1.push(this.inputVal)
                this.count = this.list1.length

                console.log(this.count)
                console.log(this.list1)

        }
        this.clearButton = function(){
            console.log("this is clear button")
            this.count = this.count -1;
            this.list1.splice(this.count)
            console.log(this.count)
            console.log(this.list1)
        }
    }

