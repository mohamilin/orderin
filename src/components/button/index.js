import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Button(props) {
  console.log(props);
  const className = [props.className];
  if (props.isPrimary) className.push("btn-primary");
  if (props.isLarge) className.push("btn-lg");
  if (props.isSmall) className.push("btn-sm");
  if (props.isLight) className.push("btn-light");
  if (props.isBlock) className.push("btn-block");
  // utk btn-hasShadow akan dibwt scra custom
  if (props.hasShadow) className.push("btn-shadow");

  // Buat arrow function untuk handle onClick
  const onClick = () => {
    // utk memastikan  bhwa onClick tersedia di dalam props
    if (props.onClick) props.onClick();
  };

  // logic untuk disable dan loading
  if (props.isDisabled || props.isLoading) {
    // bungkus logic span nya
    if (props.isDisabled) className.push("disabled");
    return (
      <span className={className.join(" ")} style={props.style}>
        {props.isLoading ? (
          <>
            <span className="spinner-border spinner-border-sm mx-5"></span>
            <span className="sr-loading">Loading...</span>
          </>
        ) : (
          props.children
        )}
      </span>
    );
  }

  // rendering component untuk link yang ke luar maupun k dalam
  if (props.type === "link") {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(" ")}
          style={props.style}
          target={props.target === "_blank" ? "_blank" : undefined}
          // noopener noreferrer bisa bermnafaaat utk SEO
          rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          to={props.href}
          className={className.join(" ")}
          style={props.style}
          onClick={onClick}
        >
          {props.children}
        </Link>
      );
    }
  }
  return (
    //render button
    <button
      className={className.join(" ")}
      style={props.style}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  // beberapa property yang dibutuhkan dalam button
  type: PropTypes.oneOf(["button", "link"]),
  onClick: PropTypes.func, // onClik akan berjalan dengan menggunakan function
  target: PropTypes.string,
  isPrimary: PropTypes.bool,
  href: PropTypes.string,
  isDisabled: PropTypes.bool, // klo misalnya link / button nya disable
  isLoading: PropTypes.bool, // klo dicklik muncul loading spinner
  isSmall: PropTypes.bool, // Ukuran small
  isLarge: PropTypes.bool,
  isLight: PropTypes.bool,
  isBlock: PropTypes.bool,
  isExternal: PropTypes.bool, // jika link nya  nnti akan mengarah ke luar aplikasi, tp klo cuman k dalam cukup pake Link
  hasShadow: PropTypes.bool, // utk button dg tampilan punya shadow
};
