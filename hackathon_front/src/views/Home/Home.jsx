import Header from "./../../components/Header/Header";
import AlgeriePostSvg from "./../../assets/AlgeriePoste.png";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Header />
      <div className="py-[2%] px-[3%]">
        <div className="grid mt-32 grid-cols-2">
          <div className="items-center flex justify-start ml-16">
            <span className="grid">
              <span className=" font-semibold text-5xl"> Algérie Poste</span>
              <span className="text-4xl">
                Votre partenaire de confiance <hr /> pour la livraison en
                Algérie. <hr />
              </span>
              <span className="my-16 font-semibold text-blue-400">
                Profiter d'une meilleure expérience avec nous.
              </span>
              <Link to={"/Home#history"} className=" items-start">
                <button className=" bg-yellow-400 px-16 p-2 rounded-3xl text-white ">
                  savoir plus{" "}
                </button>
              </Link>
            </span>
          </div>
          <div className="flex items-center m-5 bg-white shadow-xl h-80 px-16 p-2 rounded-[20px]  text-black  justify-center bg-white-400">
            <img
              className="w-full h-full object-contain"
              src={AlgeriePostSvg}
              alt="algerie post logo"
            />
          </div>
        </div>
        <div className="grid my-[10%] mx-[4%] grid-cols-2">
          <div className="grid gap-[5%]">
            <div className=" rounded-xl bg-white shadow-lg py-[2%] px-[5%] grid grid-cols-8">
              <span className=" col-span-1 flex items-center justify-center">
                <FaRegUser className="text-blue-500 h-full w-[50%]" />
              </span>
              <div className=" grid col-span-7">
                <span className="font-bold">
                  Utilisation de la carte{" "}
                  <span className=" font-semibold text-yellow-400 ">
                    EDHABIA
                  </span>{" "}
                </span>
                <span className="text-sm">encaissé à tout moment </span>
              </div>
            </div>
            <div className=" rounded-xl bg-white px-[5%] py-4 shadow-lg grid grid-cols-8">
              <span className=" col-span-1 flex items-center justify-center">
                <FaRegUser className="text-blue-500 h-full w-[50%]" />
              </span>
              <div className=" grid col-span-7">
                <span className="font-bold">
                  La plateform{" "}
                  <span className=" font-semibold text-yellow-400 ">
                    BARIDIMOB
                  </span>{" "}
                </span>
                <span className="text-sm">Virement Compte à Compte </span>
              </div>
            </div>

            <div className=" rounded-3xl rounded-tl-md rounded-br-md bg-yellow-400 px-[5%] py-4 shadow-lg grid grid-cols-8">
              <span className=" col-span-1 flex items-center justify-center">
                <FaRegUser className="text-blue-500 h-full w-[50%]" />
              </span>
              <div className=" grid col-span-7">
                <span className="font-bold">Service de livraison </span>
                <span className="text-sm"> à travers cette plateforme </span>
              </div>
            </div>

            <div className=" rounded-xl bg-white px-[5%] py-4 shadow-lg grid grid-cols-8">
              <span className="w-full h-full col-span-1 flex items-center justify-center">
                <FaRegUser className="text-blue-500 h-full w-[50%]" />
              </span>
              <div className=" grid col-span-7">
                <span className="font-bold">Services postaux </span>
                <span className="text-sm">
                  Vente de timbres et paiement de taxes{" "}
                </span>
              </div>
            </div>
          </div>

          <div className="items-center ml-10 flex justify-center">
            <div className=" ml-16">
              <span className="grid ">
                <span className=" font-semibold text-5xl">Nos services </span>
                <span className="text-4xl">
                  pour bénéficier de ces services l'ouverture d'un compte ccp
                  est obligatoire <hr />
                  <span className=" font-semibold">
                    {" "}
                    on offre plein d'autre service
                  </span>
                </span>

                <span className="my-16 font-semibold text-blue-400">
                  Qu'attendez-vous pour créer{" "}
                  <span className=" font-semibold text-yellow-400 ">
                    un compte CCP ?{" "}
                  </span>
                </span>
                <div className=" items-start">
                  <a
                    href="https://ccpnet.poste.dz/ouvCcp-instr"
                    target="_blank"
                  >
                    <button className=" bg-yellow-400 px-16 p-2 rounded-3xl  text-white ">
                      {" "}
                      créer un compte{" "}
                    </button>
                  </a>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        id="history"
        className="bg-blue-950  text-white py-[5%] px-[5%] grid grid-cols-2"
      >
        <div className=" items-center flex justify-center">
          <div className="grid">
            <span className=" font-bold text-5xl">Historique de la Poste</span>
            <br />
            <div className="text-xl ml-2 mt-5">
              DZ Poste remonte à une longue tradition historique de services
              postaux, présents depuis 255 av. J.-C. en Égypte.
              <br />
              <strong>L’Algérie</strong> a vu ses premiers services postaux
              modernisés après l'indépendance avec{" "}
              <strong>la création d'Algérie Poste en 2002</strong>, qui fusionne
              des missions publiques et industrielles. Le Traité de Berne de
              1874 a marqué un tournant en unifiant les services postaux
              mondiaux. <br />
              Aujourd'hui, Algérie Poste, sous la tutelle du Ministère de la
              Poste, des Télécommunications, des Technologies et du Numérique,
              continue d’évoluer et de s’adapter aux nouvelles technologies,
              assurant des services fiables et modernes pour la communication et
              les transactions financières.
            </div>
          </div>
        </div>
        <div className="items-center">
          <img
            className="ml-10 rounded-2xl border-2 h-96 "
            src="https://th.bing.com/th/id/R.277bdf22d8b52d4c15e85662f730890a?rik=M4W2Rgl4F9lpMg&pid=ImgRaw&r=0"
          />
        </div>
      </div>
      <div className="py-[5%] px-[3%]">
        <div className="py-20 px-32 bg-blue-100 items-center gap-6  rounded-[60px] justify-center grid">
          <div className="text-yellow-400 items-center mx-auto font-semibold text-3xl">
            Statistiques
          </div>
          <span className=" text-5xl items-center text-center font-semibold">
            Celles-ci peuvent vous intéresser !
          </span>
          <div className="grid grid-cols-4 gap-4">
            <div className="grid justify-center text-center items-center">
              <span className="text-3xl font-semibold ">4 106</span>
              <span className="text-2xl text-black ">bureaux de poste</span>
            </div>
            <div className="grid justify-center text-center items-center">
              <span className="text-3xl font-semibold">27.500</span>
              <span className="text-2xl text-black"> employés</span>
            </div>
            <div className="grid justify-center text-center items-center">
              <span className="text-3xl font-semibold">23 millions</span>
              <span className="text-2xl text-black">comptes</span>
            </div>
            <div className="grid justify-center text-center items-center">
              <span className="text-3xl font-semibold">32 millions/an</span>
              <span className="text-2xl text-black">opérations BARIDIMOB </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
