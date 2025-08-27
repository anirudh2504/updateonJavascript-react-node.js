// export default function Card({title,img,description})
// {
//     return(
        
//         <div style={{backgroundColor:"pink"}}>
//             <h1>Title:{title}</h1>
//             <img src={img} alt="" />
//             <p>Description:{description}</p>
//         </div>
        
//     )
// }


//-----------------------------2nd method--------------------------------------------
export default function Card(props)
{
    return(
        <>
        
         <div style={{backgroundColor:"pink"}}>
            <h2>Title:{props.title}</h2>
            <img src={props.img} alt=""  style={{borderRadius:'45%'}}/>
            <p>Description:{props.description}</p>
        </div>
        </>
       
        
    )
}