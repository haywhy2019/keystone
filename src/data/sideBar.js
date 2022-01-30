import {ShoppingCart, Users, CreditCard, Flag, Briefcase, Settings, ChevronDown, BarChart, Grid, Archive} from "react-feather"
export const sideBar = [
    {
        title: "Dashboard",
        icon: <Grid size={16}/>,
        className: "flex text-blue-600 text-base font-bold mb-6 bg-slate-100 p-2 rounded-md items-center"
    
    },
    {
        title: "Products",
        icon: <Archive size={16}/>,
         className: "flex text-base font-bold text-slate-500 mb-6 p-2 items-center"
    
    },
    {
        title: "Blog",
        icon: <ShoppingCart size={16}/>,
         className: "flex text-base font-bold text-slate-500 mb-6 p-2 items-center"
    
    },
    {
        title: "Transactions",
        icon: <CreditCard size={16}/>,
         className: "flex text-base font-bold text-slate-500 mb-6 p-2 items-center"
    
    },
    {
        title: "Users",
        icon: <Users size={16}/>,
         className: "flex text-base font-bold text-slate-500 mb-6 p-2 items-center"
    
    },
    {
        title: "Analysis",
        icon: <BarChart size={16}/>,
         className: "flex text-base font-bold text-slate-500 mb-6 p-2 items-center"
    
    },
    {
        title: "Reports",
        icon: <Flag  size={16}/>,
        icon2: <ChevronDown size={16}/>,
         className: "flex text-base font-bold text-slate-500 mb-6 p-2 items-center"
    
    },
    {
        title: "Investment",
        icon: <Briefcase size={16}/>,
         className: "flex text-base font-bold text-slate-500 mb-6 p-2 items-center"
    
    },
    {
        title: "Settings",
        icon: <Settings size={16}/>,
         className: "flex text-base font-bold text-slate-500 mb-6 p-2 items-center"
    
    },

]