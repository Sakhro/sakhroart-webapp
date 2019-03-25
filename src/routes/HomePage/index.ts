import { withNamespaces } from "server/i18n";

import { Home } from "./HomePage";

export const HomePage = withNamespaces("common")(Home);

HomePage.getInitialProps = () => ({
  namespacesRequired: ["common"],
});
