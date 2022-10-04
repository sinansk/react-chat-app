import Add from "../assets/addAvatar.png";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat</span>
        <span className="title">Register</span>
        <form onSubmit>
          <input required type="text" placeholder="display name" />
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button disabled>Sign up</button>
          {"Uploading and compressing the image please wait..."}
          {<span>Something went wrong</span>}
        </form>
        <p>You do have an account?</p>
      </div>
    </div>
  );
};

export default Register;
