
import Input from "./Input";

const ChildInfo = ({ id, nameValue, ageValue, deletedChild, changeChildeInput }) => {
    return (
        <div key={id} className="childInfo">
            <Input
                type="text"
                className="input"
                index="100"
                value={nameValue}
                name="Имя"
                onChange={changeChildeInput}
            />
            <Input
                type="number"
                className="input"
                index="200"
                value={ageValue}
                name="Возраст"
                onChange={changeChildeInput}
            />

            <div
                id={id}
                onClick={deletedChild}
            > Удалить </div>

        </div>


    )
}

export default ChildInfo;