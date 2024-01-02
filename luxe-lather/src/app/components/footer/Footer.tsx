import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";
import { AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
    return (

      <footer className="bg-slate-700 text-slate-200 text-sm mt-16 px-16">
        <Container>
          <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
            <FooterList>
            <h3 className="font-bold text-base mb-2">Categories</h3>
            <Link href="#">Soap</Link>
            <Link href="#">Shower gel</Link>
            <Link href="#">Detergent</Link>
            <Link href="#">Disinfectant</Link>
            </FooterList>

            <FooterList>
            <h3 className="font-bold text-base mb-2">Support</h3>
            <Link href="#">Blog</Link>
            <Link href="#">Help</Link>
            <Link href="#">FAQ</Link>
            </FooterList>
        
            <FooterList>
            <h3 className="font-bold text-base mb-2">Contact</h3>
            <Link href="#">email</Link>
            <Link href="#">97877279l</Link>
            <div className="flex gap-2 mt-4">
            <Link href="#">
             <MdFacebook size={24}/>
            </Link>
            <Link href="#">
              <AiFillTwitterCircle size={24}/>
            </Link>
            <Link href="#">
              <AiFillInstagram size={24}/>
            </Link>
            <Link href="#">
              <AiFillYoutube size={24}/>
            </Link>
            </div>
            </FooterList>
            
          </div>
        </Container>
      </footer>

    )
  }
  
  export default Footer;