import {
  useImperativeHandle,
  useState,
  forwardRef,
  useEffect,
  useRef,
} from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef((props, ref) => {
  const [isOpen, setOpen] = useState(false);
  const dialogRef = useRef(null);
  useImperativeHandle(ref, () => ({
    open: () => {
      setOpen(true);
    },
    close: () => {
      setOpen(false);
    },
  }));

  const handleFocus = () => {
    // const focusable = [];
    // const recurse = (node) => {
    //   if (["BUTTON", "A"].includes(node.nodeName)) focusable.push(node);
    //   if (node.children) {
    //     const children = node.children;
    //     [...children].forEach((child) => {
    //       recurse(child);
    //     });
    //   }
    // };

    // recurse(dialogRef.current);

    const focusable = dialogRef.current.querySelectorAll("button", "a");
    const firstChild = focusable[0];
    const lastChild = focusable[focusable.length - 1];

    const focusListener = (e) => {
      if (
        e.key == "Tab" &&
        !e.shiftKey &&
        document.activeElement == lastChild
      ) {
        e.preventDefault();
        firstChild.focus();
      }
      if (
        e.key == "Tab" &&
        e.shiftKey &&
        document.activeElement == firstChild
      ) {
        e.preventDefault();
        lastChild.focus();
      }
    };

    if (isOpen) {
      firstChild.focus();
    }

    return focusListener;
  };

  const handleEscape = (e) => {
    if (e.key === "Escape") setOpen(false);
  };

  useEffect(() => {
    const focusListener = handleFocus();
    window.addEventListener("keydown", focusListener);
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", focusListener);
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return createPortal(
    <>
      <dialog open={isOpen} ref={dialogRef}>
        {props.children}
        <div>
          <button onClick={() => setOpen(false)}>Cancel</button>
        </div>
        <div>
          <button onClick={() => setOpen(false)}>Ok</button>
        </div>
      </dialog>
      {isOpen && <div className="backdrop"></div>}
    </>,
    document.getElementById("root")
  );
});

export default Modal;
