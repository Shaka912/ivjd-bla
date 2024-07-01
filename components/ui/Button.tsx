"use client";
import classNames from "classnames";
import Image from "next/image";
import React from "react";
import styles from "@/styles/Button.module.css";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  varient?: string;
  title?: string;
  subTitle?: string;
  extraClass?: string;
  customStyles?: React.CSSProperties;
  hoverable?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  varient,
  title,
  subTitle,
  extraClass,
  customStyles,
  hoverable = true,
  ...props
}) => {
  if (varient == "outline")
    return (
      <div className={classNames(styles.outlineContainer, extraClass)}>
        {title}
      </div>
    );

  if (varient == "white")
    return (
      <div className={classNames(styles.whiteBtnContainer, extraClass)}>
        {" "}
        {title}
      </div>
    );
  if (varient == "white-originals")
    return (
      <div className={styles.originalsButton}>
        {/* Image Container */}
        <div className={styles.originalsImage}>
          <Image
            alt="original Image"
            src={"/images/icons/rounded-logo.svg"}
            fill
          />
        </div>
        <div className={classNames(styles.whiteBtnContainer, extraClass)}>
          {title}
        </div>
      </div>
    );
  if (varient == "bigRed")
    return (
      <div className={classNames(styles.bigRedBtnContainer, extraClass)}>
        {" "}
        {title}
      </div>
    );

  if (varient == "white-outline") {
    return (
      <div className={classNames(styles.whiteOutlineBtnContainer, extraClass)}>
        {" "}
        {title}
      </div>
    );
  }
  if (varient == "grey-outline") {
    return (
      <div
        className={classNames(styles.greyOutlineBtnContainer, extraClass)}
        style={{ cursor: hoverable ? "pointer" : "default" }}
      >
        {" "}
        {title}
      </div>
    );
  }

  if (varient == "black-outline") {
    return (
      <div
        className={classNames(styles.blackOutlineBtnContainer, extraClass)}
        style={{ cursor: hoverable ? "pointer" : "default" }}
      >
        {title}
      </div>
    );
  }

  if (varient == "filter") {
    return (
      <div className={classNames(styles.filterBtnContainer)}>
        <div className={styles.filterBtnImage}>
          <Image src="/images/x.png" alt="" layout="fill" />
        </div>
        {title}
      </div>
    );
  }

  if (varient == "white-with-arrow") {
    return (
      <div className={styles.btnWhiteWithArrow}>
        <div className={styles.btnWhiteWithArrowTop}>
          <div className={styles.btnWhiteWithArrowTopTitle}>{title}</div>
          <div className={styles.btnWhiteWithArrowTopArrow}>
            <Image src="/images/black-btn-arrow.png" alt="" fill={true} />
          </div>
        </div>
        <div className={styles.btnWhiteWithArrowBottom}>{subTitle}</div>
      </div>
    );
  }
  if (varient == "gray-with-arrow") {
    return (
      <div className={styles.btnGrayWithArrow}>
        <div className={styles.btnGrayWithArrowTop}>
          <div className={styles.btnGrayWithArrowTopTitle}>{title}</div>
          <div className={styles.btnGrayWithArrowTopArrow}>
            <Image src="/images/black-btn-arrow.png" alt="" fill={true} />
          </div>
        </div>
        <div className={styles.btnGrayWithArrowBottom}>{subTitle}</div>
      </div>
    );
  }
  if (varient == "outline-with-arrow") {
    return (
      <div className={styles.btnOutlineWithArrow}>
        <div className={styles.btnOutlineWithArrowTop}>
          <div className={styles.btnOutlineWithArrowTopTitle}>{title}</div>
          <div className={styles.btnOutlineWithArrowTopArrow}>
            <Image src="/images/arrow-white.svg" alt="" fill={true} />
          </div>
        </div>
        <div className={styles.btnOutlineWithArrowBottom}>{subTitle}</div>
      </div>
    );
  }

  if (varient == "red-with-arrow") {
    return (
      <div className={styles.btnRedWithArrow}>
        <div className={styles.btnRedWithArrowTop}>
          <div className={styles.btnRedWithArrowTopTitle}>{title}</div>
          <div className={styles.btnRedWithArrowTopArrow}>
            <Image src="/images/black-btn-arrow.png" alt="" fill={true} />
          </div>
        </div>
        <div className={styles.btnRedWithArrowBottom}>{subTitle}</div>
      </div>
    );
  }

  return (
    <button className={styles.container} style={customStyles} {...props}>
      {title}
    </button>
  );
};

export default Button;
