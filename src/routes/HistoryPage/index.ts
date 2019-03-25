import { withNamespaces } from "server/i18n";

import { History } from "./HistoryPage";

export const HistoryPage = withNamespaces("history")(History);

HistoryPage.getInitialProps = () => ({
  namespacesRequired: ["history"],
});
