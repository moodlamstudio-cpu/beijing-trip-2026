import type { ComponentProps, ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

export function WebScroll(props: ComponentProps<'div'>) {
  return <div {...props} />;
}

export const NativeInput = 'input';
export const NativeTextarea = 'textarea';

export function useNativeKeyboard() {
  return { hide() { if (document.activeElement instanceof HTMLElement) document.activeElement.blur(); } };
}

type SheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  snap?: number;
  children: ReactNode;
};

export function WebSheet({ open, onOpenChange, title, description, children }: SheetProps) {
  return <Dialog.Root open={open} onOpenChange={onOpenChange}>
    <Dialog.Portal>
      <Dialog.Overlay className="web-dialog-overlay" />
      <Dialog.Content className="web-dialog">
        <header className="web-dialog-header">
          <Dialog.Title>{title}</Dialog.Title>
          <Dialog.Description>{description}</Dialog.Description>
          <Dialog.Close className="web-dialog-close" aria-label="ปิดหน้าต่าง"><Cross2Icon /></Dialog.Close>
        </header>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>;
}
