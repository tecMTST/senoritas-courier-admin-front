import React, { ReactNode, memo } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  IconButton,
} from "@mui/material";
import Button from "./button";
import Close from "../assets/icons/Close";
import * as S from "../App.style";

interface Props {
  children: ReactNode;
  title?: string;
  onClose?: () => void;
  buttons?: Array<{ text: string; onClick: () => void; primary?: boolean }>;
}

const Modal = ({
  children,
  title,
  onClose,
  buttons,
  ...props
}: Props & DialogProps): JSX.Element => (
  <Dialog {...props}>
    <S.HeaderModal>
      <DialogTitle>{title}</DialogTitle>
      <IconButton onClick={onClose}>
        <Close />
      </IconButton>
    </S.HeaderModal>
    <S.DividerModal />
    <DialogContent>{children}</DialogContent>
    {buttons && buttons?.length > 0 && (
      <DialogActions>
        {buttons?.map((item) => (
          <Button
            onClick={item.onClick}
            text={item.text}
            primary={item?.primary}
          />
        ))}
      </DialogActions>
    )}
  </Dialog>
);

export default memo(Modal);
