
import "./../style/form.css";
import ChildInfo from "./ChildInfo";
import H2 from "./H2";
import Input from "./Input";


function Form({
    parentNume, changeParentinput, parentAge,
    child1Nume, child2Nume, child3Nume, child4Nume, child5Nume,
    Child1Age, Child2Age, Child3Age, Child4Age, Child5Age,
    addChild, addChild1, addChild2, addChild3, addChild4, addChild5,
    addNextChild, deletedChild, onSubmit,
    changeChilde1Input, changeChilde2Input, changeChilde3Input, changeChilde4Input,
    changeChilde5Input, error
}) {


    return (
        <div className="form_page" key="99">
            <H2 context=" Персональные данные" index="0001" />
            <form className="form" onSubmit={onSubmit} >
                <Input
                    type="text"
                    className="input"
                    index="100"
                    value={parentNume}
                    name="Имя"
                    onChange={changeParentinput}
                />
                <Input
                    type="number"
                    className="input"
                    index="200"
                    value={parentAge}
                    name="Возраст"
                    onChange={changeParentinput}
                />
                <div className="childs_text_btn">
                    <H2 context="Дети (макс. 5)" index="0002" />
                    {addChild && <div className="addChild" onClick={addNextChild} >
                        <h6>+</h6>
                        <p>Добавить ребенка</p>
                    </div>
                    }
                    {/* add 1 child */}
                    {addChild1 && <ChildInfo
                        id="01"
                        nameValue={child1Nume}
                        ageValue={Child1Age}
                        deletedChild={deletedChild}
                        changeChildeInput={changeChilde1Input}
                    />}
                    {/* add 2 child */}
                    {addChild2 && <ChildInfo
                        id="02"
                        nameValue={child2Nume}
                        ageValue={Child2Age}
                        deletedChild={deletedChild}
                        changeChildeInput={changeChilde2Input}
                    />}

                    {/* add 3 child */}
                    {addChild3 && <ChildInfo
                        id="03"
                        nameValue={child3Nume}
                        ageValue={Child3Age}
                        deletedChild={deletedChild}
                        changeChildeInput={changeChilde3Input}
                    />}

                    {/* add 4 child */}
                    {addChild4 && <ChildInfo
                        id="04"
                        nameValue={child4Nume}
                        ageValue={Child4Age}
                        deletedChild={deletedChild}
                        changeChildeInput={changeChilde4Input}
                    />}

                    {/* add 5 child */}
                    {addChild5 && <ChildInfo
                        id="05"
                        nameValue={child5Nume}
                        ageValue={Child5Age}
                        deletedChild={deletedChild}
                        changeChildeInput={changeChilde5Input}
                    />}
                </div>
                {error && <p>заполните все поля </p>}
                <button className="submit" type="submit" >Сохранить</button>
            </form>
        </div>
    )

}

export default Form;