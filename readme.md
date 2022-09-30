# Shopping Cart

An imdb clone where the user is able to search, view , add and delete movies. The user can view details regarding the title of the movie, year of release, producer/director and some of the main actors. In the Home screen the user is able to only view and search the movies in the database, In the liting screen the user can search for any movie they wish to update, delete or just find and Finally the in the add section the user is able to Add new movies to the database

## Frameworks, packages, Technology, etc used
* React
* TailwindCss
* Redux 
* Axios
* React hook forms
* Semantic UI React
* Node
* Express
* MongoDb
* Mongoosee
* Dotenv
* Cors 

## Form Validation

Regarding form validation, all four fields (movie name, year of release, producer and actors) are required. All fields use regular expressions to allow certain charcters, range of alphabets and numbers. Producer field accepts multiple names 
i.e first name , middle name, last name but doesn't allow more than one person. release year accepts numbers and number of min and max characters is 4. Actors field accepts multiple or single name as input.

[Deployment Link](https://imdb-clone-a0j7.onrender.com/)
