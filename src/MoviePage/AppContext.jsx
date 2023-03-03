import { createContext, useContext,useEffect, useState } from "react";

 export const Movie_URL=`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`
const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([])
  const [isError, setIsError] = useState({ show: false, msg: '' })
  const[query,setQuery]=useState('titanic')
  const getMovies = async (url) => {
    setIsLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json()
          console.log(data);
          if (data.Response === 'True') {
            setIsLoading(false)
            setMovie(data.Search);
            setIsError({
              show: false,
              msg:'',
            })
            
          } else {
            setIsError({
              show: true,
              msg:data.Error,
            })
          };

        } catch (error) {
            console.log(error);
        }
    }
  useEffect(() => {
    let ClearTimeOuts=setTimeout(() => {
      getMovies(`${Movie_URL}&s=${query}`)
 
    }, 300)
    return()=> clearTimeout(ClearTimeOuts)
    }, [query])
    
  return <AppContext.Provider value={{isLoading,movie,isError,query,setQuery}}>{children}</AppContext.Provider>;
};



// Coustom hook

const useGlobalCustomHook = () => {
     return useContext(AppContext)
}
export{AppContext,AppProvider, useGlobalCustomHook}
