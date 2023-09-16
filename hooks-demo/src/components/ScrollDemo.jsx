import React, { useRef } from "react";

export function ScrollDemo() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const productRef = useRef(null);

  const scrollSmoothly = (id) => {
    if (id === "about") {
      aboutRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    } else if (id === "contact") {
      contactRef.current.scrollIntoView({
        behavior: "smooth",
      });
    } else if (id === "product") {
      productRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <section>
        <h1>Head section</h1>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a onClick={() => scrollSmoothly("product")}>Products</a>
          </li>
          <li>
            <a onClick={() => scrollSmoothly("about")}>About</a>
          </li>
          <li>
            <a onClick={() => scrollSmoothly("contact")}>Contact us</a>
          </li>
        </ul>
      </section>
      <section id="home">
        <h1>Home</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum modi
          ipsa distinctio, necessitatibus dicta harum voluptatem magnam, facere
          labore exercitationem eveniet aperiam quod eos maxime quasi
          accusantium totam dolore doloremque neque veritatis. Quaerat nihil
          sunt rerum assumenda. Ipsam ut odio distinctio! Voluptatem iusto
          labore quidem id modi porro sed odio obcaecati quibusdam vel cumque
          iste dolorum eum, sapiente cum, consequatur maiores exercitationem rem
          aut neque cupiditate? Delectus, quasi? Assumenda temporibus modi sequi
          earum inventore explicabo accusamus, consectetur adipisci ab rerum
          harum dignissimos. Dolorum at aliquid reiciendis, incidunt dolor
          deserunt autem dolores commodi numquam molestias natus, labore
          debitis? Nihil, voluptatum adipisci.
        </p>
      </section>
      <section ref={productRef} id="product">
        <h1>Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum modi
          ipsa distinctio, necessitatibus dicta harum voluptatem magnam, facere
          labore exercitationem eveniet aperiam quod eos maxime quasi
          accusantium totam dolore doloremque neque veritatis. Quaerat nihil
          sunt rerum assumenda. Ipsam ut odio distinctio! Voluptatem iusto
          labore quidem id modi porro sed odio obcaecati quibusdam vel cumque
          iste dolorum eum, sapiente cum, consequatur maiores exercitationem rem
          aut neque cupiditate? Delectus, quasi? Assumenda temporibus modi sequi
          earum inventore explicabo accusamus, consectetur adipisci ab rerum
          harum dignissimos. Dolorum at aliquid reiciendis, incidunt dolor
          deserunt autem dolores commodi numquam molestias natus, labore
          debitis? Nihil, voluptatum adipisci.
        </p>
      </section>
      <section ref={aboutRef} id="about">
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum modi
          ipsa distinctio, necessitatibus dicta harum voluptatem magnam, facere
          labore exercitationem eveniet aperiam quod eos maxime quasi
          accusantium totam dolore doloremque neque veritatis. Quaerat nihil
          sunt rerum assumenda. Ipsam ut odio distinctio! Voluptatem iusto
          labore quidem id modi porro sed odio obcaecati quibusdam vel cumque
          iste dolorum eum, sapiente cum, consequatur maiores exercitationem rem
          aut neque cupiditate? Delectus, quasi? Assumenda temporibus modi sequi
          earum inventore explicabo accusamus, consectetur adipisci ab rerum
          harum dignissimos. Dolorum at aliquid reiciendis, incidunt dolor
          deserunt autem dolores commodi numquam molestias natus, labore
          debitis? Nihil, voluptatum adipisci.
        </p>
      </section>
      <section ref={contactRef} id="contact">
        <h1>Contact us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum modi
          ipsa distinctio, necessitatibus dicta harum voluptatem magnam, facere
          labore exercitationem eveniet aperiam quod eos maxime quasi
          accusantium totam dolore doloremque neque veritatis. Quaerat nihil
          sunt rerum assumenda. Ipsam ut odio distinctio! Voluptatem iusto
          labore quidem id modi porro sed odio obcaecati quibusdam vel cumque
          iste dolorum eum, sapiente cum, consequatur maiores exercitationem rem
          aut neque cupiditate? Delectus, quasi? Assumenda temporibus modi sequi
          earum inventore explicabo accusamus, consectetur adipisci ab rerum
          harum dignissimos. Dolorum at aliquid reiciendis, incidunt dolor
          deserunt autem dolores commodi numquam molestias natus, labore
          debitis? Nihil, voluptatum adipisci.
        </p>
      </section>
    </div>
  );
}
