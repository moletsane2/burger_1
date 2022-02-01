
import logo from './logo.svg';
import './App.css';

export function Topbread(){
  const breadstyle ={
    backgroundColor: "goldenrod",
    width:"250px",
    margin:"0 auto",
    hight:"39px",
    textAlign:"center",
    bordertopright: "20px 50px",
    borderTopLeftRadius:"40px",
    borderTopRightRadius:"40px",
    marginBottom:"-17px",
    marginTop:"200px",
    color:"goldenrod",
    justifyContent:"center",
    alignItems:"center",


  };
  return<> 
  <div style={breadstyle}>
  <h2>topbread</h2>
  </div>
  </>
}

export function Tomato(){
  const tom ={
    backgroundColor: "red",
    width:"250px",
    margin:"0 auto",
    textAlign:"center",
    marginBottom:"-17px",
    font:"10px"
  };
  return<> 
   <div style={tom}>
  <h2>tomato</h2>
  </div>
  </>
}

export function Meat(){
  const b ={
    backgroundColor: "saddlebrown",
    width:"250px",
    margin:"0 auto",
    textAlign:"center",
    borderRadius:"20px",
    marginTop:"-17px"
    
  };
  return<> 
   <div style={b}>
  <h2>meat</h2>
  </div>
  </>
}

export function Lattuce(){
  const Lutt ={
    backgroundColor: "green",
    width:"250px",
    margin:"0 auto",
    textAlign:"center",
    marginTop:"-17px"
  };
  return<> 
   <div style={Lutt}>
  <h2>Lattuce</h2>
  </div>
  </>
}

export function Lattce(){
  const Lutt ={
    backgroundColor: "goldenrod",
    width:"250px",
    margin:"0 auto",
    textAlign:"center",
    marginTop:"-17px",
    color:"goldenrod",
    borderBottomLeftRadius:"10px",
    borderBottomRightRadius:"10px"
    
  };
  return<> 
   <div style={Lutt}>
  <h2>Lattuce</h2>
  </div>
  </>
}



 function App() {
  return (
    <><><Topbread />
    </><><Tomato />
      </><><Meat />
      </><><Lattuce />
      <><Lattce/></>
      </></>

  );
}

export default App;

