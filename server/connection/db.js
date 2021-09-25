
import  mongoose  from 'mongoose';

const Connection = async() =>{
    try{
    const URL = `mongodb+srv://user:codeforinterview@mern-crud.e9ki0.mongodb.net/mern-crud?retryWrites=true&w=majority`
    await mongoose.connect(URL, { useNewUrlParser : true});
    console.log('database connected succesfully man');

    }catch(error){
        console.log(`Error while connecting to db`, error);
    }


}

export default Connection;