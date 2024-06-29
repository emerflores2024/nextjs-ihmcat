import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from 'react-icons/bs';
import { Footer, FooterCopyright, FooterIcon } from 'flowbite-react';

export function MyFooter() {
  return(
    <Footer container className="rounded-none">
    <div className="w-full">
      <div className="w-full sm:flex sm:items-center sm:justify-between">
        <FooterCopyright href="#" by="Creative Coding by Emerson Flores" year={2024} />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <FooterIcon href="#" icon={BsFacebook} />
          <FooterIcon href="#" icon={BsInstagram} />
          <FooterIcon href="#" icon={BsTwitter} />
          <FooterIcon href="#" icon={BsGithub} />
          <FooterIcon href="#" icon={BsDribbble} />
        </div>
      </div>
    </div>
  </Footer>
  );
}