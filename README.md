# LIRI-Assignment

##### Application Function
This application will seek to mimic a few of the functions of a SIRI application. However, instead of stating, by way of voice, your requests, you will be required to type them in via the node cli. This functionality could be a stepping stone to a search application that takes user input and searches multiple databases to find music or movies.
#### **Overview**
- One function of the application is a concert search 
    - It takes in an artist name, sending that information to the bansintown api and returning the response object.
    - It then takes the response object and displays the information regarding where all the concerts they are playing are located and when.
- Another function of the application is a song search
    - The song search takes in a song name via the command line
    - It then runs it through our node spotify api
    - Lastly it will display the song name, artist, a url to a song preview, and the album name all recieved from the response from the api.
- The third function of the application is a movie search.
    - This is similar to the song search function however, you are searching for movies.
    - This function takes in the movie name via the command line
    - Then it runs the input through the omdb api
    - It the displays the title, release year, critic ratings, what the movie is rated, country, actors, plot and language
- Lastly there is a function that reads a text file and runs whatever is written into that text file in the form of a pair of the arguments run through each function.
- If for all the function LIRI doesn't know what it is, it will tell you

#### **How To Run The App**
1. Because the app is run through the command line, you must open your terminal(Mac) or gitbash/powershell(PC).
2. Clone the repository from GitHub
3. Open the app in your command line
4. To initiate the song search:
    1. In your command line, type: node liri.js spotify-this-song '<songname>'
5. To initiate the movie search:
    1. In your command line, type: node liri.js movie-this '<moviename>'
6. To initiate the concert search:
    1. In your command line, type: node liri.js concert-this '<artistname>'
7. To initiate the text search:
    1. In your command line, type: node liri.js do-what-it-says

#### **Screenshots for use cases**
- ##### **Navigation to application**
    - ![Navigation to application](../liri-node-app/images/navigationtofolder.png)

- ##### **Song Search** 
    - ![Song Search](../liri-node-app/images/song_search_screenshot.png)

- ##### **Movie Search**
    - ![Movie Search](../liri-node-app/images/moviesearchscreenshot.png)

- ##### **Concert Schedule**
    - ![Concert Schedule](../liri-node-app/images/concert_search_screenshot.png)

- ##### **Do What It Says**
    - ![Do What It Says](../liri-node-app/images/dowhatitsaysscreenshot.png)

#### **Technologies Used**
- Node.js
- Ajax
- CLI
- Spotify API
- OMDB API
- Axios
- Moment.js
- fs
- JavaScript
- HTML5
- CSS
- dotenv

#### **My Role**
My role was creating the application start to finish.

**Comments**
- Link to [Updated Portfolio](https://samsmeyer17.github.io/Responsive-Portfolio/portfolio.html)



