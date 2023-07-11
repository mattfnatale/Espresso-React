import './App.css';

const PAGE_TITLE = "Espresso Data Table";

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
      <h1 className="title">{PAGE_TITLE}</h1>
      <div className="content">
        <DataTable />
      </div>
      <div className="footer">
        <div id="signature-text">
          <h4>- matt 🙂</h4>
        </div>
        <div id="source-text">
          <h4><a target="_blank" href="https://github.com/mattfnatale/Espresso-React">source</a></h4>
        </div>
      </div>
    </div>
  );
}

export default App;
