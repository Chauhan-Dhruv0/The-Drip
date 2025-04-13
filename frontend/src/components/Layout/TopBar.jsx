// import React from 'react'
// import { TbBrandMeta } from "react-icons/tb"
// import { IoLogoInstagram } from "react-icons/io"
// import { RiTwitterXLine } from "react-icons/ri"

// function TopBar() {
//   return (
//     <div className="bg-[#ea2e0e] h-[45px] text-white w-full">
//       <div className="w-full flex justify-between items-center py-3 px-4">
//         {/* Social Icons */}
//         <div className="invisible sm:visible flex items-center space-x-4 pl-7">
//           <a href="#" className="hover:text-gray-300">
//             <TbBrandMeta className="h-5 w-5" />
//           </a>
//           <a href="#" className="hover:text-gray-300">
//             <IoLogoInstagram className="h-5 w-5" />
//           </a>
//           <a href="#" className="hover:text-gray-300">
//             <RiTwitterXLine className="h-4 w-4" />
//           </a>
//         </div>

//         {/* Center Text */}
//         <div className="text-sm text-center flex-grow hitespace-nowrap">
//           <span>We ship worldwide - Fast and reliable</span>
//         </div>

//         {/* Contact Info */}
//         <div className="invisible sm:visible  pr-7">
//           <a href="tel:+1234567890" className="hover:text-gray-300">
//             +1 (234) 567 890
//           </a>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default TopBar
import React from 'react'
import { TbBrandMeta } from "react-icons/tb"
import { IoLogoInstagram } from "react-icons/io"
import { RiTwitterXLine } from "react-icons/ri"

function TopBar() {
  return (
    <div className=" bg-[#ea2e0e] min-h-[45px] text-white w-full">
    <div className="w-full flex justify-between items-center px-4 py-2 text-sm">
      {/* Social Icons */}
      <div className="hidden sm:flex items-center space-x-4 pl-3">
        <a href="#" className="hover:text-gray-300">
          <TbBrandMeta className="h-5 w-5" />
        </a>
        <a href="#" className="hover:text-gray-300">
          <IoLogoInstagram className="h-5 w-5" />
        </a>
        <a href="#" className="hover:text-gray-300">
          <RiTwitterXLine className="h-4 w-4" />
        </a>
      </div>
  
      {/* Center Text */}
      <div className="text-center flex-grow whitespace-nowrap">
        <span>We ship worldwide - Fast and reliable</span>
      </div>
  
      {/* Contact Info */}
      <div className="hidden sm:flex pr-3">
        <a href="tel:+1234567890" className="hover:text-gray-300">
          +1 (234) 567 890
        </a>
      </div>
    </div>
  </div>
  
  )
}

export default TopBar