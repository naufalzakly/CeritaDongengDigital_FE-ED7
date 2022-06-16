import db from '../../../Firebase'
import {collection, onSnapshot} from "firebase/firestore"
import {useEffect,useState} from "react"

function ReadDataCerita(){
    const [User , setUser] = useState([]);
    console.log(User);
    useEffect(
      () =>
        onSnapshot(collection(db,"kancil_buaya"), (snapshot) =>
          setUser(snapshot.docs.map((doc) => ({...doc.data(), id:doc.id})))
        ),
      []
    );

    
    return(
        <div>
            {User.map((user) => (
                <div key={user.index} >
                    {user.id === 1 &&
                      <img src = {user.judul} alt =""/>
                    }
                    
                </div>

            ))}


        </div>
    )
}
export default ReadDataCerita;