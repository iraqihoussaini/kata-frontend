const paths = {
    home: 'home',
    kata: 'kata',
  } as const;
  
  export const AppRoutes: {
    [key in keyof typeof paths]: RoutePath;
  } = {
    home: {
      stringPath: paths.home,
    },
    kata: {
      stringPath: paths.kata,

    }
  };

  export interface RoutePath {
    stringPath: string;
  }
  export interface RoutesPaths {
    [key: string]: RoutePath;
  }