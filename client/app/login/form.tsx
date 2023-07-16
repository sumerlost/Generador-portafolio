import { Dispatch, FormEventHandler, SetStateAction } from "react";
import { Statement } from "typescript";

export default function FormLogin({ setLogin, HandlerSubmit }: { setLogin: Dispatch<SetStateAction<{ mail: string, password: string }>>, HandlerSubmit: FormEventHandler }) {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-64">
                <h2 className="text-2xl font-bold mb-6">Iniciar sesión</h2>
                <form onSubmit={HandlerSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 font-medium">Correo electrónico</label>
                        <input
                            type="email"
                            id="email"
                            onChange={(event) => setLogin(prevdata => ({ ...prevdata, mail: event?.target.value }))}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Correo electrónico"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 font-medium">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(event) => setLogin(prevdata => ({ ...prevdata, password: event?.target.value }))}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Contraseña"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                        Iniciar sesión
                    </button>
                </form>
            </div>
        </div>
    )

}