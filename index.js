function receivesAFunction(callBack) {
    callBack();
}


function returnsANamedFunction() {
    return function namedFunction() {
        console.log("Returns my Named Function")
    }
}


function returnsAnAnonymousFunction(){
    return function(){
        
    }
}





// describe("returnsAnAnonymousFunction()", () => {
//     var fn;

//     before(() => {
//       fn = returnsAnAnonymousFunction();
//     });

//     it("returns a function", () => {
//       expect(fn).to.be.a("function");
//     });

//     it("returns an anonymous function", () => {
//       expect(fn.name).to.eql("");
//     });
//   });
// });
