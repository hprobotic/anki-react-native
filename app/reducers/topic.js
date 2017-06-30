type State = Array<string>;
type Action = { type: string; list: Array<any>; };

function topics(state: State = [], action: Action): State {
  if (action.type === 'LOADED_SESSIONS') {
    var topicsMap = Object.create(null);
    action.list.forEach((session) => {
      var tags = session.get('tags') || [];
      tags.forEach((tag) => {
        topicsMap[tag] = true;
      });
    });
    return Object.keys(topicsMap).sort();
  }
  return state;
}

module.exports = topics;