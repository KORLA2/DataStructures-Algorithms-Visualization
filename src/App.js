import React ,{useState} from "react";
import { BrowserRouter as Router,Routes,Route ,Link} from "react-router-dom";
import styled ,{keyframes}from "styled-components";
import Stack from "./ds/stack";
import DisplayArray from './SortingAlgos/Display'



import {bounce, rubberBand,tada} from 'react-animations'
import Queue from './ds/Queue'
import Graph from './ds/Graph'
import Heading from './SortingAlgos/Heading.js'
import Tree from './ds/Tree';
import List from "./ds/List";
import Sorting from './Sorting'
import { Bubblepairs, MergePairs ,QuickPairs} from "./SortingAlgos/Sort";
import Swap from "./SortingAlgos/Swap";
import   Algorithms  from "./Algorithms.js";
import DataStructures from "./DataStructures.js";
import { useEffect } from "react";
function App() {
let [data,setdata] =useState('');
let [animatedPairs,setanimatedPairs]=useState([])
let [i, seti] = useState(0);
let [sort,setsort]=useState(0);
let [color,setcolor]=useState([]);
let [set, isset] = useState(0);
let [Array,setArray]=useState([])
let [index,setindex]=useState(0);
let [Sorts,setSorts]=useState({Bubble:0,Selection:0,Merge:0,Insertion:0,Quick:0,Heap:0});

useEffect(()=>{
if(data)
{
  setArray([...Array,data])
  setdata('')}

},[i])

useEffect(()=>{
console.log('Akhil')
if(Sorts.Bubble)setanimatedPairs(Bubblepairs);

else if (Sorts.Merge) setanimatedPairs(MergePairs(Array,0,Array.length));

else if(Sorts.Quick)setanimatedPairs(QuickPairs(Array,0,Array.length-1));


},[Sorts])
return (
  <div>
    <Router>
      <Routes>
        <Route path="/datastructures" element={<DataStructures />} />
        <Route path="/datastructures/stack" element={<Stack />} />
        <Route path="/datastructures/Queue" element={<Queue />} />
        <Route path="/datastructures/Tree" element={<Tree />} />
        <Route path="/datastructures/Graph" element={<Graph />} />
        <Route path="/datastructures/List" element={<List />} />
        <Route path="/algorithms" element={<Algorithms />} />
        <Route path="/algorithms/sorting" element={<Sorting />}></Route>

         <Route
          path="/algorithms/sorting/Bubble"
          element={
            <div>
              <Heading
                setdata={setdata}
                seti={seti}
                i={i}
                setsort={setsort}
                sort={sort}
              />

              <Bubble
                index={index}
                i={i}
                setindex={setindex}
                sort={sort}
                Array={Array}
                setArray={setArray}
                setanimatedPairs={setanimatedPairs}
                animatedPairs={animatedPairs}
              />
            </div>
          }
        />
         
        <Route
          path="/algorithms/sorting/Selection"
          element={
            <div>
              <Heading /> <Selection />
            </div>
          
        /> 
        <Route
          path="/algorithms/sorting/Merge"
          element={
            <Body>
              <Heading
                setdata={setdata}
                seti={seti}
                i={i}
                setsort={setsort}
                sort={sort}
              />
              <DisplayArray Array={Array} setcolor={setcolor} isset={isset} />
              {sort === 1 &&
                ((!Sorts.Quick && setSorts({ ...Sorts, ["Quick"]: 1 })) || (
                  <Swap
                    color={color}
                    setcolor={setcolor}
                    issset={isset}
                    setanimatePairs={setanimatedPairs}
                    animatedPairs={animatedPairs}
                    Array={Array}
                    index={index}
                    setindex={setindex}
                    setArray={setArray}
                  />
                ))}
            </Body>
          }
        />

        <Route
          path="/algorithms/sorting/Quick"
          element={
            <Body>
              <Heading
                setdata={setdata}
                seti={seti}
                i={i}
                setsort={setsort}
                sort={sort}
              />
              <DisplayArray Array={Array} setcolor={setcolor} isset={isset} />

              {sort === 1 &&
                ((!Sorts.Quick && setSorts({ ...Sorts, ["Quick"]: 1 })) || (
                  <Swap
                    setcolor={setcolor}
                    isset={isset}
                    setanimatePairs={setanimatedPairs}
                    animatedPairs={animatedPairs}
                    Array={Array}
                    index={index}
                    setindex={setindex}
                    setArray={setArray}
                  />
                ))}
            </Body>
          }
        />

        <Route
          path="*"
          element={
            <Head>
              <Link to="datastructures">
                <Bounce>DataStructures</Bounce>
              </Link>
              <Link to="algorithms">
                <Tada>Algorithms</Tada>
              </Link>
            </Head>
          }
        />
      </Routes>
    </Router>
  </div>
);
}

export default App;
let Head = styled.div`
  height: 60px;
  width: 100vw;
  background: green;
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  a {
    color: black;
    text-decoration: none;
    margin: 60px;
    font-size: 26px;
  }
`;
let Bounce=styled.div`
animation:2s ${keyframes`${rubberBand}`} infinite;
`
let Tada=styled.div`
animation:2s ${keyframes`${tada}`} infinite;

`
let Body=styled.div`
position:relative;
height:100vh;
`
