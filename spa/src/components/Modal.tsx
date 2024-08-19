import React, { useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import '../assets/modal.scss';
import {Input, Button} from "antd";
// interface Props {
//     children?: ReactNode
//     // any props that come into the component
// }
function Modal({
                   children,
                   onClose,
                   isCloseOutsideClick = false,
                   isVisibleCloseButton = false
}:any) {
    const ref = useRef(null);

    useOnClickOutside(ref, () => {
        if (isCloseOutsideClick) {
            onClose();
        }
    });
    return (
        <div className="modal-mask">
            <div className="modal-wrapper" onClick={onClose}>
                <div className="modal-container">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal;
