import { withNamespaces } from "server/i18n";

import { Bags } from "./BagsPage";

import { homeXl } from "static/images/home";

export const BagsPage = withNamespaces("bags")(Bags);

const title = "Культові сумки від Олесі Сахро";
const description = `Сумки для вишуканих жінок, з тонким смаком і бажанням відчувати себе особливою`;
const meta = {
  title,
  description,
  og: {
    title,
    description,
    image: homeXl,
  },
};

BagsPage.getInitialProps = () => ({
  namespacesRequired: ["bags"],
  meta,
});
