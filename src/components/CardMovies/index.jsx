import {
    Button,
    Card,
    CardContent,
    CardMedia,
    Box,
    Typography,
    Grid,

  } from "@mui/material";


  const CardMovies = ({ movies }) => {
   
    return (
      <Box>
        <Grid container spacing={3} mt={3}>
          {movies.length > 0 &&
            movies.map(( movie ) => (
                
              <Grid item xs={12} sm={2.3}>
                <Card class="card">
                  <CardMedia
                  class="cardMedia"
                  component="img"
                  width={200}
                  height={300}
                  image={movie.images.posterArt.url}
                  />
                  <CardContent class="cardContent">
                  
                    <Typography color={"black"} >
                        <div id="title">
                            <div id="info">
                                <p id="headline">{movie.title}</p>
                                <p id="descripcion">{movie.description}</p>
                            </div>
                            {movie.title}   
                        </div>
                    </Typography>
                    
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    );
  };
  
  export default CardMovies;