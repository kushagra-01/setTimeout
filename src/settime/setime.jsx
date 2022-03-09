import { useEffect, useState } from "react";

export const Meme =()=>{

const [Timer,setTimer] = useState(0)
let endtime = 10

useEffect(()=>{

    const id = setInterval(() => {
        console.log("a")
        setTimer((pre) =>{
            if(pre<endtime){
                console.log(pre)
                   return pre+1

            }
            else{
                //pre=0
               clearInterval(id)
            }
        })

        return ()=>{clearInterval(id)}


    }, 100);
    
},[])
console.log("b")
return (<h1>COUNTDOWN:{Timer}</h1>)


}