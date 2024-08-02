import Link from "next/link";

const Item1 = () => {
  return ( 
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-center my-8">Componete teste - item1</h1>
      <p className="text-lg text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur nisi sunt possimus labore rem tempore sequi. Ratione tempore et voluptate repellendus reprehenderit officia eligendi ex, facere corporis. Enim non, aliquam voluptates maxime, adipisci perferendis cumque ratione nesciunt excepturi molestias dolores nemo maiores officiis, ea cum? Eligendi laborum ratione architecto, nesciunt iste temporibus cupiditate molestiae rerum fugit provident repellat eius, vero illo ipsum animi voluptate! Velit quam, fugiat dolorem, aut eum tempore dolorum, cumque enim minima voluptatum ipsum? Unde quam harum, ullam accusantium quidem ipsum vitae voluptate inventore expedita rerum, ducimus, quas praesentium odio aut beatae ab exercitationem veniam ut doloribus.</p>
      <Link href="/" className="flex items-center w-20 h-7 mx-auto bg-foreground text-background px-2 py-1 rounded-xl hover:bg-muted-foreground mt-5"> - voltar - </Link>
    </div>
   );
}
 
export default Item1;