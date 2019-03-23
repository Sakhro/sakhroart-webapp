import { withNamespaces } from "server/i18n";

import { HomePageBase } from "./HomePage";

export const HomePage = withNamespaces("common")(HomePageBase);

HomePage.getInitialProps = () => ({
  namespacesRequired: ["common"],
});
