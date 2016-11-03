"use strict";

var females = BABYNAMES.filter(record => "F" == record.sex);
var topFemNames = females.sort((rec1, rec2) => rec2.count-rec1.count).slice(0,100);
console.log(topFemNames.length);

//main application React component
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var colMeta = {
            count: {
                type: columnTypes.numeric,
                caption: "Num of Babies"
            }
        }
        return (
            <div className="container">
                <h1>Most Popular Female Baby Names from 1996</h1>
                <DataTable records={this.props.records}
                    columnMeta={colMeta}/>
            </div>
        );
    }
}
/*
this went after the h1
    <ul>
        {
            // creates an expression that returns name and count. need the unique key to be able to track changes to each li.
            // map is forEaching over each record in the array, map can return something, while the function that forEach uses cannot return. Map generates new output array but with what the function returns for each element (li element in this case)
            this.props.records.map(record => <li key={record.name}>{record.name} {record.count}</li>)
        }
    </ul>
*/
//render the App component to the element with id="app"
ReactDOM.render(<App records={topFemNames}/>, document.getElementById("app"));
