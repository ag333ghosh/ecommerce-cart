export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg text-gray-400 py-3 rounded-md">
      <div className="w-full  mx-auto flex flex-col md:flex-row justify-between items-center px-20">
        
        <span className="text-sm md:text-base">
          © 2023 <span className="text-blue-400 font-semibold">Ghosh-Enterprise™</span>. All Rights Reserved.
        </span>

        
        <ul className="flex flex-wrap gap-4 mt-4 md:mt-0">
          <li>
            <a href="#" className="hover:text-blue-400 transition duration-300">About</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 transition duration-300">Privacy Policy</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 transition duration-300">Licensing</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400 transition duration-300">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
