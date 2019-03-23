interface IMetaOg {
  title: string;
  description: string;
  image: string;
}

interface IMeta {
  title: string;
  description: string;
  og?: IMetaOg;
}
