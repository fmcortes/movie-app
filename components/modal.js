import React from 'react';

// props.children contains the children component passed to modal

// const Modal = (props) => {
//   let closeButton = null;

//   const submitModal = () => {
//     alert('Submiting modal');
//     closeButton.click();
//   };

//   return (
//     <div>
//       <button
//         type="button"
//         className="btn btn-primary"
//         data-toggle="modal"
//         data-target="#exampleModal"
//       >
//         Create Movie
//       </button>

//       <div
//         className="modal fade"
//         id="exampleModal"
//         tabIndex="-1"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalLabel">
//                 Modal title
//               </h5>
//               <button
//                 type="button"
//                 className="close"
//                 data-dismiss="modal"
//                 aria-label="Close"
//               >
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <div className="modal-body">{props.children}</div>
//             <div className="modal-footer">
//               <button
//                 ref={(ele) => (closeButton = ele)}
//                 type="button"
//                 className="btn btn-secondary"
//                 data-dismiss="modal"
//               >
//                 Close
//               </button>
//               {props.hasSubmit && (
//                 <button
//                   type="button"
//                   className="btn btn-primary"
//                   onClick={submitModal}
//                 >
//                   Save changes
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// Convert to class component
class Modal extends React.Component {
  closeButton = null;
  constructor(props) {
    super(props);
  }

  closeModal() {
    this.closeButton.click();
  }

  submitModal = () => {
    alert('Submiting modal');
    this.closeModal();
  };

  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Create Movie
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">{this.props.children}</div>
              <div className="modal-footer">
                <button
                  ref={(ele) => (this.closeButton = ele)}
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                {this.props.hasSubmit && (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={submitModal}
                  >
                    Save changes
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Modal;
