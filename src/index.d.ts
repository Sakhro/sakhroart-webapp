interface IMeta {
  title: string;
  description: string;
  og?: IMetaOg;
}

interface IMetaOg {
  title: string;
  description: string;
  image: string;
}

type TranslateFuncType = (key: string) => string;
