import "./../style/preview.css";
import H1 from "./H1";
import P from "./P";

function Preview({ results }) {
    let childs = results.child
    return (
        <div className="form_page preview_page" key = "02">
            <H1 context="Персональные данные"  num = "110" />
            {results.parent !== null && <P context={results.parent} num = "22" />}
            <H1 context="Дети" num = "120" />

            {childs.lengt !== 0 && childs.map((item, index )=> {
                console.log(index + 10)
                return <P context={item} num = {index + 10}/>
            })}

        </div>

    )

}

export default Preview;