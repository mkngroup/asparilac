import {IoMdArrowDropdown, IoMdArrowDropup} from 'react-icons/io'
import {FiExternalLink} from 'react-icons/fi'
export const SidebarHeader = {
  production:"Üretim Bölümü",
  technology:"Teknoloji Bölümü"
}
export const TabData = [
  
  
  {
    text: "Baslangic",
    to: "/production",
  },


  {
    text: "Fason Uretimi",
    to: "/production/fasonuretim",
  },


  {
    text: "Kozmetik & Dermokozmetik",
    to: "#",
    iconopened: <IoMdArrowDropup/>,
    iconclosed: <IoMdArrowDropdown/>,

    submenu: [
      {
        text: "Cilt Bakimi",
        to: "/production/ciltbakimi",
      },
      {
        text: "Vucut Bakimi",
        to: "/production/vucutbakimi",
      },
      {
        text: "Sac Bakimi",
        to: "/production/sacbakimi",
      },
    ],
  },


  {
    text: "Gida Takviyesi",
    to: "#",
    iconopened: <IoMdArrowDropup/>,
    iconclosed: <IoMdArrowDropdown/>,

    submenu:[
      {
        text: "Vitaminler",
        to: "/production/vitaminler",
      },
      {
        text: "Multivitaminler",
        to: "/production/multivitaminler",
      },
      {
        text: "Mineraller",
        to: "/production/mineraller",
      },
      {
        text: "Bitkiler",
        to: "/production/Bitkiler",
      },
      {
        text: "Kolajen",
        to: "/production/kolajen",
      },
    ]
  },
  {
    text: "Teknolojı",
    tab_icon: <FiExternalLink/>,
    to: "/technology",
  },
  {
    text: "Destek",
    tab_icon: <FiExternalLink/>,
    to: "#",
  },
  {
    text: "İletişim",
    tab_icon: <FiExternalLink/>,
    to: "#",
  },


];

export const TabDataTeknolojı = [
  {
    text: "Baslangic",
    to: "/technology",
  },


  {
    text: "Fason Uretimi",
    tab_icon: <FiExternalLink/>,
    to: "/production/fasonuretim",
  },


  {
    text: "Makinalar ve Kapasiteler",
    to: "/technology/makinalar",
    
  },


  {
    text: "Laboratuvar",
    to: "/technology/laboratuvar",
    
  },
  {
    text: "Reklam & Tasarım Ekibi",
    to: "/technology/reklamtasarim",
  },
  {
    text: "Smart Depo",
    
    to: "/technology/smartdepo",
  },
  {
    text: "Üretim Bölümü",
    tab_icon: <FiExternalLink/>,
    to: "/production",
  },
  {
    text: "Destek",
    tab_icon: <FiExternalLink/>,
    to: "#",
  },
  {
    text: "İletişim",
    tab_icon: <FiExternalLink/>,
    to: "#",
  },


];