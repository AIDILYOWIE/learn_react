import "../../css/navbar.css";

const Navbar = ({ children }) => {
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("email"); //localStorage.removeItem digunakan untuk menghapus item yang ada di local storage
    localStorage.removeItem("password");
    return (window.location.href = "/login");
  };

  const email = localStorage.getItem("email"); // variable email digunakan untuk mengambil email yang sudah di set di localstorage

  // pengkondisian ini digunakan untuk mengecek email jika false
  if (!email) {
    return (window.location.href = "/login"); // jika tidak ada value pada variable email berisi null / false
  }

  return (
    <>
      <div className="navbar bg-blue-600">
        <button
          className=" px-3 py-1 text-1xl text-white bg-black rounded-sm font-bold tracking-[0.05em] cursor-pointer"
          onClick={handleLogout}
        >
          logout
        </button>
      </div>
      {children}
    </>
  );
};

export default Navbar;
