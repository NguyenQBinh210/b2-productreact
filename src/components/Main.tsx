import LandingPage from "./LandingPage";

const Main = () => {
  //Fracment
  return (
    <>
      <section><LandingPage/></section>
      <section className="list-container"></section>
    </>
  );
};
{/* <section className={"section- " + Math.floor(Math.random() * 10)}>
  <h2>Section1</h2>
</section>
<section>
  <h2>Section2</h2>
</section>
<img src="\vite.svg" width={300} height={300} alt="vite" />
<section>
  <h2>Section2</h2>
  <p>Some {Math.floor(Math.random() * 5)}</p>
</section> */}
export default Main;
