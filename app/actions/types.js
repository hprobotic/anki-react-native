type ParseOject = Object;

export type Action = 
    { type: 'LOADED_ABOUT', list: Array<ParseObject> }
  | { type: 'LOGGED_IN', source: ?string; data: { id: string; name: string; sharedSchedule: ?boolean; } }
  | { type: 'SKIPPED_LOGIN' }
  ;
export default Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;
export type GetState = () => Object;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;