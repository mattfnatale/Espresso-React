import './App.css';
import {useEffect, useState} from 'react';

const PAGE_TITLE = "Espresso";

const PAGE_SUB_TITLE = "SPA Demo";

const HEADER_DATA = [
  {title: "Name", value: "name"},
  {title: "Blend", value: "blend"},
  {title: "Acidity", value: "acidity"},
  {title: "Flavor Profile", value: "flavorProfile"}
];

const TABLE_DATA = [
  {name: "Ecstatic",          blend: "Dark",    acidity: "Low Medium",  flavorProfile: "Butterscotch, Dark Chocolate, Dried Citrus"},
  {name: "Jacob's Wonderbar", blend: "Dark",    acidity: "Low",         flavorProfile: "Dark Chocolate, Dried Berry, Smoke"},
  {name: "Tesora",            blend: "Medium",  acidity: "Very Low",    flavorProfile: "Cocoa, Caramel, Almond"},
  {name: "Philtered Soul",    blend: "Medium",  acidity: "Medium Low",  flavorProfile: "Maple, Hazelnut, Caramel"},
  {name: "Ambrosia",          blend: "Light",   acidity: "Low",         flavorProfile: "Milk Chocolate, Almond, Vanilla"},
  {name: "Unplugged Decaf",   blend: "Dark",    acidity: "Medium",      flavorProfile: "Semi Sweet Chocolate, Dried Plum"}
];

function DataTable({data, action}) {
  function TableHeader() {
    let renderedHeader = HEADER_DATA.map((header, index) => {
        return (<th key={"header-" + header.value} className="headerCell">{header.title}</th>);
    });
    
    return (<tr key="header">{renderedHeader}</tr>);
  }
  
  function TableRow({row}, {index}) {
    let renderedRow = HEADER_DATA.map((header, index) => {
        return (<td key={"row-" + index + "-" + header.value} className="dataCell">{row[header.value]}</td>);
      }
    );
    
    return (<tr onClick={() => action(row)} key={"row-" + index} className="dataRow">{renderedRow}</tr>);
  }
  
  function isEmpty() {
    if (data.length === 0) {
      return (<p className="emptyMessage">Empty</p>);
    } else {
      return null;
    }
  }
  
  let renderedBody = data.map((row, index) => {
    return (<TableRow key={"row-" + index} row={row} index={index} />)
  });
  
  return (
    <div>
      <table className="dataTable">
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          {renderedBody}
        </tbody>
      </table>
      <p>{isEmpty()}</p>
    </div>
  );
}

function Title() {
  return (
    <div className="title">
      <h1 id="page-title">{PAGE_TITLE}</h1>
      <h4 id="page-sub-title">{PAGE_SUB_TITLE}</h4>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <div id="signature-text">
        <h4>- Matt 🙂</h4>
      </div>
      <div id="source-text">
        <h4><a target="_blank" rel='noreferrer' href="https://github.com/mattfnatale/Espresso-React">Source</a></h4>
      </div>
    </div>
  );
}

function App() {
  const [tableDataTop, setTableDataTop] = useState([]);
  const [tableDataBot, setTableDataBot] = useState([]);
  
  useEffect(() => {
    setTableDataTop(TABLE_DATA);
    setTableDataBot([]);
  }, []);
  
  function moveDown(value) {
    setTableDataTop(tableDataTop.filter(item => item.name !== value.name));
    setTableDataBot((array) => [...array, value]);
  }
  
  function moveUp(value) {
    setTableDataBot(tableDataBot.filter(item => item.name !== value.name));
    setTableDataTop((array) => [...array, value]);
  }
  
  return (
    <div className="App">
      <Title />
      <div className="content">
        <DataTable data={tableDataTop} action={moveDown} />
      </div>
      <br />
      <div className="content">
        <DataTable data={tableDataBot} action={moveUp} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
