//Create the required Classes with each inheriting Class as specified in the Problem Statement.
function main() {
    // Crete your class media with proper constructor properties and methods as mentioned.
    class Media{
        
        title ;
       artist ;
       duration;

           constructor(title, artist , duration){
           this.title =    title ;
          this.artist =    artist ;
         this.duration = duration;
              
    }
        
        // creating the method 
 getTitle = function(){
    return title ; 
     
 }
 getArtist = function(){
    return artist ;
     
 } 
getDuration = function(){
    return duration;
    
}
        
    }
  
    //Create a Class Song extending the Media with proper constructor ,properties and methods
        class Song extends Media{
             album;
             genre; 
            
            constructor(title,artist , duration  ,album , genre){
                super(title,artist , duration) ; 
                this.PopSong = PopSong ; 
                this.RockSong = RockSong ; 
                this.album = album ;
                this.genre = genre ;
                
            }
            
            getAlbum = function(){
                return album ;
                
            }
            getGenre = function(){
              return genre ;
     
            }
        }
  
    //Create a class Podcast inherting from the MEdia
    class Podcast extends Media {
        NewsPodcast  ; 
        ComedyPodcast  ; 
        host  ;
        topic;
        constructor(NewsPodcast  , ComedyPodcast  ){
            
        }
        
        getHost = function(){
            
        } 
       getTopic = function(){
     
       }
    }
  
    //Create class PopSong and PockSong using Song class
    
    class PopSong extends Song{
        danceability ;
        energy;
      
        // creating counstocter with all the supre class variable 
        constructor(title,artist , duration ,album , genre , danceability , energy){
            super(title,artist , duration , PopSong , RockSong ,album , genre) ; 
            this.danceability = danceability ; 
            this.energy = energy ;
        }
        
         getDanceability = function(){
            return danceability ;
             
         }
         getEnergy = function(){
            return energy ;
             
         }
        
        
    }
    class RockSong extends Song{
       distortion ;
       tempo;
        // creating the counstorcter with all the super class variable
        constructor(title,artist , duration ,album , genre , distortion , tempo){
            super(title,artist , duration  ,album , genre) ; 
            this.distortion = distortion ; 
            this.tempo = tempo ;
        }
        
        getDistortion = function(){
            return distortion ;
        }
     getTempo = function(){
        return tempo ;
         
     }
        
        
    }
  
    //Create NewsPodcast and ComedyPodcast using the Podcast class.
    class  NewsPodcast {
        source ;
       rating;
             constructor(  source , rating ){
            
        }
        // creating the getmethod 
         getSource = function(){
             
         }
 getDuration = function(){
     
 }
        
        
        
    }
    
    class ComedyPodcast {
        
    comedian ;
 rating ;
               constructor(    comedian , rating   ){
                   
                   
            
        }
        
     getComedian = function(){
         
     }
getRating = function(){
    
} 
        
        
        
    }
  
    //Your code will be evaluated on basis of these operation.
    const popSong = new PopSong(
      "Shape of You",
      "Ed Sheeran",
      235,
      "÷",
      "Pop",
      0.825,
      0.652
    );
    console.log(popSong.getTitle()); // should output 'Shape of You'
    console.log(popSong.getArtist()); // should output 'Ed Sheeran'
    console.log(popSong.getDuration()); // should output 235
  
    console.log(popSong.getAlbum()); // should output '÷'
    console.log(popSong.getGenre()); // should output 'Pop'
    console.log(popSong.getDanceability()); // should output 0.825
    console.log(popSong.getEnergy()); // should output 0.652
  
    const rockSong = new RockSong(
      "Stairway to Heaven",
      "Led Zeppelin",
      482,
      "Led Zeppelin IV",
      "Rock",
      0.056,
      63.5
    );
    console.log(rockSong.getTitle()); // should output 'Stairway to Heaven'
    console.log(rockSong.getArtist()); // should output 'Led Zeppelin'
    console.log(rockSong.getDuration()); // should output 482
    console.log(rockSong.getAlbum()); // should output 'Led Zeppelin IV'
    console.log(rockSong.getGenre()); // should output 'Rock'
    console.log(rockSong.getDistortion()); // should output 0.056
    console.log(rockSong.getTempo()); // should output 63.5
  
    const newsPodcast = new NewsPodcast(
      "The Daily",
      "The New York Times",
      30,
      "Michael Barbaro",
      "News",
      "The New York Times"
    );
    console.log(newsPodcast.getTitle()); // should
    // output 'The Daily'
    console.log(newsPodcast.getArtist()); // should output 'The New York Times'
    console.log(newsPodcast.getDuration()); // should output 30
    console.log(newsPodcast.getHost()); // should output 'Michael Barbaro'
    console.log(newsPodcast.getTopic()); // should output 'News'
    console.log(newsPodcast.getSource()); // should output 'The New York Times'
  
    const comedyPodcast = new ComedyPodcast(
      "My Favorite Murder",
      "Karen Kilgariff and Georgia Hardstark",
      60,
      "Karen Kilgariff and Georgia Hardstark",
      "Comedy",
      "Karen Kilgariff and Georgia Hardstark",
      4.8
    );
    console.log(comedyPodcast.getTitle()); // should output 'My Favorite Murder'
    console.log(comedyPodcast.getArtist()); // should output 'Karen Kilgariff and Georgia Hardstark'
    console.log(comedyPodcast.getDuration()); // should output 60
    console.log(comedyPodcast.getHost()); // should output 'Karen Kilgariff and Georgia Hardstark'
    console.log(comedyPodcast.getTopic()); // should output 'Comedy'
    console.log(comedyPodcast.getComedian()); // should output 'Karen Kilgariff and Georgia Hardstark'
  
    console.log(comedyPodcast.getRating()); // should output 4.8
    return {
      Media,
      Song,
      Podcast,
      PopSong,
      RockSong,
      NewsPodcast,
      ComedyPodcast
    };
  }
  