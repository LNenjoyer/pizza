import campione from './campione.webp'
import capriciosa from './capriciosa.webp'
import decoro from './decoro.webp';
import margherita from './margherita.webp';
import parma from './parma.webp'
import './App.css';
import Pizza from "./pizza";

const pizza = [
    {name: 'Campione', photo: campione, size:42, desc:"Campione"},
    {name: 'Capriciosa', photo: capriciosa, size:42, desc:"Capriciosa"},
    {name: 'Decoro', photo: decoro, size:42, desc:"Decoro"},
    {name: 'Margherita', photo: margherita, size:42, desc:"Margherita"},
    {name: 'Parma', photo: parma, size:42, desc:"Parma"}
]
const App = () =>(
    <div className="App">
        <div className="tlo">
            <Pizza name={pizza[0].name} photo={pizza[0].photo} size={pizza[0].size} desc={pizza[0].desc}/>
            <Pizza name={pizza[1].name} photo={pizza[1].photo} size={pizza[1].size} desc={pizza[1].desc}/>
            <Pizza name={pizza[2].name} photo={pizza[2].photo} size={pizza[2].size} desc={pizza[2].desc}/>
            <Pizza name={pizza[3].name} photo={pizza[3].photo} size={pizza[3].size} desc={pizza[3].desc}/>
            <Pizza name={pizza[4].name} photo={pizza[4].photo} size={pizza[4].size} desc={pizza[4].desc}/>
        </div>
    </div>
)


export default App;
