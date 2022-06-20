
import Link from "next/link";
import { urlPaths } from "../commons/static/constants";
import { useAppDispatch, useAppSelector } from "../hooks/state";
import Brand from "./Brand";
import MenuDropdown from "./dropdowns/MenuDropdown";

const navbarItems = [
    {
        link: urlPaths.dashboard,
        title: "Dashboard",
        urlMatchers: [urlPaths.dashboard]
    },
    {
        link: urlPaths.about,
        title: "About",
        urlMatchers: [urlPaths.about]
    },
    {
        link: urlPaths.contactUs,
        title: "Contact",
        urlMatchers: [urlPaths.contactUs]
    },

]
export default function Header({ isVisible = true }: any) {
    const loginState = useAppSelector(
        (state: any) => state.authReducer?.loginState
    );
    const dispatch = useAppDispatch();
    // const MenuItem = () => {

    //     const checkIfUserIsLoggedIn = () => {
    //         if (!loginState.isLoggedIn) {
    //             dispatch(toggleLoginModal({ isLoginModalOpen: true }));
    //         } else {
    //             //CLOSE MODAL
    //         }
    //     };

    //     return (
    //         <>
    //             <Nav className="mx-auto">
    //                 <LoginModal />
    //                 <CustomNavLinkSmall href="/about">About us</CustomNavLinkSmall>
    //                 <CustomNavLinkSmall href="/contact">Contact</CustomNavLinkSmall>
    //                 <CustomNavLinkSmall href="/contact">Team</CustomNavLinkSmall>
    //             </Nav>
    //             <Nav>
    //                 <StyledButton onClick={checkIfUserIsLoggedIn}> <LoginIcon />Start</StyledButton>
    //             </Nav>
    //         </>
    //     );
    // };

    return (
        <>
            {isVisible ?
                <div className="mx-10">
                    <nav className="flex items-center justify-between flex-wrap bg-white p-6">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex-none">
                                <Brand color={"text-primary-900"} />
                            </div>
                            <div className="nav-links">
                                <div className="hidden md:grid grid-cols-4 gap-4 inline-block align-middle">
                                    {navbarItems.map((items: any, index: number) => {
                                        return (
                                            <Link key={`navbarItems_${index}`} href={items.link} className="block mt-4 lg:inline-block lg:mt-0 text-white mr-4 font-bold">
                                                {items.title}
                                            </Link>
                                        )
                                    })}

                                </div>
                            </div>
                            <div className="nav-action hidden md:block">
                                <a href="#" className="inline-block text-lg font-bold px-4 py-2 border-4 rounded-lg text-primary-900 border-primary-900 hover:border-transparent hover:bg-primary-900 hover:text-white mt-4 lg:mt-0">Login</a>
                            </div>
                            <div className="block md:hidden">
                                <MenuDropdown menuList={navbarItems}/>
                            </div>
                        </div>
                    </nav>
                </div>
                : []
            }
        </>
    );
};

