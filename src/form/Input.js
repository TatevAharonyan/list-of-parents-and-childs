
const Input = ({ type, className, value, name, onChange,  index }) => {
    return (
        <>
        <input
            type={type}
            className={className}
            key = {index}
            value={value}
            name = {name}
            onChange = {onChange}

        />
        <span> {name} </span>
        </>
    )
}

export default Input;