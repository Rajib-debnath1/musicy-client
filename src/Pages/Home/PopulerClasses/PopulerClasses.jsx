import {  useState } from "react";
import { MainApi } from "../../Shared/MainApi";
import { useQuery } from "react-query";

const PopulerClasses = () => {
    const [classes, setClasses] = useState(null);


    // console.log(classes, ' from classes');

    const {
        data:AllClass= [],
       
      } = useQuery({
        queryKey: ["AllClass"],
        queryFn: () =>
          fetch(
            `${MainApi}/addClasses`
          )
            .then((res) => res.json())
            .then((data) => setClasses(data)),
      });



return (
    <div>
        <h1 className="text-center text-3xl font-semibold py-6">Our Populer Classes</h1>
     <section className="grid  grid-cols-1 lg:grid-cols-2 gap-3">
     {classes && classes.map(data => (
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

export default PopulerClasses;