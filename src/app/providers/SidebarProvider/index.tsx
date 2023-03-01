// import  React, { FC, useContext }  from  "react";
// // Context has been created
// // export interface SidebarContextProps {
// //     setToggle: () => void;
// //     toggle: boolean;
// // }
// const SidebarContext = React.createContext<SidebarContextProps>(false);
// const defaultContext = {
//     toggle: false,
//     setToggle: ()=>true,
// }
// // Provider
// const SidebarProvider = ({ children }) =>  {
//     //const toggle = React.useState<boolean>(useContext(SidebarContext));
//     const [toggle, setToggle] = React.useState<boolean>(defaultContext);

//     const toggleFunction =  ()  =>  {
//     setToggle(!toggle);
//     };

//     const defaultProps =  {
//         toggle: false,
//         setToggle: setToggle,
//     }
// return  (
//     <SidebarContext.Provider value={defaultProps}>
//         {children}
//     </SidebarContext.Provider>
//     );
// };

// // interface UseSidebarToggleResult {
// //     setToggle : () => void;
// //     toggle: boolean;
// // }

// const useSidebar = ()=> {
//     const [toggle, setToggle] = React.useState(useContext(SidebarContext));
//     //const toggleFunction = () => {
//     setToggle(!toggle);
//     //};
//     return { toggle, setToggle}
//     // const toggleTheme = () => {
//     //     setToggleSidebar(!toggleSidebar)
//     //     // const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
//     //     // setTheme(newTheme);
//     //     // localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
//     // }

//     // return {
//     //     theme,
//     //     toggleTheme,
//     // }
// }

// export { SidebarContext, SidebarProvider, useSidebar };
