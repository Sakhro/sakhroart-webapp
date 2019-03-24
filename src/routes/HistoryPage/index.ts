import { withNamespaces } from "server/i18n";

import { History } from "./HistoryPage";

import { olesyaSakhro } from "static/images/history";

export const HistoryPage = withNamespaces("history")(History);

const title = "Початок шляху Олесі Сахро";
const description = `
  Досліджуючи і аналізуючи різні техніки вишивки і етнічні мотиви,
  вона розсунула межі розуміння в цій області і винайшла свою унікальну техніку...
`;
const meta = {
  title,
  description,
  og: {
    title,
    description,
    image: olesyaSakhro,
  },
};

HistoryPage.getInitialProps = () => ({
  namespacesRequired: ["history"],
  meta,
});
