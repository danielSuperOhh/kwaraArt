// import { css } from '@emotion/react';
import LoaderSpinner from 'react-loader-spinner';

// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;

const Loader = () => {
  return (
    <div className="loader-container">
        <LoaderSpinner type="Puff" color="#36D7B7" height={100} width={100} />    
    </div>
  );
};

export default Loader;
