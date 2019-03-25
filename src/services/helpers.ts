export const getMeta = (t: TranslateFuncType, image: string): IMeta => {
  const title = t("metaTitle");
  const description = t("metaDescription");

  return {
    title,
    description,
    og: {
      title,
      description,
      image,
    },
  };
};
