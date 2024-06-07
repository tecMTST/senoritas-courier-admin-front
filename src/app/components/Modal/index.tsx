import React, { ReactNode, memo } from "react";
import {
  Dialog,
  DialogActions,
  DialogProps,
  DialogTitle,
  IconButton,
} from "@mui/material";
import Button from "../Button";
import Close from "../../assets/icons/Close";
import * as S from "./style";

interface Props {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  onClose?: () => void;
  buttons?: {
    text: string;
    onClick: () => void;
    primary?: boolean;
    inline?: boolean;
  }[];
  color?: string;
  width?: string;
  padding?: string;
  isFull?: boolean;
}

const Modal = ({
  children,
  title,
  subtitle,
  onClose,
  buttons,
  color,
  width,
  padding,
  isFull,
  ...props
}: Props & DialogProps): JSX.Element => (
  <Dialog {...props}>
    {!subtitle ? (
      <S.Title>
        <DialogTitle>{title}</DialogTitle>
        {!isFull && (
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        )}
      </S.Title>
    ) : (
      <S.Header>
        <div className="content">
          <label className="title">{title}</label>
          <label className="subtitle">{subtitle}</label>
        </div>

        <IconButton onClick={onClose}>
          <Close color="#272727" />
        </IconButton>
      </S.Header>
    )}
    <S.Divider $full={isFull} />
    <S.Modal $width={width} $padding={padding}>
      {children}
    </S.Modal>
    {buttons && buttons?.length > 0 && (
      <S.Footer>
        <DialogActions>
          {buttons?.map((item) => (
            <Button
              key={Math.random()}
              onClick={item.onClick}
              text={item.text}
              primary={item?.primary}
              inline={item?.inline}
            />
          ))}
        </DialogActions>
      </S.Footer>
    )}
  </Dialog>
);

export default memo(Modal);
