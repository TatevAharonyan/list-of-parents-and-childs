import './style/App.css';
import Header from './header/Header';
import { useState } from "react";
import Form from './form/Form';
import Preview from './preview/Preview';
import Footer from './footer/Footer';

function App() {
  // header
  const [openForm, setOpenForm] = useState(true);
  const [openPreview, setOpenPreview] = useState(false);

  // form
  const [parentNume, setParentNume] = useState("");
  const [parentAge, setParentAge] = useState("");
  const [child1Nume, setChild1Nume] = useState("");
  const [Child1Age, setChild1Age] = useState("");
  const [child2Nume, setChild2Nume] = useState("");
  const [Child2Age, setChild2Age] = useState("");
  const [child3Nume, setChild3Nume] = useState("");
  const [Child3Age, setChild3Age] = useState("");
  const [child4Nume, setChild4Nume] = useState("");
  const [Child4Age, setChild4Age] = useState("");
  const [child5Nume, setChild5Nume] = useState("");
  const [Child5Age, setChild5Age] = useState("");

  const [addChild, setAddChild] = useState(true);
  const [addChild1, setAddChild1] = useState(false);
  const [addChild2, setAddChild2] = useState(false);
  const [addChild3, setAddChild3] = useState(false);
  const [addChild4, setAddChild4] = useState(false);
  const [addChild5, setAddChild5] = useState(false);
  const [error, setError] = useState(false);
  let result = {
    parent: null,
    child: [],
  };
  const [results, setResults] = useState(result);

  // open page form or preview
  const openPage = (e) => {
    if (e.target.name === "Форма") {
      setOpenForm(true);
      setOpenPreview(false);
    } else {
      setOpenForm(false);
      setOpenPreview(true);
    }
  }

  // Change Parent Nume or Age
  const changeParentinput = e => {
    if (e.target.name === "Имя") {
      setParentNume(e.target.value);
    } else {
      setParentAge(e.target.value);
    }
  }
  // Change childe1 Nume or Age
  const changeChilde1Input = e => {
    if (e.target.name === "Имя") {
      setChild1Nume(e.target.value);
    } else {
      setChild1Age(e.target.value);
    }
  }
  // Change childe2 Nume or Age
  const changeChilde2Input = e => {
    if (e.target.name === "Имя") {
      setChild2Nume(e.target.value);
    } else {
      setChild2Age(e.target.value);
    }
  }
  // Change childe3 Nume or Age
  const changeChilde3Input = e => {
    if (e.target.name === "Имя") {
      setChild3Nume(e.target.value);
    } else {
      setChild3Age(e.target.value);
    }
  }

  // Change childe4 Nume or Age
  const changeChilde4Input = e => {
    if (e.target.name === "Имя") {
      setChild4Nume(e.target.value);
    } else {
      setChild4Age(e.target.value);
    }
  }

  // Change childe5 Nume or Age
  const changeChilde5Input = e => {
    if (e.target.name === "Имя") {
      setChild5Nume(e.target.value);
    } else {
      setChild5Age(e.target.value);
    }
  }

  // form submit
  const onSubmit = e => {
    e.preventDefault();
    result["parent"] = null;
    result["child"] = [];
  
    if (parentNume.length !== 0 && parentAge.length !== 0) {
      result["parent"] = parentNume + ", " + parentAge;
      setResults(result);
      setError(false);
    } else {
      setError(true);
    }

    if (child1Nume.length !== 0 && Child1Age.length !== 0) {
      result["child"].push(child1Nume + ", " + Child1Age);
      setResults(result);
      setError(false);
    } else if (child1Nume.length !== 0 || Child1Age.length !== 0) {
      setError(true);
    }
    if (child2Nume.length !== 0 && Child2Age.length !== 0) {
      result["child"].push(child2Nume + ", " + Child2Age);
      setResults(result);
      setError(false);
    } else if (child2Nume.length !== 0 || Child2Age.length !== 0) {
      setError(true);
    }

    if (child3Nume.length !== 0 && Child3Age.length !== 0) {
      result["child"].push(child3Nume + ", " + Child3Age);
      setResults(result);
      setError(false);
    } else if (child3Nume.length !== 0 || Child3Age.length !== 0) {
      setError(true);
    }

    if (child4Nume.length !== 0 && Child4Age.length !== 0) {
      result["child"].push(child4Nume + ", " + Child4Age);
      setResults(result);
      setError(false);
    } else if (child4Nume.length !== 0 || Child4Age.length !== 0) {
      setError(true);
    }

    if (child5Nume.length !== 0 && Child5Age.length !== 0) {
      result["child"].push(child5Nume + ", " + Child5Age);
      setResults(result);
      setError(false);
    } else if (child5Nume.length !== 0 || Child5Age.length !== 0) {
      setError(true);
    }

  }

  // add or delete childe info 

  const addNextChild = () => {
    if (addChild1 === false) {
      setAddChild1(true);
    } else if (addChild2 === false ) {
      setAddChild2(true);
    } else if ( addChild3 === false) {
      setAddChild3(true);
    } else if ( addChild4 === false) {
      setAddChild4(true);
    } else if (addChild5 === false) {
      setAddChild5(true);
      setAddChild(false);
    }

    if ( addChild1 === true && addChild2 === true && addChild3 === true && addChild4 === true && addChild5 === true)  {
      setAddChild(false);
    }

  }


  // delete childe info 
  const deletedChild = e => {
    let id = e.target.id;
    setAddChild(true);
    if (id === "01") {
      setAddChild1(false);
      setChild1Nume("");
      setChild1Age("");
    } else if (id === "02") {
      setAddChild2(false);
      setChild2Nume("");
      setChild2Age("");
    } else if (id === "03") {
      setAddChild3(false);
      setChild3Nume("");
      setChild3Age("");
    } else if (id === "04") {
      setAddChild4(false);
      setChild4Nume("");
      setChild4Age("");
    } else  if (id === "05") {
      setAddChild5(false);
      setChild5Nume("");
      setChild5Age("");
    }
  }



  return (
    <div className="App">
      {/* header */}
      <Header openPage={openPage} />
      {/* form page */}
      {openForm && <Form
        parentNume={parentNume}
        changeParentinput={changeParentinput}
        parentAge={parentAge}
        child1Nume={child1Nume}
        Child1Age={Child1Age}
        child2Nume={child2Nume}
        Child2Age={Child2Age}
        child3Nume={child3Nume}
        Child3Age={Child3Age}
        child4Nume={child4Nume}
        Child4Age={Child4Age}
        child5Nume={child5Nume}
        Child5Age={Child5Age}
        changeChilde1Input={changeChilde1Input}
        changeChilde2Input={changeChilde2Input}
        changeChilde3Input={changeChilde3Input}
        changeChilde4Input={changeChilde4Input}
        changeChilde5Input={changeChilde5Input}
        addChild={addChild}
        addChild1={addChild1}
        addChild2={addChild2}
        addChild3={addChild3}
        addChild4={addChild4}
        addChild5={addChild5}
        addNextChild={addNextChild}
        deletedChild={deletedChild}
        onSubmit={onSubmit}
        error={error}
      />}
      {/* Preview page */}
      {openPreview && <Preview
        results={results}

      />}
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;

