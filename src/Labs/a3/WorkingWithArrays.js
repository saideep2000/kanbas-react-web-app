import ArrayIndexAndLength from './ArrayIndexAndLength';
import AddingAndRemovingDataToFromArrays from './AddingAndRemovingDataToFromArrays';
import ForLoops from './ForLoops';
import MapFunction from './MapFunction';
import JsonStringify from './JsonStringify';
import FindFunction from './FindFunction';
import FindIndex from './FindIndex';
import FilterFunction from './FilterFunction';
const WorkingWithArrays = () => {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];

    let variableArray1 = [
    functionScoped,   blockScoped,
    constant1,        numberArray1,   stringArray1
    ];
    return(
        <div>
            <h2>WorkingWithArrays</h2>
            numberArray1 = {numberArray1[0]+''+numberArray1[1]+''+numberArray1[2]+''+numberArray1[3]+''+numberArray1[4]} <br />
            stringArray1 = {stringArray1[0]+''+stringArray1[1]}<br />
            variableArray1 = {variableArray1} <br />
            <ArrayIndexAndLength/>
            <AddingAndRemovingDataToFromArrays/>
            <ForLoops/>
            <MapFunction/>
            <JsonStringify/>
            <FindFunction/>
            <FindIndex/>
            <FilterFunction/>
        </div>
     );
}
export default WorkingWithArrays