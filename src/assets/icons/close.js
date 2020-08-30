import React from 'react';
import styled from 'styled-components';

const CloseIconWrapper = styled.svg`
  width: 100%;
  height: 100%;
`;

export const CloseIcon = () => (
  <CloseIconWrapper aria-hidden='true'>
    <g>
      <g clipPath='url(#clip0)'>
        <path
          d='M20.6799 18.4L26.1297 12.9781C26.7418 12.3893 26.7587 11.4187 26.1667 10.81C25.5747 10.2013 24.5988 10.1844 23.9868 10.7717C23.9745 10.7839 23.9606 10.7962 23.9498 10.81L18.5 16.2303L13.0487 10.8115C12.4582 10.2013 11.4823 10.1859 10.8703 10.7732C10.2567 11.362 10.2413 12.3326 10.8318 12.9413C10.8441 12.9536 10.858 12.9674 10.8703 12.9797L16.3186 18.4L10.8688 23.8219C10.2567 24.4107 10.2398 25.3813 10.8302 25.99C11.4222 26.5987 12.3981 26.6156 13.0101 26.0268C13.0225 26.0145 13.0363 26.0023 13.0471 25.99L18.5 20.5681L23.9513 25.9885C24.5433 26.5972 25.5192 26.6141 26.1313 26.0253C26.7433 25.4365 26.7603 24.4659 26.1683 23.8571C26.1559 23.8449 26.1436 23.8311 26.1313 23.8203L20.6799 18.4Z'
          fill='black'
        />
      </g>
      <defs>
        <clipPath id='clip0'>
          <rect width='37' height='46' fill='white' />
        </clipPath>
      </defs>
    </g>
  </CloseIconWrapper>
);
