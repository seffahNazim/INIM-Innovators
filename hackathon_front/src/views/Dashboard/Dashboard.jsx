import React from "react";
import { RxCross2 } from "react-icons/rx";
import { LuPackagePlus } from "react-icons/lu";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className=" w-full">
      <div className="rounded bg-[#f3f3f7] grid-cols-8 grid shadow-lg ring-1 pt-4 px-8 mx-2 my-6 ring-gray-200">
        <div className=" col-span-6">
          <div className="flex  items-center">
            <div className="mr-4 ">
              <svg
                className="size-16"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.61,3.093c2.078-.019,4.159,0,6.238-.008-.493,2.123-.966,4.252-1.457,6.376q-4.745,0-9.491,0c-.3,0-.6.01-.9-.012C3.864,7.325,5.749,5.219,7.61,3.093Z"
                  fill="#f2e6c9"
                />
                <path
                  d="M18.163,3.086q3.109,0,6.22,0C26.251,5.212,28.137,7.32,30,9.449c-1.2.025-2.4,0-3.6.011q-3.4,0-6.795,0C19.133,7.333,18.629,5.214,18.163,3.086Z"
                  fill="#f2e6c9"
                />
                <path
                  d="M13.848,3.086q2.158,0,4.315,0c.466,2.128.969,4.247,1.444,6.373-2.405,0-4.811,0-7.216,0C12.882,7.337,13.355,5.209,13.848,3.086Z"
                  fill="#efc75e"
                />
                <path
                  d="M2,9.448c.3.022.6.011.9.012q4.745,0,9.491,0c0,2.245,0,4.49.007,6.735a2.44,2.44,0,0,0,.256.018q3.372,0,6.743,0c.067,0,.134-.007.2-.014.019-2.247,0-4.494.009-6.741q3.4,0,6.795,0c1.2-.006,2.4.014,3.6-.011q0,9.732,0,19.466-14,0-28,0Q2,19.181,2,9.448Z"
                  fill="#e7bf55"
                />
                <path
                  d="M12.391,9.462c2.405,0,4.811,0,7.216,0-.008,2.247.011,4.494-.009,6.741-.067.007-.134.012-.2.014q-3.372,0-6.743,0A2.44,2.44,0,0,1,12.4,16.2C12.386,13.952,12.4,11.706,12.391,9.462Z"
                  fill="#dbb551"
                />
                <rect
                  x="4.044"
                  y="22.581"
                  width="9.37"
                  height="3.608"
                  fill="#f2f2f2"
                />
              </svg>
            </div>
            <div className="grid ">
              <span className=" text-2xl  font-semibold">
                Gestion des Colis{" "}
              </span>
            </div>
          </div>
        </div>
        <div className=" col-span-2"></div>
      </div>

      <div className="rounded shadow-xl ring-1 py-4 px-8 mx-2 my-6 bg-[#f3f3f7]  ring-gray-200">
        <div className="grid grid-cols-2 items-center">
          <div className="relative max-w-72">
            <input
              id="username"
              type="text"
              placeholder="Search Files & Folders"
              className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 focus:outline-none focus:ring-1"
            />
            <div className="absolute right-0 inset-y-0 flex items-center">
              <RxCross2 />
            </div>
          </div>
          <div className=" justify-end flex gap-2">
            <Link to={"/AddPackage"}>
              <button className="py-1 flex items-center gap-1 px-4 border bg-yellow-400 text-white rounded-lg hover:opacity-80 font-[450]">
                <LuPackagePlus />
                New Package
              </button>
            </Link>
          </div>
        </div>

        <div className="grid my-6 items-center ">
          <div className="flex justify-end">
            <span className="text-sm text-white bg-yellow-400 px-2 rounded">
              
            </span>
          </div>
        </div>
        <div className="mt-2 mb-6 grid">
          <div className="grid grid-cols-6 text-blue-600 font-[550] border-b pb-1 px-2">
            <div className="flex items-center justify-start gap-1">
              <input type="checkbox" className=" text-gray-200" />
              <span className="">Tracking</span>
            </div>
            <span>Statut</span>
            <span>Client</span>
            <span>Wilaya</span>
            <span>Bureau Post</span>
            <span>Date</span>
          </div>
          <div className="max-h-[50rem] overflow-y-auto ">
            <div className="items-center grid grid-cols-6 py-2 border-b pb-1 px-2">
              <div className="flex items-center justify-start gap-2">
                <input type="checkbox" className=" bg-gray-400" />
                <span className="flex hover:text-yellow-400 cursor-pointer items-center gap-1">
                  <svg
                    className="size-6 text-yellow-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.72848 16.1369C3.18295 14.5914 2.41018 13.8186 2.12264 12.816C1.83509 11.8134 2.08083 10.7485 2.57231 8.61875L2.85574 7.39057C3.26922 5.59881 3.47597 4.70292 4.08944 4.08944C4.70292 3.47597 5.59881 3.26922 7.39057 2.85574L8.61875 2.57231C10.7485 2.08083 11.8134 1.83509 12.816 2.12264C13.8186 2.41018 14.5914 3.18295 16.1369 4.72848L17.9665 6.55812C20.6555 9.24711 22 10.5916 22 12.2623C22 13.933 20.6555 15.2775 17.9665 17.9665C15.2775 20.6555 13.933 22 12.2623 22C10.5916 22 9.24711 20.6555 6.55812 17.9665L4.72848 16.1369Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <circle
                      cx="8.60724"
                      cy="8.87891"
                      r="2"
                      transform="rotate(-45 8.60724 8.87891)"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <path
                      d="M11.5417 18.5L18.5208 11.5208"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  <span className="border-2 px-2 rounded-md">PL-3502H</span>
                </span>
              </div>
              <span>
                <span className="border-2 px-2 rounded-md bg-blue-400 text-white py-1">
                  En préparation{" "}
                </span>
              </span>
              <span className="grid">
                <span>Mehdi aoune</span>
                <span className="text-sm">0559944192</span>
              </span>
              <span>35-Boumrdes</span>
              <span>35052-ouled hadadj</span>
              <span className="grid grid-cols-2">
                <span className="grid">
                  <span>2024-11-29</span>
                  <span className="text-sm">17:31</span>
                </span>
                <span className="items-center flex justify-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="rounded-full bg-gray-200 cursor-pointer size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                    />
                  </svg>
                </span>
              </span>
            </div>
            <div className="items-center grid grid-cols-6 py-2 border-b pb-1 px-2">
              <div className="flex items-center justify-start gap-2">
                <input type="checkbox" className=" bg-gray-400" />
                <span className="flex hover:text-yellow-400 cursor-pointer items-center gap-1">
                  <svg
                    className="size-6 text-yellow-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.72848 16.1369C3.18295 14.5914 2.41018 13.8186 2.12264 12.816C1.83509 11.8134 2.08083 10.7485 2.57231 8.61875L2.85574 7.39057C3.26922 5.59881 3.47597 4.70292 4.08944 4.08944C4.70292 3.47597 5.59881 3.26922 7.39057 2.85574L8.61875 2.57231C10.7485 2.08083 11.8134 1.83509 12.816 2.12264C13.8186 2.41018 14.5914 3.18295 16.1369 4.72848L17.9665 6.55812C20.6555 9.24711 22 10.5916 22 12.2623C22 13.933 20.6555 15.2775 17.9665 17.9665C15.2775 20.6555 13.933 22 12.2623 22C10.5916 22 9.24711 20.6555 6.55812 17.9665L4.72848 16.1369Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <circle
                      cx="8.60724"
                      cy="8.87891"
                      r="2"
                      transform="rotate(-45 8.60724 8.87891)"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <path
                      d="M11.5417 18.5L18.5208 11.5208"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  <span className="border-2 px-2 rounded-md">PL-3502H</span>
                </span>
              </div>
              <span>
                <span className="border-2 border-green-300 px-2 rounded-md bg-green-400 text-white py-1">
                  Livre{" "}
                </span>
              </span>
              <span className="grid">
                <span>Mehdi aoune</span>
                <span className="text-sm">0559944192</span>
              </span>
              <span>35-Boumrdes</span>
              <span>35052-ouled hadadj</span>
              <span className="grid grid-cols-2">
                <span className="grid">
                  <span>2024-11-29</span>
                  <span className="text-sm">17:31</span>
                </span>
                <span className="items-center flex justify-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="rounded-full bg-gray-200 cursor-pointer size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                    />
                  </svg>
                </span>
              </span>
            </div>
            <div className="items-center grid grid-cols-6 py-2 border-b pb-1 px-2">
              <div className="flex items-center justify-start gap-2">
                <input type="checkbox" className=" bg-gray-400" />
                <span className="flex hover:text-yellow-400 cursor-pointer items-center gap-1">
                  <svg
                    className="size-6 text-yellow-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.72848 16.1369C3.18295 14.5914 2.41018 13.8186 2.12264 12.816C1.83509 11.8134 2.08083 10.7485 2.57231 8.61875L2.85574 7.39057C3.26922 5.59881 3.47597 4.70292 4.08944 4.08944C4.70292 3.47597 5.59881 3.26922 7.39057 2.85574L8.61875 2.57231C10.7485 2.08083 11.8134 1.83509 12.816 2.12264C13.8186 2.41018 14.5914 3.18295 16.1369 4.72848L17.9665 6.55812C20.6555 9.24711 22 10.5916 22 12.2623C22 13.933 20.6555 15.2775 17.9665 17.9665C15.2775 20.6555 13.933 22 12.2623 22C10.5916 22 9.24711 20.6555 6.55812 17.9665L4.72848 16.1369Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <circle
                      cx="8.60724"
                      cy="8.87891"
                      r="2"
                      transform="rotate(-45 8.60724 8.87891)"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <path
                      d="M11.5417 18.5L18.5208 11.5208"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  <span className="border-2 px-2 rounded-md">PL-3502H</span>
                </span>
              </div>
              <span>
                <span className="border-2 px-2 rounded-md bg-blue-400 text-white py-1">
                  En préparation{" "}
                </span>
              </span>
              <span className="grid">
                <span>Mehdi aoune</span>
                <span className="text-sm">0559944192</span>
              </span>
              <span>35-Boumrdes</span>
              <span>35052-ouled hadadj</span>
              <span className="grid grid-cols-2">
                <span className="grid">
                  <span>2024-11-29</span>
                  <span className="text-sm">17:31</span>
                </span>
                <span className="items-center flex justify-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="rounded-full bg-gray-200 cursor-pointer size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                    />
                  </svg>
                </span>
              </span>
            </div>
            <div className="items-center grid grid-cols-6 py-2 border-b pb-1 px-2">
              <div className="flex items-center justify-start gap-2">
                <input type="checkbox" className=" bg-gray-400" />
                <span className="flex hover:text-yellow-400 cursor-pointer items-center gap-1">
                  <svg
                    className="size-6 text-yellow-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.72848 16.1369C3.18295 14.5914 2.41018 13.8186 2.12264 12.816C1.83509 11.8134 2.08083 10.7485 2.57231 8.61875L2.85574 7.39057C3.26922 5.59881 3.47597 4.70292 4.08944 4.08944C4.70292 3.47597 5.59881 3.26922 7.39057 2.85574L8.61875 2.57231C10.7485 2.08083 11.8134 1.83509 12.816 2.12264C13.8186 2.41018 14.5914 3.18295 16.1369 4.72848L17.9665 6.55812C20.6555 9.24711 22 10.5916 22 12.2623C22 13.933 20.6555 15.2775 17.9665 17.9665C15.2775 20.6555 13.933 22 12.2623 22C10.5916 22 9.24711 20.6555 6.55812 17.9665L4.72848 16.1369Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <circle
                      cx="8.60724"
                      cy="8.87891"
                      r="2"
                      transform="rotate(-45 8.60724 8.87891)"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <path
                      d="M11.5417 18.5L18.5208 11.5208"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  <span className="border-2 px-2 rounded-md">PL-3502H</span>
                </span>
              </div>
              <span>
                <span className="border-2 px-2 rounded-md bg-blue-400 text-white py-1">
                  En préparation{" "}
                </span>
              </span>
              <span className="grid">
                <span>Mehdi aoune</span>
                <span className="text-sm">0559944192</span>
              </span>
              <span>35-Boumrdes</span>
              <span>35052-ouled hadadj</span>
              <span className="grid grid-cols-2">
                <span className="grid">
                  <span>2024-11-29</span>
                  <span className="text-sm">17:31</span>
                </span>
                <span className="items-center flex justify-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="rounded-full bg-gray-200 cursor-pointer size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                    />
                  </svg>
                </span>
              </span>
            </div>
            <div className="items-center grid grid-cols-6 py-2 border-b pb-1 px-2">
              <div className="flex items-center justify-start gap-2">
                <input type="checkbox" className=" bg-gray-400" />
                <span className="flex hover:text-yellow-400 cursor-pointer items-center gap-1">
                  <svg
                    className="size-6 text-yellow-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.72848 16.1369C3.18295 14.5914 2.41018 13.8186 2.12264 12.816C1.83509 11.8134 2.08083 10.7485 2.57231 8.61875L2.85574 7.39057C3.26922 5.59881 3.47597 4.70292 4.08944 4.08944C4.70292 3.47597 5.59881 3.26922 7.39057 2.85574L8.61875 2.57231C10.7485 2.08083 11.8134 1.83509 12.816 2.12264C13.8186 2.41018 14.5914 3.18295 16.1369 4.72848L17.9665 6.55812C20.6555 9.24711 22 10.5916 22 12.2623C22 13.933 20.6555 15.2775 17.9665 17.9665C15.2775 20.6555 13.933 22 12.2623 22C10.5916 22 9.24711 20.6555 6.55812 17.9665L4.72848 16.1369Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <circle
                      cx="8.60724"
                      cy="8.87891"
                      r="2"
                      transform="rotate(-45 8.60724 8.87891)"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <path
                      d="M11.5417 18.5L18.5208 11.5208"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  <span className="border-2 px-2 rounded-md">PL-3502H</span>
                </span>
              </div>
              <span>
                <span className="border-2 px-2 rounded-md bg-red-400 text-white py-1">
                  Echec{" "}
                </span>
              </span>
              <span className="grid">
                <span>Mehdi aoune</span>
                <span className="text-sm">0559944192</span>
              </span>
              <span>35-Boumrdes</span>
              <span>35052-ouled hadadj</span>
              <span className="grid grid-cols-2">
                <span className="grid">
                  <span>2024-11-29</span>
                  <span className="text-sm">17:31</span>
                </span>
                <span className="items-center flex justify-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="rounded-full bg-gray-200 cursor-pointer size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                    />
                  </svg>
                </span>
              </span>
            </div>
            <div className="items-center grid grid-cols-6 py-2 border-b pb-1 px-2">
              <div className="flex items-center justify-start gap-2">
                <input type="checkbox" className=" bg-gray-400" />
                <span className="flex hover:text-yellow-400 cursor-pointer items-center gap-1">
                  <svg
                    className="size-6 text-yellow-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.72848 16.1369C3.18295 14.5914 2.41018 13.8186 2.12264 12.816C1.83509 11.8134 2.08083 10.7485 2.57231 8.61875L2.85574 7.39057C3.26922 5.59881 3.47597 4.70292 4.08944 4.08944C4.70292 3.47597 5.59881 3.26922 7.39057 2.85574L8.61875 2.57231C10.7485 2.08083 11.8134 1.83509 12.816 2.12264C13.8186 2.41018 14.5914 3.18295 16.1369 4.72848L17.9665 6.55812C20.6555 9.24711 22 10.5916 22 12.2623C22 13.933 20.6555 15.2775 17.9665 17.9665C15.2775 20.6555 13.933 22 12.2623 22C10.5916 22 9.24711 20.6555 6.55812 17.9665L4.72848 16.1369Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <circle
                      cx="8.60724"
                      cy="8.87891"
                      r="2"
                      transform="rotate(-45 8.60724 8.87891)"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <path
                      d="M11.5417 18.5L18.5208 11.5208"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  <span className="border-2 px-2 rounded-md">PL-3502H</span>
                </span>
              </div>
              <span>
                <span className="border-2 px-2 rounded-md bg-blue-400 text-white py-1">
                  En préparation{" "}
                </span>
              </span>
              <span className="grid">
                <span>Mehdi aoune</span>
                <span className="text-sm">0559944192</span>
              </span>
              <span>35-Boumrdes</span>
              <span>35052-ouled hadadj</span>
              <span className="grid grid-cols-2">
                <span className="grid">
                  <span>2024-11-29</span>
                  <span className="text-sm">17:31</span>
                </span>
                <span className="items-center flex justify-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="rounded-full bg-gray-200 cursor-pointer size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                    />
                  </svg>
                </span>
              </span>
            </div>
            <div className="items-center grid grid-cols-6 py-2 border-b pb-1 px-2">
              <div className="flex items-center justify-start gap-2">
                <input type="checkbox" className=" bg-gray-400" />
                <span className="flex hover:text-yellow-400 cursor-pointer items-center gap-1">
                  <svg
                    className="size-6 text-yellow-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.72848 16.1369C3.18295 14.5914 2.41018 13.8186 2.12264 12.816C1.83509 11.8134 2.08083 10.7485 2.57231 8.61875L2.85574 7.39057C3.26922 5.59881 3.47597 4.70292 4.08944 4.08944C4.70292 3.47597 5.59881 3.26922 7.39057 2.85574L8.61875 2.57231C10.7485 2.08083 11.8134 1.83509 12.816 2.12264C13.8186 2.41018 14.5914 3.18295 16.1369 4.72848L17.9665 6.55812C20.6555 9.24711 22 10.5916 22 12.2623C22 13.933 20.6555 15.2775 17.9665 17.9665C15.2775 20.6555 13.933 22 12.2623 22C10.5916 22 9.24711 20.6555 6.55812 17.9665L4.72848 16.1369Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <circle
                      cx="8.60724"
                      cy="8.87891"
                      r="2"
                      transform="rotate(-45 8.60724 8.87891)"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <path
                      d="M11.5417 18.5L18.5208 11.5208"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  <span className="border-2 px-2 rounded-md">PL-3502H</span>
                </span>
              </div>
              <span>
                <span className="border-2 px-2 rounded-md bg-blue-400 text-white py-1">
                  En préparation{" "}
                </span>
              </span>
              <span className="grid">
                <span>Mehdi aoune</span>
                <span className="text-sm">0559944192</span>
              </span>
              <span>35-Boumrdes</span>
              <span>35052-ouled hadadj</span>
              <span className="grid grid-cols-2">
                <span className="grid">
                  <span>2024-11-29</span>
                  <span className="text-sm">17:31</span>
                </span>
                <span className="items-center flex justify-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="rounded-full bg-gray-200 cursor-pointer size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                    />
                  </svg>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
