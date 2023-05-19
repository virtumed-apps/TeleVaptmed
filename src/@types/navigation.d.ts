export type RoomNavigationProps = {
  id?: string;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      room: RoomNavigationProps;
    }
  }
}