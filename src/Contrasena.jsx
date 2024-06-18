import React from "react"
export default function Contrasena (){
    return(
        <>
       <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <button className="text-left mb-4 focus:outline-none">
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <h1 className="text-3xl font-bold mb-4 text-center">Recuperación de Contraseña</h1>
        <p className="text-center text-gray-600 mb-2">
          Ingresa el correo electrónico con el que estás registrado,te enviaremos un código para verificar que eres tú
        </p>
       
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium bg text-gray-700">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300     shadow-sm focus:outline-none sm:text-sm text-center bg-slate-200"
              placeholder=" chefsito@gmail.com"
            />
            
          </div>
          <button
            type="submit"
            className=" bg-naranja text-white py-3 px-4 w-full hover:bg-naranja text-lg mb-2"
          >
            Enviar código
          </button>
        </form>
      </div>
    </div>
        </>
    )
}
