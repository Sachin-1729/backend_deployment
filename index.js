import express from 'express';
import  cors  from 'cors';
import {PORT} from './config.js';
import dotenv from 'dotenv';
dotenv.config();


const app = express();
app.use(cors());
app.use(express.json());


app.get('/', function(request, response) {
    response.json({
      "data": {
        "id": 101,
        "name": "Smartphone",
        "description": "Latest model smartphone with advanced features.",
        "price": 699.99,
        "currency": "USD",
        "available": true,
        "categories": ["Electronics", "Mobile"],
        "created_at": "2024-03-01T00:00:00Z",
        "updated_at": "2024-03-01T00:00:00Z"
      }
    });
  });

app.listen(PORT , function (){
    console.log(`server is running on port ${process.env.PORT}`)
})

