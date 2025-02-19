// const axios = require("axios");
import axios from "axios";

/* assign interface/type to the function definition properly */
const getTodo = async (todoId: number) => {
  /* Your code here */
  try{
    const a = await axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const b = await axios.get(`https://jsonplaceholder.typicode.com/users/${a.data.userId}`);
    return {owner:b.data.name, title:a.data.title, completed:a.data.completed};
    } 
    catch(error){
      return "INVALID TODO ID";
    }
};

//test case
const input1 = 15;
const input2 = 60;
const input3 = 250;

//run
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

export default getTodo;
