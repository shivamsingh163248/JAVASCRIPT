function main() {

    const userAuth = (
        //Implement your IIFE here 
        //It should return the registerUser function
        // creating the anominus function 
        function () {
            const arr = [];
            var username = "";
            var passward = "";

            // creating the function for the checking of the array 
            function checkCredensial(username, pass) {
                return arr.some(element => {
                    if (element.user === username && element.pas === pass) {
                        return true;
                    }
                    return false;
                });
            }


            return {
                registerUser: function (user, passwoed) {
                    username = user;
                    passward = passwoed;

                    if (checkCredensial(user,passwoed)) {
                        console.log("The user is already registered");
                    } else {
                        arr.push({ user: user, pas: passwoed });
                        console.log("The user have been added to the registeredUser array");
                    }
                }

            }
        }




    )();


    console.log(userAuth.registerUser("user1", "password123"));
    //Output: The user have been added to the registeredUser array
    console.log(userAuth.registerUser("user1", "password123"));
    //Output : The user is already registered
    return userAuth;
}
