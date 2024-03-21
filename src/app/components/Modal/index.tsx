import React, { ReactNode, memo } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
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
  onClose?: () => void;
  buttons?: { text: string; onClick: () => void; primary?: boolean }[];
}

const Modal = ({
  children,
  title,
  onClose,
  buttons,
  ...props
}: Props & DialogProps): JSX.Element => (
  <Dialog {...props}>
    <S.Header>
      <DialogTitle>{title}</DialogTitle>
      <IconButton onClick={onClose}>
        <Close />
      </IconButton>
    </S.Header>
    <S.Divider />
    <DialogContent>
      <S.Modal>{children}</S.Modal>
    </DialogContent>
    {buttons && buttons?.length > 0 && (
      <S.Footer>
        <DialogActions>
          {buttons?.map((item) => (
            <Button
              key={Math.random()}
              onClick={item.onClick}
              text={item.text}
              primary={item?.primary}
            />
          ))}
        </DialogActions>
      </S.Footer>
    )}
  </Dialog>
);

export default memo(Modal);
