function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(Object.fromEntries(formData));
  };

  return (
    <div>
      <h1>My Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <textarea id="address" name="address" />
        </div>
        <div>
          <h2 id="hobbies">Hobbies</h2>
          <div role="group" aria-labelledby="hobbies">
            <label htmlFor="painting">Painting</label>
            <input
              type="checkbox"
              id="painting"
              name="painting"
              value="painting"
              defaultChecked={true}
            />
            <label htmlFor="singing">Singing</label>
            <input
              type="checkbox"
              id="singing"
              name="singing"
              value="singing"
            />
            <label htmlFor="dancing">Dancing</label>
            <input
              type="checkbox"
              id="dancing"
              name="dancing"
              value="dancing"
            />
          </div>
        </div>
        <div>
          <label htmlFor="cars">Cars</label>
          <select name="cars" id="cars" defaultValue={"saab"}>
            <option value={"volvo"}>Volvo</option>
            <option value={"saab"}>Saab</option>
            <option value={"mercedes"}>Mercedes</option>
            <option value={"audi"}>Audi</option>
          </select>
        </div>
        <div>
          <h2 id="gender">Gender</h2>
          <div role="radiogroup" aria-labelledby="gender">
            <label htmlFor="male">Male</label>
            <input
              id="male"
              type="radio"
              name="gender"
              value={"male"}
              defaultChecked="true"
            />
            <label htmlFor="female">Female</label>
            <input id="female" type="radio" name="gender" value={"female"} />
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
