import { withNamespaces } from "server/i18n";

import { Home } from "./HomePage";

import { homeXl } from "static/images/home";

export const HomePage = withNamespaces("common")(Home);

const title = "Олеся Сахро | Офіційний сайт";
const description = "Культові сумки від Олесі Сахро";
const meta = {
  title,
  description,
  og: {
    title,
    description,
    image: homeXl,
  },
};

HomePage.getInitialProps = () => ({
  namespacesRequired: ["common"],
  meta,
});
