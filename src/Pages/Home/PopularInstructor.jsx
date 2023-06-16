import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { MainApi } from '../Shared/MainApi';
import { useEffect } from 'react';
import axios from 'axios';

const PopularInstructor = () => {

  const [users,setUsers] = useState([])

  useEffect(() => {
      // Perform the data fetch

      axios.get(`${MainApi}/allinstructor`).then((data) => {
          //   console.log(data.data);
          setUsers(data.data);
      });

  }, []);

      console.log(users);

    return (
        <div>
        <h1 className="text-center text-3xl font-semibold py-6">Our Populer Instructors</h1>
     <section className="grid  grid-cols-1 lg:grid-cols-2 gap-3">
     {users && users?.map(data => (
        <div key={data._id}>
          <div className="flex flex-col justify-center items-center">
        <img  src={data.img} className="w-[300px] h-[150px] mx-auto" alt="" />
        <h2>{data.name}</h2>

       

          </div>
        </div>
      ))}
     </section>
    </div>
    );
};

export default PopularInstructor;