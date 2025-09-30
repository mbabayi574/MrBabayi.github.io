declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "ion-icon": {
        name?: string;
        class?: string;
        style?: string | { [key: string]: string | number };
        [key: string]: any;
      };
    }
  }
}

export {};
