// import React from 'react';
// import { DetailIconComponent } from './DetailIcons.styled';

import { IconWrapper } from './DetailIcons.styled';

// export const DetailIcon = () => {
//   return (
//     <DetailIconComponent>
//       {
//         //   switch (value) {
//         //     case "airConditioner":
//         //     return (
//         //       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
//         //         <g clip-path="url(#clip0_45_532)">
//         //           <path d="M17.8571 0.714294H2.1428C1.76392 0.714294 1.40056 0.864804 1.13265 1.13271C0.864743 1.40062 0.714233 1.76399 0.714233 2.14287V9.28572C0.714233 9.6646 0.864743 10.028 1.13265 10.2959C1.40056 10.5638 1.76392 10.7143 2.1428 10.7143H17.8571C18.236 10.7143 18.5993 10.5638 18.8672 10.2959C19.1352 10.028 19.2857 9.6646 19.2857 9.28572V2.14287C19.2857 1.76399 19.1352 1.40062 18.8672 1.13271C18.5993 0.864804 18.236 0.714294 17.8571 0.714294Z" stroke="#101828" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//         //           <path d="M15.7143 10.7143V7.85716C15.7143 7.47828 15.5638 7.11492 15.2958 6.84701C15.0279 6.5791 14.6646 6.42859 14.2857 6.42859H5.71427C5.33539 6.42859 4.97202 6.5791 4.70412 6.84701C4.43621 7.11492 4.2857 7.47828 4.2857 7.85716V10.7143M3.57141 17.8572H3.71427C4.2447 17.8572 4.75341 17.6464 5.12848 17.2714C5.50355 16.8963 5.71427 16.3876 5.71427 15.8572V14.2857M16.4286 17.8572H16.2857C15.7553 17.8572 15.2466 17.6464 14.8715 17.2714C14.4964 16.8963 14.2857 16.3876 14.2857 15.8572V14.2857M9.99998 19.2857V14.2857" stroke="#101828" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//         //         </g>
//         //         <defs>
//         //           <clipPath id="clip0_45_532">
//         //             <rect width="20" height="20" fill="white"/>
//         //           </clipPath>
//         //         </defs>
//         //       </svg>
//         //     )
//         //   "bathroom": 1,
//         //   "kitchen": 1,
//         //   "beds": 2,
//         //   "TV": 0,
//         //   "CD": 0,
//         //   "radio": 1,
//         //   "shower": 1,
//         //   "toilet": 1,
//         //   "freezer": 1,
//         //   "hob": 3,
//         //   "microwave": 1,
//         //   "gas": "22kg",
//         //   "water": "76l"
//         // }
//       }
//       count name
//     </DetailIconComponent>
//   );
// };

export const DetailIcon = ({ iconId, label }) => (
  <IconWrapper>
    <svg>
      <use href={`#${iconId}`} />
    </svg>
    {label}
  </IconWrapper>
);
