function sayHello(text: string) {
    console.log(text);
}

var someText = "some text!;"

sayHello("hello!");

var stringArray = ["hello", "hi", "hola"];

for (var text of stringArray) {
    sayHello(text);
}

someText = 100;