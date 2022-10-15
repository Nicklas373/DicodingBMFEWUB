function BookshelfInit() {
    let welcomeMessage = prompt("Welcome to Hana Bookshelf Management !, Please enter yourname");
    let initUser;
    const testReplace = document.querySelector("#initUser")
    if (welcomeMessage.toString !== "") {
        initUser = welcomeMessage;
        testReplace.innerHTML= "Welcome " + initUser + " !";
    }
}

BookshelfInit();