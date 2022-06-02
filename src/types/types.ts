export type buttonProps = {
  theme?: string;
  onClick: (data: any) => void;
  children: string;
};

export type TodoFormProps = {
  // create: (data: string) => void;
  hideForm: any;
  todo?: { id: number; title: string; done: boolean };
};

export type Todo = {
  id: number;
  title: string;
  done: boolean;
};
