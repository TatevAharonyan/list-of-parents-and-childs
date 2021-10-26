
function Button ({ btnName, onClick, index })  {
    return (
         <button onClick = {onClick} className = "btn_header" key = {index} name = {btnName} > {btnName} </button> 
        )

}

export default Button;