import Snippets from "./snippets";
import types from "../types/index";

let snippets: types.TagFunction = {};

const PixelCode = {
  pixelCode(args: types.TagsSnippetsProps) {
    snippets = Snippets.tags(args);

    const script = (s?: any) => {
      const script = document.createElement("script");
      script.innerHTML = s || snippets.script;
      return script;
    };

    const noScript = () => {
      const noscript = document.createElement("noscript");
      noscript.innerHTML = snippets.noscript;
      return noscript;
    };

    return { script, noScript };
  },

  initialize({ id, advancedMatching, args }: types.InitializeProps) {
    const pixelCode = this.pixelCode({ id, advancedMatching, args });

    document.head.insertBefore(pixelCode.script(), document.head.childNodes[0]);
    document.head.insertBefore(
      pixelCode.noScript(),
      document.head.childNodes[0]
    );
  },

  pageView() {
    const pixelCode = this.pixelCode({});

    document.head.insertBefore(
      pixelCode.script(snippets.pageView),
      document.head.childNodes[0]
    );
  },

  track({ title, data }: types.TrackProps) {
    const pixelCode = this.pixelCode({ title, data });

    document.head.insertBefore(
      pixelCode.script(snippets.track),
      document.head.childNodes[0]
    );
  },

  fbq(...args: any[]) {
    const pixelCode = this.pixelCode({args: args});

    document.head.insertBefore(
      pixelCode.script(snippets.fbq),
      document.head.childNodes[0]
    );
  }
};

export default PixelCode;
