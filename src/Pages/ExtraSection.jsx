import { Link } from "react-router-dom";

const ExtraSection = () => {
    return (
        <div className="">
            <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src="https://img.freepik.com/free-vector/music-style-background_1394-628.jpg?w=740&t=st=1686920193~exp=1686920793~hmac=5e0cd5d8c9addce75a20a8898a4f1fae7be6f1940758d86d173afac56076841f" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">Best Musiq Learning</h2>
    <p>We are providing best Instructor and Music service to use </p>
    <div className="card-actions justify-end">
        <h3 className="text-2xl font-semibold">:::For Best Choice ::::</h3>
      <Link to="/signup" className="btn btn-primary">Sign UP</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ExtraSection;