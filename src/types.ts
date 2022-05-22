export type buttonProps = {
  theme?: string;
  onClick: (data: Todo) => void;
  children: string;
};

export type TodolistProps = {
  done: boolean;
  check: (data: Todo) => void;
  onDelete: (data: Todo) => void;
  todo: { id: number; title: string; done: boolean };
};

export type TodoFormProps = {
  create: (data: string) => void;
  hideForm: any;
  todo?: { id: number; title: string; done: boolean };
};

export type Todo = {
  id: number;
  title: string;
  done: boolean;
};
