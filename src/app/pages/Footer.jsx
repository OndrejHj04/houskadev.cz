import { BsFacebook, BsInstagram, BsGoogle } from "react-icons/bs";
import "../styles/footer.css";
function Footer() {
  return (
    <div className="p-2 footer">
      <div className="flex justify-around items-center">
        <div>Naše sociální sítě</div>
        <div className="grid grid-cols-3 gap-2">
          <BsFacebook size={30} color="gray" className="cursor-pointer" />
          <BsInstagram size={30} color="gray" className="cursor-pointer" />
          <BsGoogle size={30} color="gray" className="cursor-pointer" />
        </div>
      </div>
      <div className="flex justify-between"></div>
      <div className="flex justify-center">
        <div>© 2023 Houska dev</div>
      </div>
    </div>
  );
}

export default Footer;
