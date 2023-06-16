import React from 'react';

const NewPage = () => {
    const {mode} = useContext(AuthContext)

    
    useEffect(() => {
        // Perform the data fetch

        axios.get(`${MainApi}/allinstructor`).then((data) => {
            //   console.log(data.data);
            setData(data.data);
        });

    }, []);
    return (
        <div>
             <section className="grid grid-cols-1 lg:grid-cols-2 mt-10"> 
        {
            data && data?.map(user=>{
                return<div key={user?.name} className="card w-96 glass mx-auto">
                <figure><img src={user?.img} alt="car!"/></figure>
                <div className="card-body">
                  <h2 className="card-title">Name :{user?.name}</h2>
                  <h3>Email: {user?.email}</h3>
                  
                
                </div>
              </div>
            })
        }

        </section>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default NewPage;