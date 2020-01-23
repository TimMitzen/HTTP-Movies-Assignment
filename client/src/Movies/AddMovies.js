import React, {useState} from 'react';
import axios from 'axios';

const initialState ={
   id: Date.now(),
   title:'',
   director:'',
   metascore: null,
   stars:[]
}

const AddMovies = (props) => {
 const [moviesData, setMoviesData] = useState(initialState);

 const handleChanges = event => {
    setMoviesData ({...moviesData, [event.target.name]: event.target.value});

 };


 const handleSubmit = event =>{
    event.preventDefault();
    axios
    .post('http://local:5000/api/movies/',moviesData)
    .then(response =>{
       props.history.push('/');
    })
    .catch(error => console.log(error));
 }
 return(
   <form onSubmit={handleSubmit}>
   <input type='text' name='title' placeholder='Title' value={moviesData.title} onChange={handleChanges}/>
   <input type='text' name ='director' placeholder='Director' value={moviesData.director} onChange={handleChanges}/>
   <input type='text' name='metascore' placeholder='Metascore' value={moviesData.metascore} onChange={handleChanges}/>
   <input type='text' name='stars' placeholder='Stars' value={moviesData.stars} onChange={handleChanges}/>
   <button type='onSubmit'>Add Movie</button>
   </form>
 );
}
export default AddMovies;