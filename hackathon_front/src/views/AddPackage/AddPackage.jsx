import React, { useEffect, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Link, Navigate } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import axiosClient from "../../axios-client";

function AddPackage() {
  const nameRef = useRef();
  const firstnameRef = useRef();
  const phone1Ref = useRef();
  const phone2Ref = useRef();
  const addressRef = useRef();
  const wilayaRef = useRef();
  const communeRef = useRef();
  const postCodeRef = useRef();
  const [items, setItems] = useState([]);
  const [success, setSuccess] = useState(false);

  const addItem = () => {
    const newItem = {
      name: "",
      price: 0,
      description: "",
    };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const removeItem = (index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const handleItemChange = (index, field, value) => {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      )
    );
  };

  const calculateTotalPrice = () => {
    return items.reduce(
      (total, item) => total + (parseFloat(item.price) || 0),
      0
    );
  };

  const changePage = () =>{
    if(success){
        <Navigate to="/dashboard" />
    }
  }

  useEffect(() => {
    changePage
  }, [success]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: nameRef.current?.value || "",
      firstname: firstnameRef.current?.value || "",
      phone1: phone1Ref.current?.value || "",
      phone2: phone2Ref.current?.value || "",
      address: addressRef.current?.value || "",
      wilaya: wilayaRef.current?.value || "",
      commune: communeRef.current?.value || "",
      postCode: postCodeRef.current?.value || "",
      items: items,
    };

    try {
      const response = axiosClient.post('/packages' , data) ;
      if(response.ok){
        setSuccess(!success)
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi des données :", error);
    }
  };

  return (
    <div className="flex mx-auto items-center w-[80%] md:inset-0 h-modal md:h-full">
      <div className="p-4 w-full h-full md:h-auto">
        <div className="p-4 bg-white rounded-lg shadow sm:p-5">
          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5">
            <h3 className="text-lg font-semibold text-yellow-400">
              Add Product
            </h3>
            <Link to={"/Dashboard"}>
              <button className="text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg text-sm p-1.5">
                <RxCross2 />
              </button>
            </Link>
          </div>
          <div>
            <div className="grid gap-4 mb-4 border-b-2 pb-10 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium"
                >
                  Nom
                </label>
                <input
                  ref={nameRef}
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5"
                  placeholder="Nom du destinataire"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="firstname"
                  className="block mb-2 text-sm font-medium"
                >
                  Prénom
                </label>
                <input
                  ref={firstnameRef}
                  type="text"
                  id="firstname"
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5"
                  placeholder="Prénom du destinataire"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label
                    htmlFor="phone1"
                    className="block mb-2 text-sm font-medium"
                  >
                    N° mobile 1
                  </label>
                  <input
                    ref={phone1Ref}
                    type="number"
                    id="phone1"
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5"
                    placeholder="Téléphone 1"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone2"
                    className="block mb-2 text-sm font-medium"
                  >
                    N° mobile 2
                  </label>
                  <input
                    ref={phone2Ref}
                    type="number"
                    id="phone2"
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5"
                    placeholder="Téléphone 2"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm font-medium"
                >
                  Adresse
                </label>
                <input
                  ref={addressRef}
                  type="text"
                  id="address"
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5"
                  placeholder="Adresse"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label
                    htmlFor="wilaya"
                    className="block mb-2 text-sm font-medium"
                  >
                    Wilaya
                  </label>
                  <select
                    ref={wilayaRef}
                    id="wilaya"
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5"
                  >
                    <option value="">Select Wilaya</option>
                    <option value="Alger">Alger</option>
                    <option value="Tizi Ouzou">Tizi Ouzou</option>
                    <option value="Boumerdes">Boumerdes</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="commune"
                    className="block mb-2 text-sm font-medium"
                  >
                    Commune
                  </label>
                  <select
                    ref={communeRef}
                    id="commune"
                    className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5"
                  >
                    <option value="">Select Commune</option>
                    <option value="Dar El Beida">Dar El Beida</option>
                    <option value="Bab Ezzouar">Bab Ezzouar</option>
                  </select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="postCode"
                  className="block mb-2 text-sm font-medium"
                >
                  Code postal
                </label>
                <select
                  ref={postCodeRef}
                  id="postCode"
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5"
                >
                  <option value="">Select Code Postal</option>
                  <option value="16000">16000</option>
                  <option value="16001">16001</option>
                </select>
              </div>

              {/* Gestion des produits */}
              <div className="mt-2 border rounded-md max-h-96 p-4 overflow-auto bg-gray-50">
                <div>
                  <div className="grid grid-cols-6 border-t border-r border-l py-2 px-2 gap-1 bg-white rounded-t-lg">
                    <div className="col-span-2">Nom</div>
                    <div className="col-span-1">Prix</div>
                    <div className="col-span-3">Description</div>
                  </div>

                  {items.map((item, index) => (
                    <div
                      key={index}
                      className="relative grid grid-cols-6 border-t py-2 border-l border-r px-2 gap-1 bg-white"
                    >
                      <input
                        type="text"
                        className="col-span-2 px-2 py-1 border rounded"
                        value={item.name}
                        placeholder="Nom du produit"
                        onChange={(e) =>
                          handleItemChange(index, "name", e.target.value)
                        }
                      />
                      <input
                        type="number"
                        className="col-span-1 px-2 py-1 border rounded"
                        value={item.price}
                        placeholder="Prix (DA)"
                        onChange={(e) =>
                          handleItemChange(index, "price", e.target.value)
                        }
                      />
                      <textarea
                        className="col-span-3 px-2 py-1 border rounded"
                        value={item.description}
                        placeholder="Description"
                        onChange={(e) =>
                          handleItemChange(index, "description", e.target.value)
                        }
                      />
                      <button
                        className="absolute top-0 right-0 bg-red-500 text-white rounded-full cursor-pointer hover:bg-red-600"
                        onClick={() => removeItem(index)}
                      >
                        <RxCross2 />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-right font-semibold text-lg">
                  Total : {calculateTotalPrice()} DA
                </div>
                <button
                  onClick={addItem}
                  className="flex items-center justify-center gap-2 mt-3 w-full px-2 py-1 text-white bg-green-500 hover:bg-green-600 rounded-md"
                >
                  <IoMdAdd /> Ajouter un produit
                </button>
              </div>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full text-white bg-blue-600 rounded-lg px-5 py-2 hover:bg-blue-700"
          >
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddPackage;
