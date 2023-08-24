import { useEffect } from 'react';
import User from './user';  // component import
import { user } from './user';

// ----------- function Component  -----------
// function App() {
//   return (
//     <div claName="App">
//       <h1>Hello World</h1>
//       <User />   {/* use component*/}
//       <User></User>  {/* reuse component*/}
//       <User />    {/* reuse component*/}
//     </div>
//   );

// }

// export default App;

// use component same file

// ----------- class Component  -----------

// import ClassComp from './classComp';

// function App() {
//   return (
//     <div claName="App">
//       <h1>Hello World</h1>
//       <ClassComp />   {/* use component*/}

//     </div>
//   );

// }

// export default App;

// // use one component to other component
// import React, { Component } from 'react';
// function App() {
//   return (
//     <div claName="App">
//       <h1>Hello World</h1>
//       <classComp />   {/* use component*/}

//     </div>
//   );

// }

// class classComp extends Component {
//   render() {
//     return (
//       <h1>Class Component</h1>
//     )
//   }
// }


// export default App;

// ---- one component ma use other component  ---

// function App() {
//   function apple() {
//     return (
//       <div>Apple</div>
//     )
//   }
//   return (
//     <div claName="App">
//       <h1>Hello World</h1>
//       {apple()}
//     </div>
//   );

// }
// export default App;

// -------------- JSX -----------

// import JsxCom from './jsxCom';
// function App() {

//   return (
//     <div claName="App">
//       <h1>Hello World</h1>
//       <JsxCom></JsxCom>
//     </div>
//   );

// }
// export default App;

// -------- Click Event and Function ----


// function App() {
//   function apple() {
//     alert('function call')
//   }

//   return (
//     <div claName="App">
//       <h1>Hello World</h1>
//       <button onClick={apple}>Click Me</button>

//     </div>
//   );

// }
// export default App;

// ----------- variable -------------
// function App() {
//   let name = "bhavin"
//   function apple() {
//     name = "bhavin hadiyal"
//     alert('function call')
//   }

//   return (
//     <div claName="App">
//       <h1>{name}</h1>
//       <button onClick={apple}>Click Me</button>

//     </div>
//   );

// }
// export default App;

// ----------------- use state -----------

// import { useState } from 'react';
// function App() {
//   // let name = "bhavin"
//   const [name, setData] = useState("bhavin hadiyal");
//   function updateData() {
//     setData('change')
//   }

//   return (
//     <>
//       <h4>{name}</h4>
//       <button onClick={updateData}>State Component</button>
//     </>

//   );

// }
// export default App;

// increace one by one

// import { useState } from 'react';
// function App() {
//   // let name = "bhavin"
//   const [name, setData] = useState(0);
//   function updateData() {
//     setData(name + 1)
//   }

//   return (
//     <>
//       <h4>{name}</h4>
//       <button onClick={updateData}>State Component</button>
//     </>

//   );

// }
// export default App;

// //----------- Class Component using state -----------
// import React, { Component } from 'react';

// class App extends Component {

//   constructor() {
//     super();
//     this.state = {
//       data: 1
//     }
//   }

//   apple() {
//     // alert("apple")
//     this.setState({ data: this.state.data + 1 })
//   }

//   render() {
//     return (
//       <div className='App'>
//         <h1>{this.state.data}</h1>
//         <button onClick={() => this.apple()}>Update Data</button>
//       </div>
//     );
//   }

// }

// export default App;


// // -----------Props using function Component  -----------
// import React, { useState } from 'react';
// import PropFunc from './propFunc';
// function App() {
//   const [name, setName] = useState('bhavin')
//   return (
//     <div claName="App">
//       <h1>Hello World</h1>
//       <PropFunc name={name} email={"bhavin@123.com"} />
//       <button onClick={() => { setName('bhavin hadiyal') }}>Update Name</button>
//     </div>
//   );

// }

// export default App;


// -----------Props using Class Component  -----------
// import React, { useState } from 'react';
// import PropsClass from './propsClass';
// function App() {
//   return (
//     <div claName="App">
//       <h1>Hello World</h1>
//       <PropsClass name="bhavin" email="bhavin@123.com" />
//       <PropsClass name="bhavin" email="bhavin@123.com" />
//       <PropsClass name="bhavin" email="bhavin@123.com" />

//     </div>
//   );

// }

// export default App;

// ----------- button click change component using class----

// import React, { useState } from 'react';
// import PropsClass from './propsClass';
// class App extends React.Component {

//   constructor() {
//     super();
//     this.state = {
//       name: "bhavin"
//     }
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hello World</h1>
//         <PropsClass name={this.state.name} email="bhavin@123.com" />
//         <button onClick={() => this.setState({ name: "bhavin hadiyal" })}>Update Name</button>
//       </div>
//     )
//   }

// }

// export default App;

// ------------ Get Input box value ----------

// import React, { useState } from 'react'
// function App() {
//   const [data, setData] = useState(null)
//   function getData(val) {
//     console.log(val.target.value)
//     setData(val.target.value)

//   }
//   return (
//     <div className='App'>
//       <h1>Get Input box value</h1>
//       <h1>{data}</h1>
//       <input type='text' onChange={getData} />
//     </div>
//   );
// }

// export default App;

// // ----- click button and change the value -----

// import React, { useState } from 'react'
// function App() {
//   const [data, setData] = useState(null)
//   const [print, setPrint] = useState(false)
//   function getData(val) {
//     console.log(val.target.value)
//     setData(val.target.value)
//     setPrint(false)

//   }
//   return (
//     <div className='App'>
//       <h1>Get Input box value</h1>
//       {
//         print ?
//           <h1>{data}</h1>
//           : null
//       }
//       <input type='text' onChange={getData} />
//       <button onClick={() => setPrint(true)}>Print Data</button>
//     </div>
//   );
// }

// export default App;


// ----- Hide , Show and Toggle Element -----

// import React, { useState } from 'react'
// function App() {
//   const [status, setStatus] = useState(true)
//   // const [print, setPrint] = useState(false)
//   function getData(val) {
//     console.log(val.target.value)
//     // setData(val.target.value)
//     // setPrint(false)

//   }
//   return (
//     <div className='App'>
//       {
//         status ? <h1>Hide , Show and Toggle Element</h1> : null

//       }
//       <button onClick={() => setStatus(false)}>Hide</button>
//       <button onClick={() => setStatus(true)}> Show</button>
//     </div>
//   );
// }

// export default App;

// --- toggle  -----
// import React, { useState } from 'react'
// function App() {
//   const [status, setStatus] = useState(true)
//   // const [print, setPrint] = useState(false)
//   function getData(val) {
//     console.log(val.target.value)
//     // setData(val.target.value)
//     // setPrint(false)

//   }
//   return (
//     <div className='App'>
//       {
//         status ? <h1>Hide , Show and Toggle Element</h1> : null

//       }
//       {/* <button onClick={() => setStatus(false)}>Hide</button>
//       <button onClick={() => setStatus(true)}> Show</button> */}

//       <button onClick={() => setStatus(!status)}>Toggle</button>
//     </div>
//   );
// }

// export default App;

// ------------------ Handle Form CheckBox InputField Select -----------

// import React, { useState } from 'react';
// function App() {
//   const [name, setName] = useState("");
//   const [tnc, setTnc] = useState(false);
//   const [intrest, setIntrest] = useState("");
//   function getFormData(e) {
//     console.log(name, tnc, intrest)
//     e.preventDefault()

//   }
//   return (
//     <div className='App'>
//       <h1>Handle Form In React</h1>
//       <form onSubmit={getFormData}>
//         <input type='text' placeholder='enter name' onChange={(e) => setName(e.target.value)} /><br></br>
//         <select onChange={(e) => setIntrest(e.target.value)}>
//           <option>Select Option</option>
//           <option>Marvel</option>
//           <option>DC</option>
//         </select><br />
//         <input type='checkbox' onChange={(e) => setTnc(e.target.checked)} /><span>Accept Terms and condition</span><br /><br />
//         <button type='submit'>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;

// ------------------ If -----------
// import { useState } from 'react'
// import IfCond from './ifCond';
// function App() {

//   const [logged, setlogged] = useState(false)
//   return (
//     <div>
//       <h1>If else Condition</h1>
//       {logged ? <h1>Welcome bhavin</h1> : <h1>Welcome Hadiyal</h1>}
//     </div>
//   )
// }



// export default App;


// import { useState } from 'react'
// import IfCond from './ifCond';
// function App() {

//   const [logged, setlogged] = useState(2)
//   return (
//     <div>
//       <h1>If else Condition</h1>
//       {logged == 1 ? <h1>Welcome bhavin user 1</h1>
//         : logged == 2 ? <h1>Welcome Hadiyal user 2</h1>
//           : <h1>Welcome gest</h1>}
//     </div>
//   )
// }



// export default App;

// ------------------ Validation -----------

// import Valida from './valida';
// function App() {
//   return (
//     <div>
//       <Valida />
//     </div>
//   );
// }
// export default App;

// ------------------ Pass Function as Props -----------

// import PassFunAsProps from './PassFunAsProps';
// function App() {
//   function getData() {
//     alert('hello from app')
//   }
//   return (
//     <div>
//       <PassFunAsProps data={getData} />
//     </div>
//   );
// }
// export default App;

// import Member from './member';
// import PassFunAsProps from './PassFunAsProps';
// function App() {
//   function getData() {
//     alert('hello from app')
//   }
//   return (
//     <div>
//       <PassFunAsProps data={getData} />
//       <div style={{ float: "right" }}>
//         <Member data={getData} />
//       </div>
//     </div>
//   );
// }
// export default App;

// // ---------------- Constructor life cycle Method -----------

// import React from 'react'

// class App extends React.Component {
//   constructor() {
//     super();
//     console.log('constructor')
//     this.state = {
//       data: "bhavin"
//     }
//   }
//   render() {
//     console.log('render')
//     return (
//       <div>

//         <h1>Constructor life cycle Method</h1>
//         <h1>{this.state.data}</h1>
//       </div>
//     )
//   }
// }

// export default App;


// // ---------------- Render life cycle Method using state-----------

// import React from 'react'
// import RenderLifeCycle from './renderLifeCycle';
// function App() {
//   const [name, setName] = React.useState('bhavin')
//   return (
//     <div>
//       <h1></h1>
//       <RenderLifeCycle name={name} />
//       <button onClick={() => setName('bhavin hadiyal')}>Update Name</button>
//     </div>
//   )
// }

// export default App;

// ---------------- Render life cycle Method using props-----------

// import React from 'react'
// import RenderLifeCycle from './renderLifeCycle';
// function App() {
//   const [name, setName] = React.useState('bhavin')
//   return (
//     <div>
//       <h1></h1>
//       <RenderLifeCycle name={name} />
//       <button onClick={() => setName('bhavin hadiyal')}>Update Name</button>
//     </div>
//   )
// }

// export default App;

// ---------------- ComponentDidMound life cycle Method using props-----------


// import React from 'react'

// class App extends React.Component {
//   constructor() {
//     super();


//     console.log('constructor')

//   }

//   componentDidMount() {
//     console.log('componentDidMount');

//   }

//   render() {
//     console.log('render')
//     return (
//       <div>

//         <h1>Constructor life cycle Method</h1>


//       </div>
//     )
//   }
// }

// export default App;

// ---------------- ComponentDidUpdate life cycle Method using props-----------


// import React from 'react'

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "bhavin"
//     }

//     console.log('constructor')

//   }

//   componentDidUpdate() {
//     console.log('componentDidUpdate');

//   }

//   render() {
//     console.log('render')
//     return (
//       <div>

//         <h1>ComponentDidUpdate life cycle Method</h1>

//         <button onClick={() => { this.setState({ name: 'bhavin hadiyal' }) }}>Update Name</button>
//       </div>
//     )
//   }
// }

// export default App;




// import React from 'react'

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       counter: 0
//     }

//     console.log('constructor')

//   }

//   componentDidUpdate(prevProps, preState, shanpshot) {
//     console.log('componentDidUpdate', preState);

//     // if (preState.counter == this.state.counter) {
//     //   alert("data is already same")
//     // }

//     if (this.state.counter < 10) {
//       this.setState({ counter: this.state.counter + 1 })
//     }


//   }

//   render() {
//     console.log('render')
//     return (
//       <div>

//         <h1>ComponentDidUpdate life cycle Method {this.state.counter}</h1>

//         <button onClick={() => { this.setState({ counter: 1 }) }}>Update Name</button>
//       </div>
//     )
//   }
// }

// export default App;

// ---------------- shouldComponentUpdate life cycle Method -----------

// import React from 'react'

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       counter: 0
//     }

//     console.log('constructor')

//   }
//   shouldComponentUpdate() {
//     console.log("shouldComponentUpdate", this.state.counter);
//     if (this.state.counter > 5 && this.state.counter < 10) {
//       return true
//     }
//     // return true
//   }
//   render() {
//     console.log('render')
//     return (
//       <div>

//         <h1>shouldComponentUpdate life cycle Method {this.state.counter}</h1>
//         <button onClick={() => { this.setState({ counter: this.state.counter + 1 }) }}>Update counter</button>

//       </div>
//     )
//   }
// }

// export default App;

// ---------------- componentWillUnmount life cycle Method -----------


// import React from 'react'
// import CompWillUnmount from './CompWillUnmount';
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       show: true
//     }

//     console.log('constructor')

//   }

//   render() {
//     console.log('render')
//     return (
//       <div>
//         {
//           this.state.show ? <CompWillUnmount /> : <h1>Child compontnt remove</h1>
//         }
//         <button onClick={() => { this.setState({ show: !this.state.show }) }}>Toggle Child Component</button>

//       </div>
//     )
//   }
// }

// export default App;


// ---------------- Hooks -----------------------------------

// import React, { useState } from 'react';   // import Hooks

// function App() {
//   const [data, setData] = useState("bhavin")  // data -> state name  , setData -> data Update mate use thay and default value bhavin
//   return (
//     < div >
//       <h1>{data}</h1>  {/*defind state*/}
//       <button onClick={() => setData("bhavin hadiyal")}>Hook Update</button>
//     </div >
//   )
// }
// export default App;

// ---------------- useEffect Hooks -----------------------

// import React, { useEffect } from 'react';   // import Hooks

// function App() {
//   useEffect(() => {
//     alert('useEffect Hooks');
//     console.log('useEffect Hooks');
//   })
//   return (
//     < div >
//       <h1>useEffect Hooks</h1>
//       <button >Hook Update</button>
//     </div >
//   )
// }
// export default App;


// update state use hooks

// import React, { useEffect, useState } from 'react';   // import Hooks

// function App() {
//   const [count, setCount] = useState(0)
//   useEffect(() => {

//     console.log('useEffect Hooks');
//   })
//   return (
//     < div >
//       <h1>useEffect Hooks {count}</h1>
//       <button onClick={() => { setCount(count + 1) }}>Hook Update</button>
//     </div >
//   )
// }
// export default App;


// ---------------- useEffect Hooks with condition-----------------------

// use state
// import React, { useEffect, useState } from 'react';   // import Hooks

// function App() {
//   const [data, setData] = useState(10)
//   const [count, setCount] = useState(100)
//   useEffect(() => {

//     console.log('Call with data state');
//   }, [data])

//   useEffect(() => {

//     console.log('Call with COunt state');
//   }, [<h1>Count : {count}</h1>
//   ])
//   return (
//     < div >
//       <h1>Count : {count}</h1>
//       <h1>Data : {data}</h1>
//       <button onClick={() => { setCount(count + 1) }}>Hook Update Count</button>
//       <button onClick={() => { setData(data + 1) }}>Hook Update data</button>
//     </div >
//   )
// }
// export default App;


// use props

// import React, { useEffect, useState } from 'react';   // import Hooks
// import UseEffectFun from './UseEfferctFun';
// function App() {
//   const [data, setData] = useState(10)
//   const [count, setCount] = useState(100)

//   return (
//     < div >

//       <UseEffectFun count={count} data={data} />
//       <button onClick={() => { setCount(count + 1) }}>Hook Update Count</button>
//       <button onClick={() => { setData(data + 1) }}>Hook Update data</button>
//     </div >
//   )
// }
// export default App;

// ---------------- Style Type in React Js----------------------
// import './Style.css';
// import style from './ModuleCss.module.css'
// function App() {
//   return (
//     <div>
//       <h1 className='primary'>Style Type (1 : normal style)in React Js</h1>
//       <h1 style={{ color: 'red', backgroundColor: 'black' }}>Style Type (2 : Inline css)in React Js</h1>
//       <h1 className={style.success}>Style Type (3 : Module css)in React Js</h1>
//     </div>
//   )
// }

// export default App;

// ---------------- use bootstrap----------------------
// import { Button } from 'react-bootstrap'  // use bootstrap button
// function App() {
//   return (
//     <div>
//       <h1>Install bootstrap</h1>
//       <Button onClick={() => alert('Hello')}>Click Me</Button>
//       <Button variant="success">Success</Button>{' '}
//     </div>
//   )
// }

// export default App;


// // ---------------- Array Listing with Map function----------------------

// function App() {
//   const student = ["bhavin", "parth", "amit", "sunil"]

//   //----- Map looping ----------------
//   student.map((item) => {
//     console.log("my Name is : ", item);
//   })

//   // --------- for loop ------------

//   for (let i = 0; i < student.length; i++) {
//     console.log("my Name is for loop  : ", student[i]);
//   }
//   return (
//     <div>
//       <h1>Array Listing with Map function</h1>
//     </div>
//   )
// }

// export default App;


// ---------------- Array Listing with Map function----------------------

// function App() {
//   const student = ["bhavin", "parth", "amit", "sunil"]


//   return (
//     <div>
//       <h1>Array Listing with Map function</h1>
//       {
//         student.map((data) =>
//           <h2>{data}</h2>
//         )
//       }

//       {/* {
//       for (let i = 0; i < student.length; i++)
//       {
//         <h2>{student[i]}</h2>   throw error

//       } */}



//     </div>
//   )
// }

// export default App;

// // ----------- use object  -----------


// function App() {
//   // const student = ['bhavin',000,'bhavin@gmail']

//   // use object
//   const student = [{
//     name: 'bhavin',
//     email: 'bhavin@123',
//     contact: 123

//   },
//   {
//     name: 'parth',
//     email: 'part@123',
//     contact: 124
//   },
//   {
//     name: 'amit',
//     email: 'amit@123',
//     contact: 125
//   },
//   {
//     name: 'sunil',
//     email: 'sunil@123',
//     contact: 126
//   }
//   ]

//   return (
//     <div>
//       <h1>Array Listing with Map function</h1>
//       {
//         student.map((data) =>
//           <h2>Name is : {data.name},{data.email}</h2>
//         )
//       }

//       {/* {
//       for (let i = 0; i < student.length; i++)
//       {
//         <h2>{student[i]}</h2>   throw error

//       } */}



//     </div>
//   )
// }

// export default App;


// // ----------- use object table  -----------


// function App() {

//   const student = [{
//     name: 'bhavin',
//     email: 'bhavin@123',
//     contact: 123

//   },
//   {
//     name: 'parth',
//     email: 'part@123',
//     contact: 124
//   },
//   {
//     name: 'amit',
//     email: 'amit@123',
//     contact: 125
//   },
//   {
//     name: 'sunil',
//     email: 'sunil@123',
//     contact: 126
//   }
//   ]

//   return (
//     <div>
//       <h1>Array Listing with Map function</h1>
//       <table border="2">

//         <tr>
//           <td>Name</td>
//           <td>Email</td>
//           <td>Contact</td>
//         </tr>

//         {
//           student.map((data) =>
//             <tr>
//               <td>{data.name}</td>
//               <td>{data.email}</td>
//               <td>{data.contact}</td>
//             </tr>
//           )
//         }
//       </table>

//     </div>
//   )
// }

// export default App;

// // ----------- List with Bootstrap and Unique key  -----------


// function App() {

//   const user = [{
//     name: 'bhavin',
//     email: 'bhavin@123',
//     contact: 123

//   },
//   {
//     name: 'parth',
//     email: 'part@123',
//     contact: 124
//   },
//   {
//     name: 'amit',
//     email: 'amit@123',
//     contact: 125
//   },
//   {
//     name: 'sunil',
//     email: 'sunil@123',
//     contact: 126
//   }
//   ]

//   return (
//     <div>
//       <h1>Array Listing with Map function</h1>
//       <table border="2">
//         <tbody>
//           <tr>
//             <td>Name</td>
//             <td>Email</td>
//             <td>Contact</td>
//           </tr>
//           {
//             user.map((item, i) =>
//               <tr key={i}>
//                 <td>{item.name}</td>
//                 <td>{item.email}</td>
//                 <td>{item.contact}</td>
//               </tr>
//             )
//           }
//         </tbody>
//       </table>

//     </div>
//   )
// }

// export default App;


// ----------- List with Bootstrap and Unique key  -----------
// show only contact 111
// import { Table } from 'react-bootstrap';
// function App() {

//   const user = [{
//     name: 'bhavin',
//     email: 'bhavin@123',
//     contact: 123

//   },
//   {
//     name: 'parth',
//     email: 'part@123',
//     contact: 124
//   },
//   {
//     name: 'amit',
//     email: 'amit@123',
//     contact: 111
//   },
//   {
//     name: 'sunil',
//     email: 'sunil@123',
//     contact: 111
//   }
//   ]

//   return (
//     <div>
//       <h1>Array Listing with Map function</h1>
//       <Table striped bordered hover>
//         <tbody>
//           <tr>
//             <td>Name</td>
//             <td>Email</td>
//             <td>Contact</td>
//           </tr>
//           {
//             user.map((item, i) =>
//               item.contact === 111 ?
//                 <tr key={i}>
//                   <td>{item.name}</td>
//                   <td>{item.email}</td>
//                   <td>{item.contact}</td>
//                 </tr> : null
//             )
//           }
//         </tbody>
//       </Table>

//     </div>
//   )
// }

// export default App;


// // ----------- Nested List with Nested Array  -----------

// import React from 'react'
// import { Table } from 'react-bootstrap'
// function App() {
//   const users = [
//     {
//       name: 'Anil', email: 'anil@test.com', address: [
//         { hm: '101', city: 'Noida', country: 'India' },
//         { hm: '10', city: 'Gurgaon', country: 'India' },
//         { hm: '23', city: 'Noida', country: 'India' },
//         { hm: '45', city: 'Delhi', country: 'India' },
//       ]
//     },
//     {
//       name: 'Burce', email: 'bruce@test.com', address: [
//         { hm: '101', city: 'Noida', country: 'India' },
//         { hm: '10', city: 'Gurgaon', country: 'India' },
//         { hm: '23', city: 'Noida', country: 'India' },
//         { hm: '45', city: 'Delhi', country: 'India' },
//       ]
//     },
//     {
//       name: 'Peter', email: 'peter@test.com', address: [
//         { hm: '101', city: 'Noida', country: 'India' },
//         { hm: '10', city: 'Gurgaon', country: 'India' },
//         { hm: '23', city: 'Noida', country: 'India' },
//         { hm: '45', city: 'Delhi', country: 'India' },
//       ]
//     },
//     {
//       name: 'Sam', email: 'sam@test.com', address: [
//         { hm: '101', city: 'Noida', country: 'India' },
//         { hm: '10', city: 'Gurgaon', country: 'India' },
//         { hm: '23', city: 'Noida', country: 'India' },
//         { hm: '45', city: 'Delhi', country: 'India' },
//       ]
//     },
//   ]
//   return (
//     <div className="App">
//       <h1>List with Nested Array</h1>
//       <Table variant="dark"  >
//         <tbody>
//           <tr>
//             <td>S.N</td>
//             <td>Name</td>
//             <td>Email</td>
//             <td>Address</td>
//           </tr>
//           {
//             users.map((item, i) =>
//               <tr key={i}>
//                 <td>{i + 1}</td>
//                 <td>{item.name}</td>
//                 <td>{item.email}</td>
//                 <td>
//                   {/*  */}
//                   <Table variant="dark"  >
//                     <tbody>
//                       {
//                         item.address.map((data) =>

//                           <tr>
//                             <td>{data.hm}</td>
//                             <td>{data.city}</td>
//                             <td>{data.country}</td>
//                           </tr>
//                         )
//                       }
//                     </tbody>
//                   </Table>
//                   {/*  */}
//                 </td>
//               </tr>
//             )
//           }
//         </tbody>
//       </Table>

//     </div>
//   );
// }

// export default App;


// ----------- Reuse Component  -----------

// import React from 'react';
// import ReuseComp from './ReuseComp';
// import { Table } from 'react-bootstrap'
// function App() {
//     const users = [
//         {
//             name: 'Anil', email: 'anil@test.com', address: [
//                 { hm: '101', city: 'Noida', country: 'India' },
//                 { hm: '10', city: 'Gurgaon', country: 'India' },
//                 { hm: '23', city: 'Noida', country: 'India' },
//                 { hm: '45', city: 'Delhi', country: 'India' },
//             ]
//         },
//         {
//             name: 'Burce', email: 'bruce@test.com', address: [
//                 { hm: '101', city: 'Noida', country: 'India' },
//                 { hm: '10', city: 'Gurgaon', country: 'India' },
//                 { hm: '23', city: 'Noida', country: 'India' },
//                 { hm: '45', city: 'Delhi', country: 'India' },
//             ]
//         },
//         {
//             name: 'Peter', email: 'peter@test.com', address: [
//                 { hm: '101', city: 'Noida', country: 'India' },
//                 { hm: '10', city: 'Gurgaon', country: 'India' },
//                 { hm: '23', city: 'Noida', country: 'India' },
//                 { hm: '45', city: 'Delhi', country: 'India' },
//             ]
//         },
//         {
//             name: 'Sam', email: 'sam@test.com', address: [
//                 { hm: '101', city: 'Noida', country: 'India' },
//                 { hm: '10', city: 'Gurgaon', country: 'India' },
//                 { hm: '23', city: 'Noida', country: 'India' },
//                 { hm: '45', city: 'Delhi', country: 'India' },
//             ]
//         },
//     ]
//     return (
//         <div className="App">
//             <h1>Reuse Component</h1>
//             {/* <ReuseComp /> */}
//             {
//                 users.map((item, i) =>
//                     // <h1>{item.name}</h1>
//                     <ReuseComp data={item} />

//                     // <ReuseComp data={item} />
//                 )
//             }

//         </div>
//     );
// }

// export default App;


// ----------- React Fragment  -----------

// import React from 'react';
// import { Table } from 'react-bootstrap';
// import ReactFragment from './ReactFragment'
// function App() {
//     return (
//         <div>
//             <h1>React Fragment</h1>
//             <Table>
//                 <tbody>
//                     <ReactFragment />

//                 </tbody>
//             </Table>

//         </div>
//     )
// }

// export default App;

// // -----------Lifting state Up -> Send Data Child to Parent Component  -----------
// import React from 'react';
// import { Table } from 'react-bootstrap';
// import LiftStateUp from './LiftStateUp';
// function App() {
//     function parantAlert(data) {
//         alert(data);
//     }

//     return (
//         <div>
//             <h1>Lifting state Up - Send Data Child to Parent Component</h1>
//             <LiftStateUp alert={parantAlert} />
//         </div>
//     )
// }

// export default App;


// // -----------Pure Component using state-----------

// import React, { PureComponent } from 'react'

// class App extends PureComponent {
//     constructor() {
//         super();
//         this.state = {
//             count: 1
//         }
//     }
//     render() {
//         return (
//             <div className="App">
//                 {/* <Counter count={this.state.count} /> */}
//                 <h1>Pure Component {this.state.count}</h1>
//                 <button
//                     onClick={() => { this.setState({ count: this.state.count + 1 }) }}
//                 >Update Count</button>
//             </div>
//         );
//     }
// }

// export default App;

// -----------Pure Component using Props-----------


// import React, { PureComponent } from 'react'
// import PureComp from './PureComp';
// class App extends PureComponent {
//     constructor() {
//         super();
//         this.state = {
//             count: 1
//         }
//     }
//     render() {
//         return (
//             <div className="App">
//                 <PureComp />
//                 {/* <Counter count={this.state.count} /> */}
//                 <h1>Pure Component state {this.state.count}</h1>
//                 <button
//                     onClick={() => { this.setState({ count: this.state.count + 1 }) }}
//                 >Update Count</button>
//             </div>
//         );
//     }
// }

// export default App;


// ----------- UseMemo Hooks-----------

// import React, { useState, useMemo } from 'react'
// function App() {
//     const [count, setData] = useState(1)
//     const [item, setItem] = useState(20)
//     // function multiCount() {
//     //     console.log('multi Count');
//     //     return count * 5;
//     // }

//     const multiCountMemo = useMemo(function multiCount() {
//         console.log('multi Count update state button');
//         return count * 5;

//     }, [count])

//     return (
//         <div className="App">
//             <h1>UseMemo Hooks</h1>
//             <h1>Count Hooks in React {count}</h1>
//             <h1>item Hooks in React {item}</h1>
//             {/* <h3>{multiCount()}</h3> */}
//             <h3>{multiCountMemo}</h3>
//             <button onClick={() => setData(count + 1)}>Update State</button>
//             <button onClick={() => setItem(item * 10)}>Update State item</button>

//         </div>
//     );
// }

// export default App;

// ----------- Ref-----------

// import React, { createRef } from 'react'
// class App extends React.Component {
//     constructor() {
//         super();
//         this.inputRef = createRef();   // define ref inputRef -> ref name gamete

//     }
//     componentDidMount() {
//         console.log(this.inputRef.current.value = "1000");
//     }

//     render() {
//         return (
//             <div className="App">
//                 <h1>Ref in React </h1>
//                 <input type="text" ref={this.inputRef} />
//                 <button >Check Ref</button>
//             </div>
//         );
//     }
// }

// export default App;

// // input text and text color red and background color black
// import React, { createRef } from 'react'
// class App extends React.Component {
//     constructor() {
//         super();
//         this.inputRef = createRef();
//     }
//     componentDidMount() {
//         // console.warn(this.inputRef.current.value="1000")
//     }
//     getVal() {
//         console.warn(this.inputRef.current.value)
//         this.inputRef.current.style.color = "red"
//         this.inputRef.current.style.backgroundColor = "black"

//     }
//     render() {
//         return (
//             <div className="App">
//                 <h1>Ref in React </h1>
//                 <input type="text" ref={this.inputRef} />
//                 <button onClick={() => this.getVal()}>Check Ref</button>
//             </div>
//         );
//     }
// }

// export default App;

// ----------- useRef Hooks-----------


// import React, { useRef } from 'react'
// function App() {
//     let inputRef = useRef(null);

//     function HnadleInput() {
//         console.log('function call usestate');
//         // inputRef.current.value = "100";   // click button and input field add value
//         // inputRef.current.focus();  // click button and focus input field
//         // inputRef.current.style.color = "red"  // click button and color red
//         inputRef.current.style.display = "none"
//     }

//     return (
//         <div className="App">
//             <h1>useRef Hooks in React </h1>
//             <input type="text" ref={inputRef} />
//             <button onClick={HnadleInput}>Handle Input</button>
//         </div>
//     );

// }

// export default App;

// ----------- forwardRef-----------

// import React, { useRef } from 'react'
// import FordRef from './forwdRef';
// function App() {
//     let inputRef = useRef(null)
//     function updateInput() {
//         inputRef.current.value = "1000";  // click button and get the value input field
//         inputRef.current.style.color = "red"
//         inputRef.current.focus()


//     }
//     return (
//         <div className="App">
//             <h1>forwardRef in React </h1>
//             <FordRef ref={inputRef} />
//             <button onClick={updateInput} >Update Input Box</button>
//         </div>
//     );

// }
// export default App;

// // ----------- Controlled Component-----------

// import React, { useState } from 'react'
// function App() {
//     const [val, setVal] = useState("")

//     return (
//         <div className="App">
//             <h1>Controlled Component </h1>
//             <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
//             <h1>{val}</h1>
//         </div>
//     );

// }
// export default App;


// // ----------- Uncontrolled Component-----------

// import React, { useRef } from 'react'
// function App() {
//     let inputRef = useRef(null)
//     let inputRef2 = useRef(null)

//     function submitForm(e) {
//         e.preventDefault()  // stop page reload
//         console.warn("input field 1 value : ", inputRef.current.value)
//         console.warn("input field 2 value : ", inputRef2.current.value)
//         let input3 = document.getElementById('input3').value
//         console.warn("input field 3 value : ", input3)


//     }
//     return (
//         <div className="App">
//             <h1>Uncontrolled Component </h1>
//             <form onSubmit={submitForm} >
//                 <input ref={inputRef} type="text" /> <br /> <br />
//                 <input ref={inputRef2} type="text" /> <br /> <br />
//                 <input id="input3" type="text" /> <br /> <br />

//                 <button>Submit</button>
//             </form>
//         </div>
//     );

// }
// export default App;

// ----------- HOC -----------

// import React, { useRef, useState } from 'react'
// function App() {
//     return (
//         <div className="App">
//             <h1>HOC </h1>
//             <HOCRed cmp={Counter} />   {/*Include Component */}
//             <HOCGreen cmp={Counter} />
//             <HOCBlue cmp={Counter} />

//         </div>
//     );
// }
// function HOCRed(props) {
//     return <h2 style={{ backgroundColor: 'red', width: 100 }}>Red<props.cmp /></h2>
// }
// function HOCGreen(props) {
//     return <h2 style={{ backgroundColor: 'green', width: 100 }}>Grren<props.cmp /></h2>
// }
// function HOCBlue(props) {
//     return <h2 style={{ backgroundColor: 'blue', width: 100 }}>blue <props.cmp /></h2>
// }
// function Counter() {
//     const [count, setCount] = useState(0)
//     return <div>
//         {/* <h1>Simple HOC</h1> */}
//         <h3>{count}</h3>
//         <button onClick={() => setCount(count + 1)}>Update</button>
//     </div>
// }

// export default App;

// ------------------------------ Router ------------------------------------------------

// import { BrowserRouter, Route, Routes } from 'react-router-dom';  // import router
// import Home from './Router/Component/Home';
// import About from './Router/Component/About';
// function App() {
//     return (
//         <div>
//             <h1>Hello Router</h1>
//             <BrowserRouter>
//                 <Routes>
//                     <Route path='/' element={<Home />} />  {/*Root path='/' */}
//                     <Route path='/about' element={<About />} />
//                 </Routes>

//             </BrowserRouter>
//         </div>
//     )
// }
// export default App;


// // ------------------------------ Call Get Method API ------------------------------------------------


// import React, { useState } from 'react';
// import { Table } from 'react-bootstrap';
// function App() {
//     const [data, setData] = useState([]);
//     // fetch("url")
//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
//             result.json().then((res) => {
//                 // console.log(res);
//                 setData(res);
//             })
//         })

//     }, [])
//     console.log(data);
//     return (
//         <div>
//             <h1>Get API Call</h1>
//             <Table border="1">
//                 <tr>
//                     <td>Id</td>
//                     <td>username</td>
//                     <td>Email</td>
//                     <td>phone</td>

//                 </tr>
//                 {
//                     data.map((item) =>
//                         <tr >
//                             <td>{item.id}</td>
//                             <td>{item.username}</td>
//                             <td>{item.email}</td>
//                             <td>{item.phone}</td>

//                         </tr>
//                     )
//                 }
//             </Table>
//         </div>
//     )
// }

// export default App;


// // ---------------------- Post Method with API -------------------------------


// import React, { useState } from 'react';
// import { Table } from 'react-bootstrap';
// function App() {

//     // ---- define state -----
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [phone, setPhone] = useState("");

//     function saveUser() {
//         console.log(username, email, phone);
//         let data = { username, email, phone }

//         // ------ data send api -----
//         fetch("https://jsonplaceholder.typicode.com/users", {
//             method: "POST",
//             headers: {
//                 "Accept": "application/json",
//                 "Content-Type": "application/json"  // find output
//             },
//             body: JSON.stringify(data)
//         }).then((result) => {
//             console.log(result);
//             result.json().then((res) => {
//                 console.log("resp", res);
//             })
//         })
//     }

//     return (
//         <div>
//             <h1>Post Method with API</h1>
//             <input type='text' name='username' value={username} onChange={(e) => { setUsername(e.target.value) }} /><br /><br />
//             <input type='text' name='email' value={email} onChange={(e) => { setEmail(e.target.value) }} /><br /><br />
//             <input type='text' name='phone' value={phone} onChange={(e) => { setPhone(e.target.value) }} /><br /><br />
//             <button type='button' onClick={saveUser}>Save new User</button>

//         </div>
//     )
// }

// export default App;


// // ---------------------- Delete Method with API -------------------------------


// import React, { useState } from 'react';
// import { Table } from 'react-bootstrap';
// function App() {
//     const [data, setData] = useState([]);
//     // fetch("url")
//     useEffect(() => {
//         getList()


//     }, [])

//     console.log(data);
//     function getList() {
//         fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
//             result.json().then((res) => {
//                 // console.log(res);
//                 setData(res);
//             })
//         })
//     }
//     function deleteUser(id) {
//         // alert(id)
//         fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
//             method: "DELETE"
//         }).then((result) => {
//             result.json().then((res) => {
//                 console.log("responce", res);
//                 getList()
//             })
//         })
//     }
//     return (
//         <div>
//             <h1>Delete Method with API</h1>
//             <Table border="1">
//                 <tr>
//                     <td>Id</td>
//                     <td>username</td>
//                     <td>Email</td>
//                     <td>phone</td>

//                 </tr>
//                 {
//                     data.map((item) =>
//                         <tr >
//                             <td>{item.id}</td>
//                             <td>{item.username}</td>
//                             <td>{item.email}</td>
//                             <td>{item.phone}</td>
//                             <td><button onClick={() => deleteUser(item.id)}>Delete</button></td>

//                         </tr>
//                     )
//                 }
//             </Table>
//         </div>
//     )
// }

// export default App;



// // ---------------------- Pre-Filled Form -------------------------------


// import React, { useState } from 'react';
// import { Table } from 'react-bootstrap';
// function App() {
//     const [users, setUser] = useState([])
//     // -------- state define and load first data -------
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [phone, setPhone] = useState("");


//     // fetch("url")
//     useEffect(() => {
//         getList()


//     }, [])

//     console.log(users);
//     function getList() {
//         // ---- call Api --------
//         fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
//             result.json().then((res) => {
//                 // console.log(res);
//                 // -- set first data ----
//                 setUser(res);
//                 setName(res[0].name);
//                 setEmail(res[0].email);
//                 setPhone(res[0].phone);

//             })
//         })
//     }
//     function deleteUser(id) {
//         // alert(id)
//         fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
//             method: "DELETE"
//         }).then((result) => {
//             result.json().then((res) => {
//                 console.log("responce", res);
//                 getList()
//             })
//         })
//     }
//     // --------- Select Date -------
//     function selectUser(id) {
//         // alert(users[id - 1]);
//         console.log(users[id - 1]);
//         let items = users[id - 1];
//         setName(items.name);
//         setEmail(items.email);
//         setPhone(items.phone);

//     }
//     return (
//         <div>
//             <h1>Delete Method with API</h1>
//             <Table border="1">
//                 <tr>
//                     <td>Id</td>
//                     <td>username</td>
//                     <td>Email</td>
//                     <td>phone</td>

//                 </tr>
//                 {
//                     users.map((item) =>
//                         <tr >
//                             <td>{item.id}</td>
//                             <td>{item.name}</td>
//                             <td>{item.email}</td>
//                             <td>{item.phone}</td>
//                             <td><button onClick={() => deleteUser(item.id)}>Delete</button></td>
//                             <td><button onClick={() => selectUser(item.id)}>Update</button></td>

//                         </tr>
//                     )
//                 }
//             </Table>
//             <div>
//                 <input type='text' value={name} /><br /><br />
//                 <input type='text' value={email} /><br /><br />
//                 <input type='text' value={phone} /><br /><br />
//                 <button>Update User</button>
//             </div>

//         </div>
//     )
// }

// export default App;


// // ---------------------- Update Data with PUT Method -------------------------------


// import React, { useState } from 'react';
// import { Table } from 'react-bootstrap';
// function App() {
//     const [users, setUser] = useState([])
//     // -------- state define and load first data -------
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [phone, setPhone] = useState("");
//     const [userId, setUserId] = useState(null)


//     // fetch("url")
//     useEffect(() => {
//         getList()


//     }, [])

//     console.log(users);
//     function getList() {
//         // ---- call Api --------
//         fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
//             result.json().then((res) => {
//                 // console.log(res);
//                 // -- set first data ----
//                 setUser(res);
//                 setName(res[0].name);
//                 setEmail(res[0].email);
//                 setPhone(res[0].phone);
//                 setUserId(res[0].id);


//             })
//         })
//     }
//     function deleteUser(id) {
//         // alert(id)
//         fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
//             method: "DELETE"
//         }).then((result) => {
//             result.json().then((res) => {
//                 console.log("responce", res);
//                 getList()
//             })
//         })
//     }
//     // --------- Select Date -------
//     function selectUser(id) {
//         // alert(users[id - 1]);
//         console.log(users[id - 1]);
//         let items = users[id - 1];
//         setName(items.name);
//         setEmail(items.email);
//         setPhone(items.phone);
//         setUserId(items.id);

//     }

//     // ---------- update data --------
//     function updateUser() {
//         // console.log(name, email, phone, userId);
//         let items = { name, email, phone, userId }
//         fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
//             method: "PUT",
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(items)
//         }).then((result) => {
//             result.json().then((res) => {
//                 console.log("responce", res);
//                 getList()
//             })
//         })
//     }
//     return (
//         <div>
//             <h1>Update Data with PUT Method</h1>
//             <Table border="1">
//                 <tr>
//                     <td>Id</td>
//                     <td>username</td>
//                     <td>Email</td>
//                     <td>phone</td>

//                 </tr>
//                 {
//                     users.map((item) =>
//                         <tr >
//                             <td>{item.id}</td>
//                             <td>{item.name}</td>
//                             <td>{item.email}</td>
//                             <td>{item.phone}</td>
//                             <td><button onClick={() => deleteUser(item.id)}>Delete</button></td>
//                             <td><button onClick={() => selectUser(item.id)}>Update</button></td>

//                         </tr>
//                     )
//                 }
//             </Table>
//             <div>
//                 <input type='text' value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
//                 <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
//                 <input type='text' value={phone} onChange={(e) => setPhone(e.target.value)} /><br /><br />
//                 <button onClick={updateUser}>Update User</button>
//             </div>

//         </div>
//     )
// }

// export default App;

// // ---------------------- Privious state in functional Component -------------------------------


// import React, { useState } from 'react'
// function App() {
//     const [count, setCount] = useState(0)
//     function updateCounter() {
//         // let item = Math.floor(Math.random() * 10)
//         // setCount((pre) => {
//         //     if (pre < 3) {
//         //         alert("last value is very low")
//         //     }
//         //     return item
//         // })
//         for (let i = 0; i < 5; i++) {
//             setCount((pre) => pre + 1)
//         }
//     }
//     return (
//         <div className="App">
//             <h1>{count}</h1>
//             <button onClick={updateCounter}>Click Me to Update counter</button>
//         </div>
//     );
// }
// export default App;


// // ---------------------- Privious Props with Hooks -------------------------------


// import React from 'react'
// import PriviousPropsHooks from './PriviousPropsHooks';
// function App() {
//     const [count, setCount] = React.useState(0)
//     return (
//         <div className="App">
//             <PriviousPropsHooks count={count} />
//             <button onClick={() => { setCount(Math.floor(Math.random() * 10)) }} >Update Counter</button>
//         </div>
//     );
// }



// export default App;

// ---------------------- State with Object -------------------------------


// import React from 'react'
// import PriviousPropsHooks from './PriviousPropsHooks';
// function App() {
//     const [data, setDate] = React.useState({
//         name: "bhavin", age: 23
//     })
//     return (
//         <div className="App">
//             <h1>State with Object</h1>
//             <input type='text' placeholder='Enter name' value={data.name} onChange={(e) => setDate({ name: e.target.value })} />
//             <input type='text' placeholder='Enter age' value={data.name} onChange={(e) => setDate({ age: e.target.value })} />
//             <h3>{data.name}</h3>
//             <h3>{data.age}</h3>
//         </div>
//     );
// }



// export default App;

// sole this problem
// import React from 'react'
// import PriviousPropsHooks from './PriviousPropsHooks';
// function App() {
//     const [data, setDate] = React.useState({
//         name: "bhavin", age: 23
//     })
//     return (
//         <div className="App">
//             <h1>State with Object</h1>
//             <input type='text' placeholder='Enter name' value={data.name}
//                 onChange={(e) => setDate({ ...data, name: e.target.value })} />
//             <input type='text' placeholder='Enter age' value={data.name}
//                 onChange={(e) => setDate({ ...data, age: e.target.value })} />
//             <h3>{data.name}</h3>
//             <h3>{data.age}</h3>
//         </div>
//     );
// }



// export default App;


// -------------------------------------- React Js Advanced -----------------------------------------------

// ----------- Context Api -------------------


// import './Style.css';
// import React from 'react';
// import { ContextApi } from './Advanced/Component/ContextApi';
// import ContextMain from './Advanced/Component/ContextMain';
// import UpdateButton from './Advanced/Component/ContextUpdateButton';
// import ContextHeader from './Advanced/Component/ContextHeader';
// import ContextFooter from './Advanced/Component/ContextFooter';
// class App extends React.Component {
//     constructor() {
//         super();
//         this.updateColor = (colors) => {
//             this.setState({
//                 color: colors
//             })
//         }
//         this.state = {
//             color: "green",
//             updateColor: this.updateColor
//         }

//     }
//     render() {

//         return (
//             <>

//                 <ContextApi.Provider value={this.state}>
//                     <ContextHeader />
//                     <h1>Context Api</h1>
//                     <ContextMain />
//                     <UpdateButton />
//                     <ContextFooter />
//                 </ContextApi.Provider>

//             </>
//         )
//     }
// }
// export default App;


// ----------- Redux Props -------------------

// import React from 'react';
// import ReduxUser from './Advanced/Redux/PropsUser';
// function App() {
//     return (
//         <div>
//             <h1>Redux Props</h1>
//             <ReduxUser data={{ name: "bhavin hadiyal", age: 23 }} />
//         </div>
//     )
// }

// export default App;

// ------------------ Design Add to cart -----------------
import './App.css';
import React from 'react';
import HomeContainer from './Advanced/Redux/Containers/HomeContainer';
import HeaderContainer from './Advanced/Redux/Containers/HeaderContainer';

function App() {
    return (
        <div>
            <h1>Design for add to cart</h1>
            <HeaderContainer />
            <HomeContainer />


        </div>
    )
}
export default App;


