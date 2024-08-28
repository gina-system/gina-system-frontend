import Logo from "../../assets/images/Gina.jpg";

export default function Navbar() {
  return (
    <>
      <nav className="border-gray-200 px-5 py-5 bg-[#8fd14f]">
        <div className="flex flex-wrap items-center justify-between mx-auto">
          <a href="/">
            <img
              src={Logo}
              alt="logo"
              className="w-[60px] h-[60px] transform scale-125 border rounded-lg"
            />
          </a>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 rounded text-white hover:bg-gray-700 hover:text-gray-400 md:hover:bg-transparent md:border-0 md:p-0"
                >
                  Clientes
                </a>
              </li>
              <li>
                <a
                  href="Register"
                  className="block py-2 pl-3 pr-4 rounded text-white hover:bg-gray-700 hover:text-gray-400 md:hover:bg-transparent md:border-0 md:p-0"
                >
                  Cadastrar
                </a>
              </li>
              <li>
                <a
                  href="Notificacoes"
                  className="block py-2 pl-3 pr-4 rounded text-white hover:bg-gray-700 hover:text-gray-400 md:hover:bg-transparent md:border-0 md:p-0"
                >
                  Notificações
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
