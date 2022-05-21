export type buttonProps = {
  theme?: string;
  onClick: (data: any) => void;
  children: string;
};

export type TodolistProps = {
  done: any | boolean;
  check: any;
  onDelete: (data: any) => void;
  todo: { id: number; title: string };
};

export type TodoFormProps = {
  create: (data: any) => void;
  hideForm: any;
};
