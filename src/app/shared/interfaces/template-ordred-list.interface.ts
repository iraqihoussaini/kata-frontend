export interface TemplateOrdredList {
  title?: String;
  paragraph: String;
  list?: String[];
  listWithLink?: OrdredListWithLink[];
}

export interface OrdredListWithLink{
    textBlod: String;
    link: String;
    labelLink: String;
}