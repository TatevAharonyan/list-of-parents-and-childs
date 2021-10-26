import Button from "./Button";


function Header({ openPage }) {
    return (
        <header className="header">
            <div className="logo" key="01" >
                <img src="./img/Logo_imi_horizontal.png" alt="logo" width="100% " />
            </div>
            <div key="02">
                <Button btnName ="Форма" onClick={openPage} index = "0.01" />
                <Button btnName ="Превью" onClick={openPage} index = "0.02" />
            </div>
        </header>
    )

}

export default Header;