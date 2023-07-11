import './App.css';

const PAGE_TITLE = "Espresso";

const PAGE_SUB_TITLE = "SPA Demo";

const HEADER_DATA = [
  "Name",
  "Blend",
  "Acidity",
  "Flavor Profile"
];

const TABLE_DATA = [
  ["Ecstatic",          "Dark",     "Low Medium",   "Butterscotch, Dark Chocolate, Dried Citrus"],
  ["Jacob's Wonderbar", "Dark",     "Low",          "Dark Chocolate, Dried Berry, Smoke"],
  ["Tesora",            "Medium",   "Very Low",     "Cocoa, Caramel, Almond"],
  ["Philtered Soul",    "Medium",   "Medium Low",   "Maple, Hazelnut, Caramel"],
  ["Ambrosia",          "Light",    "Low",          "Milk Chocolate, Almond, Vanilla"],
  ["Unplugged Decaf",   "Dark",     "Medium",       "Semi Sweet Chocolate, Dried Plum"],
];

function TableHeader() {
  let renderedHeader = HEADER_DATA.map(
    function(headerName) {
      return (<th className="headerCell">{headerName}</th>);
  });
  return (<tr>{renderedHeader}</tr>);
}

function TableBody() {
  let renderedBody = TABLE_DATA.map(
    function(row) {
      return TableRow(row);
    }
  );
  return renderedBody;
}

function TableRow(row) {
  let renderedRow = row.map(
    function(value) {
      return (<td className="dataCell">{value}</td>);
    }
  );
  return (<tr className="dataRow">{renderedRow}</tr>);
}

function DataTable() {
  return (
    <table className="dataTable">
      <thead>
        <TableHeader />
      </thead>
      <tbody>
        <TableBody />
      </tbody>
    </table>
  );
}

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1 id="page-title">{PAGE_TITLE}</h1>
        <h4 id="page-sub-title">{PAGE_SUB_TITLE}</h4>
      </div>
      <div className="content">
        <DataTable />
      </div>
      <div className="footer">
        <div id="signature-text">
          <h4>- Matt 🙂</h4>
        </div>
        <div id="source-text">
          <h4><a target="_blank" href="https://github.com/mattfnatale/Espresso-React">Source</a></h4>
        </div>
      </div>
    </div>
  );
}

export default App;
