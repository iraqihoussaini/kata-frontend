export interface Table {
  title: String;
  header: String[];
  body: Body[];
}

export interface Body {
  input: number | String;
  output: String;
}
