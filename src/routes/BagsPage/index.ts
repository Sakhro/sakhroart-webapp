import { withNamespaces } from "server/i18n";

import { Bags } from "./BagsPage";

export const BagsPage = withNamespaces("bags")(Bags);

BagsPage.getInitialProps = () => ({
  namespacesRequired: ["bags"],
});
