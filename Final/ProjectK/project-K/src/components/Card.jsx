import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function ActionAreaCard() {

  const navigation=useNavigate();
  const handleindoor =()=>{
    navigation('/themes');
  }
  const handlecustom =()=>{
    navigation('/customize');
  }

  return (
    <>
    <div className='cd' style={{margin: 0,display:'flex',paddingTop:'20px',paddingBottom:'20px',justifyContent:'center'}}>
    <Card sx={{ maxWidth: '345px' }} style={{marginRight:'10px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.happywedding.app/blog/wp-content/uploads/2020/06/Indoor-Wedding-Reception-Games-and-Activities-3.jpg"
          alt="no image"
          onClick={handleindoor}
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" >
            Indoor Themes
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Explore our curated themes to find the perfect one for your Special day!<br></br>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }} style={{marginRight:'10px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://cdn0.weddingwire.com/vendor/933530/3_2/960/jpg/ttsx1393_51_1035339-161229125514312.jpeg"
          alt="no image"
          onClick={handlecustom}
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Customised
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Craft Your Unique Celebration with Customized Themes on Our Website!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
     
          
          </div>
    </>
  );
}