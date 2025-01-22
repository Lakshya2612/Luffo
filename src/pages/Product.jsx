import { Helmet } from "react-helmet-async";
export default function Product() {
  return (
    <div>
      <Helmet>
        <title>
          Our Products - Industrial Safety Shoes, Gloves, Helmets & More
        </title>
        <meta
          name="description"
          content="Browse our range of industrial safety products including safety shoes, helmets, gloves, gumboots, safety harnesses, and other protective gear."
        />
        <meta
          name="keywords"
          content="industrial safety shoes, safety gloves, helmets, gumboots, safety harnesses, safety helmets, reflective tape, industrial equipment"
        />
      </Helmet>
      <h1>Products</h1>
    </div>
  );
}
