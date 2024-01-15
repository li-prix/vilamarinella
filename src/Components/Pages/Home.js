import Hero from "../Header/Hero";
import frente from "../../Assets/Images/Home/frente.jpg";
import terraco from "../../Assets/Images/Home/terraco.jpg";
import cozinha from "../../Assets/Images/Home/cozinha.jpg";
import churrasqueira from "../../Assets/Images/Home/churrasqueira.jpg";
import varanda from "../../Assets/Images/Home/varanda.jpg";
import jeri from "../../Assets/Images/Home/jeri.jpg";

const Home = () => {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div className="text-center text-sky-900 py-10 px-1">
        <div className="text-center font-semibold text-4xl">
          Viva seus melhores dias na Vila
        </div>
        <div className="mt-4 font-medium">
          Na Vila Marinella você vive seus melhores dias em Jericoacoara com a
          sua família, amigos ou ao lado da pessoa que você ama.
        </div>
      </div>
      <div className="flex sm:flex-col md:flex-row bg-sky-700 md:p-8">
        <div className="flex flex-col justify-center md:pe-8">
          <div className="grid md:grid-cols-3">
            <img src={frente} />
            <img src={terraco} />
            <img src={cozinha} />
          </div>
          <div className="grid md:grid-cols-2">
            <img src={churrasqueira} />
            <img src={varanda} />
          </div>
        </div>
        <div className="flex items-center text-center py-2 md:ps-8 mt-4 lg:mt-0 leading-snug text-white">
          A vila é composta de: 🏠 Casa com 120m² para até 6 pessoas, com três
          quartos, sendo uma uma suíte com uma cama de casal grande e outros
          dois quartos com camas de solteiro. A casa conta com ar-condicionado
          em todos os quartos, cozinha e sala completas, churrasqueira e um
          terraço com vista para a vila de Jericoacoara. 🛌 3 suítes privativas
          com varanda, cama de casal grande, banheiro privativo, TV,
          ar-condicionado e frigobar.
        </div>
      </div>
      <div className="text-center text-sky-900 py-10 px-1">
        <div className="text-center font-semibold text-4xl">
          A Vila de Jericoacoara
        </div>
        <div className="mt-4 font-medium">
          Jericoacoara é uma pequena vila de pescadores, centro do windsurf e
          kitesurf, no Ceará, Brasil.
        </div>
      </div>
      <div className="">
        <img src={jeri} className="h-[80vh] w-full object-cover" />
      </div>
    </div>
  );
};

export default Home;
