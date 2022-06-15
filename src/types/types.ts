export type buttonProps = {
  theme?: string;
  onClick: (data: any) => void;
  children: string;
  className?: string;
};

export type TodoFormProps = {
  hideForm: any;
  todo?: { id: number; title: string; done: boolean };
};

export type Todo = {
  id: number;
  title: string;
  done: boolean;
};

export type User = {
  id: number;
  name: string;
};
