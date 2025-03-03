import { Link, useLoaderData } from 'react-router'; // Fix: Correct import
import './App.css';
import CoffiCard from './Components/CoffiCard';
import { useState } from 'react';
import Navbar from './Navbar';

function App() {
  const coffis = useLoaderData();
  const [cof, setCof] = useState(coffis);



  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {
          cof.map((coffi) => (
            <CoffiCard
              key={coffi._id}
              coffi={coffi}
              cof={cof}
              setCof={setCof}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
