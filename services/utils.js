
export const filterTaggedLists = lists => lists.filter(list =>
  list.name.includes('[TTrack]')
);

export const getLabelTimeForList = list => list.cards.reduce((labels, card))
