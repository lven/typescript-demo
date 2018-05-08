/**
 * Created by lven on 2018/5/8.
 */
console.info("start");
function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane User sange";

document.body.innerHTML = greeter(user);