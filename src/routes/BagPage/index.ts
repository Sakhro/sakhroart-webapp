import { withNamespaces } from "server/i18n";

import { Bag } from "./BagPage";

export const BagPage = withNamespaces("bags")(Bag);

BagPage.getInitialProps = ({ query }) => ({
  namespacesRequired: ["bags"],
  slug: query.slug,
});
