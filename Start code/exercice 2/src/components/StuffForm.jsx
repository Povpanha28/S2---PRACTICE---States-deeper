export default function StuffForm({handleSubmit}) {

  return (
    <form className="stuff-form" onSubmit={handleSubmit}>
      <p>Stuff name</p>
      <input type="search" placeholder="Banana" />

      <p>Stuff price</p>
      <input type="search" placeholder="15" />

      <button onSubmit={handleSubmit}>Add Stuff</button>
    </form>
  );
}
