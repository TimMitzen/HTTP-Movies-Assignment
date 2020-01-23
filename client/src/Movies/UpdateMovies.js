import React , {useState, useEffect} from 'react';
import axios from 'axios';
const initialState ={
   id: Date.now(),
   title:'',
   director:'',
   metascore: null,
   stars:[]
};
const UpdateMovies = (props) =>{
  const [movie, setMovie] = useState(initialState)
   
  useEffect(()=>{
     axios
     .get(`http://localhost:5000/api/movies/${props.match.params.id}`)
     .then(response =>{
        setMovie(response.data)
        
      })
      .catch(error=> console.log('error', error.response))
   },[props.match.params.id])
                 const handleSubmit = event =>{
                     event.preventDefault()
                     axios
                     .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
                     .then (response =>{
                        props.history.push(`/movies/${movie.id}`)})
                     .catch(error=> console.log(error.response))
               
                  }

   const handleChange = event =>{
      event.preventDefault();
      setMovie({...movie,[event.target.name]: event.target.value})
   }
   
   return(
      <form onSubmit ={handleSubmit}>
         <input type='text' name='title' placeholder='Title' value={movie.title} onChange={handleChange}/>
         <input type='text' name='director' placeholder='Director' value={movie.director} onChange={handleChange}/>
         <input type='text' name='metascore' placeholder='Metascore' value={movie.metascore} onChange={handleChange}/>
         <input type='text' name='stars' placeholder='Stars' value={movie.stars} onChange={handleChange} />
         <button type='submit'>Update movies</button>
      </form>
   )
}
export default UpdateMovies;