import Image from "next/image";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10 grid grid-cols-3 mx-auto">
      <aside>
        <Image src={logo} alt="Logo" width={150} height={150} />
      </aside>
      <nav>
        <h6 className="footer-title">Connect With Us</h6>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.facebook.com/people/Resmedx-BD/61564358981965"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="40px"
              height="40px"
              viewBox="0 0 48 48"
            >
              <path
                fill="#039be5"
                d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
              ></path>
              <path
                fill="#fff"
                d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
              ></path>
            </svg>
          </a>
          <a
            href="https://x.com/resmedx"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="40px"
              height="40px"
              viewBox="0 0 50 50"
            >
              <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
            </svg>
          </a>
        </div>
      </nav>

      <nav>
        <h6 className="footer-title">Contact With Us</h6>
        <a href="mailto:Contact@resmedx.com" className="hover:underline">
          Contact@resmedx.com
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
