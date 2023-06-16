import React from 'react';

const Modern = () => {

    const [data,setData] = useState([])

    useEffect(() => {
        // Perform the data fetch

        axios.get(`${MainApi}/allinstructor`).then((data) => {
            //   console.log(data.data);
            setData(data.data);
        });

    }, []);
    return (
        <div>
            
        </div>
    );
};

export default Modern;