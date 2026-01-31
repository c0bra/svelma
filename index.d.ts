import type { SvelteComponent } from 'svelte';

// Button component
export class Button extends SvelteComponent<{
  type?: string;
  size?: string;
  outlined?: boolean;
  inverted?: boolean;
  rounded?: boolean;
  loading?: boolean;
  static?: boolean;
  active?: boolean;
  focused?: boolean;
  hovered?: boolean;
  fullwidth?: boolean;
  disabled?: boolean;
  icon?: string;
  iconPack?: string;
  tag?: string;
}> {}

// Collapse component
export class Collapse extends SvelteComponent<{
  open?: boolean;
  animation?: string | Function;
  animProps?: Record<string, any>;
}> {}

// Dialog component and utilities
export class Dialog extends SvelteComponent<{
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  focusOn?: 'confirm' | 'cancel';
  icon?: string;
  iconPack?: string;
  hasInput?: boolean;
  prompt?: string;
  showCancel?: boolean;
  size?: string;
  type?: string;
  active?: boolean;
  animation?: string | Function;
  animProps?: Record<string, any>;
  inputProps?: Record<string, any>;
  appendToBody?: boolean;
}> {
  static alert(props: string | { message?: string }): Promise<any>;
  static confirm(props: string | { message?: string; showCancel?: boolean }): Promise<boolean>;
  static prompt(props: string | { message?: string; hasInput?: boolean; confirmText?: string }): Promise<string | null>;
  promise: Promise<any>;
}

// Field component
export class Field extends SvelteComponent<{
  label?: string;
  type?: string;
  grouped?: boolean;
  groupedMultiline?: boolean;
  horizontal?: boolean;
  addons?: boolean;
  position?: 'is-centered' | 'is-right';
  labelSize?: string;
  body?: boolean;
}> {}

// Icon component
export class Icon extends SvelteComponent<{
  icon: string;
  pack?: string;
  size?: string;
  type?: string;
  isLeft?: boolean;
  isRight?: boolean;
  isClickable?: boolean;
}> {}

// Input component
export class Input extends SvelteComponent<{
  value?: string | number;
  type?: string;
  size?: string;
  expanded?: boolean;
  passwordReveal?: boolean;
  maxlength?: number;
  hasCounter?: boolean;
  loading?: boolean;
  icon?: string;
  iconPack?: string;
  disabled?: boolean;
}> {}

// Message component
export class Message extends SvelteComponent<{
  type?: string;
  title?: string;
  size?: string;
  closable?: boolean;
  active?: boolean;
  autoClose?: boolean;
  duration?: number;
  ariaCloseLabel?: string;
}> {}

// Modal component
export class Modal extends SvelteComponent<{
  active?: boolean;
  animation?: string | Function;
  animProps?: Record<string, any>;
  size?: string;
  showClose?: boolean;
  onBody?: boolean;
}> {
  static open(props: Record<string, any>): any;
  close?: () => void;
}

// ModalCard component
export class ModalCard extends SvelteComponent<{
  title?: string;
  showClose?: boolean;
}> {
  static open(props: Record<string, any>): any;
  close?: () => void;
}

// Notification component
export class Notification extends SvelteComponent<{
  type?: string;
  title?: string;
  message?: string;
  position?: string;
  duration?: number;
  infinite?: boolean;
  pauseOnHover?: boolean;
  dismissible?: boolean;
  closeOnClick?: boolean;
  container?: HTMLElement;
}> {
  static create(props: string | { message?: string }): any;
}

// Progress component
export class Progress extends SvelteComponent<{
  value?: number;
  max?: number;
  type?: string;
  size?: string;
  striped?: boolean;
  animated?: boolean;
}> {}

// Select component
export class Select extends SvelteComponent<{
  selected?: any;
  type?: string;
  placeholder?: string;
  multiple?: boolean;
  size?: string;
  nativeSize?: number;
  expanded?: boolean;
  rounded?: boolean;
  required?: boolean;
  loading?: boolean;
  icon?: string;
  iconPack?: string;
  disabled?: boolean;
}> {}

// Snackbar component
export class Snackbar extends SvelteComponent<{
  active?: boolean;
  message?: string;
  type?: string;
  position?: string;
  actionText?: string;
  indefinite?: boolean;
  duration?: number;
  onAction?: () => void;
}> {}

// Switch component
export class Switch extends SvelteComponent<{
  checked?: boolean;
  type?: string;
  size?: string;
  rounded?: boolean;
  outlined?: boolean;
  position?: 'is-left' | 'is-right';
  passive?: boolean;
  disabled?: boolean;
  label?: string;
  name?: string;
  id?: string;
  required?: boolean;
}> {}

// Tabs component
export class Tabs extends SvelteComponent<{
  type?: string;
  size?: string;
  expanded?: boolean;
  position?: 'is-centered' | 'is-right';
}> {}

// Tab component
export class Tab extends SvelteComponent<{
  active?: boolean;
  icon?: string;
  iconPack?: string;
  disabled?: boolean;
}> {}

// Tag component
export class Tag extends SvelteComponent<{
  type?: string;
  size?: string;
  rounded?: boolean;
  attached?: 'has-addons' | 'is-centered' | 'is-right';
  closeable?: boolean;
  onclose?: () => void;
}> {}

// Taglist component
export class Taglist extends SvelteComponent<{
  centered?: boolean;
  right?: boolean;
}> {}

// Toast component
export class Toast extends SvelteComponent<{
  active?: boolean;
  message?: string;
  type?: string;
  position?: string;
  duration?: number;
  indefinite?: boolean;
  dismissible?: boolean;
}> {}

// Tooltip component
export class Tooltip extends SvelteComponent<{
  active?: boolean;
  label?: string;
  type?: string;
  position?: 'is-top' | 'is-bottom' | 'is-left' | 'is-right';
  always?: boolean;
  animated?: boolean;
  square?: boolean;
  multiline?: boolean;
  size?: string;
  delay?: number;
}> {}

// Svelma namespace
export const Svelma: {
  Button: typeof Button;
  Collapse: typeof Collapse;
  Dialog: typeof Dialog;
  Field: typeof Field;
  Icon: typeof Icon;
  Input: typeof Input;
  Message: typeof Message;
  Modal: typeof Modal;
  ModalCard: typeof ModalCard;
  Notification: typeof Notification;
  Progress: typeof Progress;
  Select: typeof Select;
  Snackbar: typeof Snackbar;
  Switch: typeof Switch;
  Tabs: typeof Tabs;
  Tab: typeof Tab;
  Tag: typeof Tag;
  Taglist: typeof Taglist;
  Toast: typeof Toast;
  Tooltip: typeof Tooltip;
};

// Utility functions
export function chooseAnimation(animation: string | Function): Function;
export function isEnterKey(e: KeyboardEvent): boolean;
export function isDeleteKey(e: KeyboardEvent): boolean;
export function isEscKey(e: KeyboardEvent): boolean;
export function omit(obj: Record<string, any>, ...keysToOmit: string[]): Record<string, any>;
export function typeToIcon(type: string): string | null;
export function getEventsAction(component: SvelteComponent): (node: HTMLElement) => { destroy: () => void };
