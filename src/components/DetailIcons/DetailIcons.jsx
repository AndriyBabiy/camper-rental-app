import React from 'react';
import { DetailIconsContainer } from './DetailIcons.styled';
import { DetailIcon } from './DetailIcon';

// export const CardDetailIcons = ({
//   adults,
//   transmission,
//   engine,
//   kitchen,
//   beds,
//   airConditioner,
// }) => {
//   const details = {
//     adults: {
//       name: 'adults',
//       value: adults,
//       icon: '../../styles/Icons/sprites.svg',
//     },
//     transmission: {
//       name: 'transmission',
//       value: transmission,
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="20"
//           height="20"
//           viewBox="0 0 20 20"
//           fill="none"
//         >
//           <path
//             d="M14.1667 9.16667H15.4167C15.7482 9.16667 16.0661 9.03497 16.3006 8.80055C16.535 8.56613 16.6667 8.24819 16.6667 7.91667C16.6667 7.58515 16.535 7.2672 16.3006 7.03278C16.0661 6.79836 15.7482 6.66667 15.4167 6.66667H14.1667V10.8333M14.1667 14.1667V17.5H15C15.442 17.5 15.866 17.3244 16.1785 17.0118C16.4911 16.6993 16.6667 16.2754 16.6667 15.8333C16.6667 15.3913 16.4911 14.9674 16.1785 14.6548C15.866 14.3423 15.442 14.1667 15 14.1667H14.1667ZM2.5 4.16667C2.5 4.60869 2.67559 5.03262 2.98816 5.34518C3.30072 5.65774 3.72464 5.83333 4.16667 5.83333C4.60869 5.83333 5.03262 5.65774 5.34518 5.34518C5.65774 5.03262 5.83333 4.60869 5.83333 4.16667C5.83333 3.72464 5.65774 3.30072 5.34518 2.98816C5.03262 2.67559 4.60869 2.5 4.16667 2.5C3.72464 2.5 3.30072 2.67559 2.98816 2.98816C2.67559 3.30072 2.5 3.72464 2.5 4.16667Z"
//             stroke="#101828"
//             stroke-width="1.5"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           />
//           <path
//             d="M4.16663 5.83331V8.33331C4.16663 8.55433 4.25442 8.76629 4.4107 8.92257C4.56698 9.07885 4.77895 9.16665 4.99996 9.16665H7.49996M7.49996 9.16665V15C7.49996 15.221 7.58776 15.433 7.74404 15.5892C7.90032 15.7455 8.11228 15.8333 8.33329 15.8333H10.8333M7.49996 9.16665H10.8333"
//             stroke="#101828"
//             stroke-width="1.5"
//             stroke-linecap="round"
//             stroke-linejoin="round"
//           />
//         </svg>
//       ),
//     },
//   };
//   return (
//     <DetailIconsContainer>
//       <DetailIcon />
//     </DetailIconsContainer>
//   );
// };

export const CardDetailIcons = ({
  adults,
  transmission,
  engine,
  kitchen,
  beds,
  airConditioner,
}) => {
  const details = [
    { id: 'adults', label: `${adults} adults` },
    { id: 'transmission', label: transmission },
    { id: 'engine', label: engine },
    { id: 'kitchen', label: 'kitchen' },
    { id: 'beds', label: `${beds} beds` },
    { id: 'AC', label: 'AC' },
  ];

  return (
    <DetailIconsContainer>
      {details.map(
        detail =>
          detail.label && (
            <DetailIcon
              key={detail.id}
              iconId={detail.id}
              label={detail.label}
            />
          )
      )}
    </DetailIconsContainer>
  );
};
