import types from "../types/index";
declare const PixelCode: {
    pixelCode(args: types.TagsSnippetsProps): {
        script: (s: any) => HTMLScriptElement;
        noScript: () => HTMLElement;
    };
    initialize({ id, advancedMatching }: types.InitializeProps): void;
    pageView(): void;
    track({ title, data }: types.TrackProps): void;
    fbq(...args: any[]): void;
};
export default PixelCode;
