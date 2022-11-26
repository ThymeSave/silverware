export const mapMetaData = (mappingEntries: (readonly [object, string])[] | null) => {
  const metaData = new Map<string, string>();
  const mapping = new Map<object, string>(mappingEntries);
  for (let enumVal of mapping.keys()) {
    for (let key of Object.keys(enumVal)) {
      metaData.set(key.toLowerCase(), mapping.get(enumVal)!!);
    }
  }
  return metaData;
};
