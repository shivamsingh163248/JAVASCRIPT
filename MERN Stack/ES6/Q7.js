//Do not alter the starter code.
function main(){
    //Create your class "User" here with all the properties and methods
    // creating the userclass 
        class User{
             name ;
             email;
             password;
             posts;
            // now creating the counstroctur 
             constructor(name , email ,password ){
             this.name  = name;
             this.email = email;
             this.password = password;
             this.posts = [];
        }
            
            // creatng the getter and setter method  in js of name and email   and password
            get Name(){
                return this.name;
            }
            set Name(name){
                this.name = name;
            }
            get Email(){
                return this.email;
            }
            set Email(email){
                this.email = email;
            }
            get Password(){
                return this.password;
            }
            set Password(password){
                this.password = password;
            }

//             The User class should have the following methods

// - addPost: It takes a post object and appends it to the posts array.
// - deletePost: It takes a post object and removes it from the posts array.
// - displayPosts: It should console the title of all posts present in the posts array.


            addPost(post){
                this.posts.push(post);
            }
            deletePost(post){
                this.posts = this.posts.filter(p => p !== post);
            }
            displayPosts(){
                console.log(`Posts by ${this.name}:`);
                this.posts.forEach(p => console.log(`- ${p.title}`));
            }



                        

        }

//         1- The Post class should inherit from the User class.

// 2- It should have the following private properties

// - title(String)</br>
// - content (string)</br>
// - date (String)</br>
// - likeCount (number)
// 3- The constructor method should accept the owner's name, email, password, title, content, and date as parameters and initialize the properties accordingly. It should initialize the likeCount with 0.

// 4- Implement getters and setters for title, content, and date properties.

// 5- The Post class should have the following method

// - addLike : It should increment the likeCount of the post.

// -displayDetails: It should print the post'd details inheriting from the User class in key-value pair which includes the owner's name, title, content, date, and likeCount.

// now we are the learning the details of the post class
        class Post extends User{
            title;
            content;
            date;
            likeCount;
            constructor(name, email, password, title, content, date){
                super(name, email, password);
                this.title = title;
                this.content = content;
                this.date = date;
                this.likeCount = 0;
            }
            get Title(){
                return this.title;
            }
            set Title(title){
                this.title = title;
            }
            get Content(){
                return this.content;
            }
            set Content(content){
                this.content = content;
            }
            get Date(){
                return this.date;
            }
            set Date(date){
                this.date = date;
            }
            addLike(){
                this.likeCount++;
            }
            displayDetails(){
                console.log(`Owner: ${this.name}`);
                console.log(`Title: ${this.title}`);
                console.log(`Content: ${this.content}`);
                console.log(`Date: ${this.date}`);
                console.log(`Likes: ${this.likeCount}`);
            }
        }

        
    
    //Create your class "Post" here inheritting the User class with all the properties and methods as mentioned
      const user1 = new User("John", "john@example.com", "password123");
      const post1 = new Post(
        "John", 
        "john@example.com",
        "password123",
        "My first post",
        "Lorem ipsum dolor sit amet",
        "2021-01-01"
      );
      const post2 = new Post(
        "John", 
        "john@example.com",
        "password123",
        "My second post",
        "Consectetur adipiscing elit",
        "2021-01-02"
      );
      
      user1.addPost(post1);
      user1.addPost(post2);
      
      post1.addLike();
      post1.addLike();
      
      user1.displayPosts();
      // Output:
      // Posts by John:
      // - My first post
      // - My second post
      
      post1.displayDetails();
      // Output:
      // Owner: John
      // Title: My first post
      // Content: Loremipsum dolor sit amet
      // Date: 2021-01-01
      // Likes: 2
      return {User,Post};
    }
    main();