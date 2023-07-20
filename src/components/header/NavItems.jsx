import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import "./NavItems.css";
import { GrMenu, GrClose } from "react-icons/gr";

const NavItems = (props) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  // Frame motion animation
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <>
      <div className="menu-icon" onClick={showSidebar}>
        {sidebar ? <GrClose style={{ color: "red" }} /> : <GrMenu />}
      </div>

      <nav>
        <motion.ul
          className={sidebar ? "nav-items active " : "nav-items"}
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.05 }}
          onClick={showSidebar}
        >
          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.05 }}
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            <NavLink to="/" className="active-links">
              Home
            </NavLink>
          </motion.li>

          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.1 }}
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            <NavLink to="#">About</NavLink>
          </motion.li>

          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.15 }}
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            <NavLink to="#">Menu</NavLink>
          </motion.li>

          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.2 }}
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            <NavLink to="/reservation" className="active-links">
              Reservations
            </NavLink>
          </motion.li>

          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.25 }}
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            <NavLink to="#">Order Online</NavLink>
          </motion.li>

          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.3 }}
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            <NavLink to="#">Login</NavLink>
          </motion.li>

          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.3 }}
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            <NavLink to="#">
              <svg
                // width="46"
                height="24"
                viewBox="0 0 46 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.7273 27.2381V33.5238H46V37.7143H39.7273V44H35.5455V37.7143H29.2727V33.5238H35.5455V27.2381H39.7273ZM23 23.0476C20.7 23.0476 18.8182 24.9333 18.8182 27.2381C18.8182 29.5429 20.7 31.4286 23 31.4286C25.3 31.4286 27.1818 29.5429 27.1818 27.2381C27.1818 24.9333 25.3 23.0476 23 23.0476ZM25.8227 39.8095H9.40909C7.48545 39.8095 5.87545 38.5105 5.39455 36.7505L0.0836363 17.3276C-7.45058e-08 17.139 0 16.9505 0 16.7619C0 15.6095 0.940909 14.6667 2.09091 14.6667H12.1064L21.2645 0.942857C21.6618 0.335238 22.3309 0 23 0C23.6691 0 24.3382 0.335238 24.7355 0.921905L33.8936 14.6667H43.9091C45.0591 14.6667 46 15.6095 46 16.7619L45.9373 17.3276L43.9091 24.7448C42.7173 24.0952 41.3791 23.5505 39.9782 23.2781L41.1909 18.8571H4.83L9.40909 35.619H25.0909C25.0909 37.0857 25.3627 38.4895 25.8227 39.8095ZM17.1455 14.6667H28.8545L23 5.86667L17.1455 14.6667Z"
                  fill="#495E57"
                />
              </svg>
            </NavLink>
          </motion.li>
        </motion.ul>
      </nav>
    </>
  );
};

export default NavItems;